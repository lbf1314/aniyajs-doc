import { Cascader } from 'antd';
import type { CascaderProps, DefaultOptionType } from 'antd/lib/cascader';
import Omit from 'omit.js';
import React, { useEffect, useState } from 'react';
import type { RequestOptionsInit } from 'umi-request';
import { fetch } from '../../services';
import { Key, LoadDataOption } from '../../types';

export interface Option {
  value: Key;
  label: React.ReactNode;
  disabled?: boolean;
  children?: Option[];
  isLeaf?: boolean;
}

interface QueryOption {
  url: string;
  options?: RequestOptionsInit;
}

export type ACascaderNormalPropsType = CascaderProps<Option> & {
  value?: Key[];
  onChange?: (value: any) => void;
  selectOptions?: CascaderProps<Option>['options'];
  loadDataOptions?: Array<LoadDataOption | null | undefined>;
  formatter?: (
    childData: any[],
    curloadDataOption?: LoadDataOption | null | undefined,
    curIndex?: number,
  ) => Option[] | undefined | false;
  asyncFn?: (queryOption: QueryOption, curIndex?: number) => Promise<any>;
  widgetProps?: CascaderProps<Option>;
};

const setChildData = (
  oldOpts: Option[] | [],
  childData: Option[] | [],
  targetVal: Key,
) => {
  return oldOpts?.map((item) => {
    if (item?.value === targetVal) {
      item.children = childData;
    } else if (item.children) {
      setChildData(item.children, childData, targetVal);
    }

    return { ...item };
  });
};

const ACascader: React.FC<ACascaderNormalPropsType> = (props) => {
  const {
    value,
    onChange,
    selectOptions,
    loadDataOptions,
    formatter,
    asyncFn,
    widgetProps,
  } = props;
  const aCascaderRestProps = Omit(widgetProps, ['options']);
  const [initOptions, setInitOptions] = useState<Option[] | []>(
    selectOptions ?? [],
  );
  const [itemLoading, setItemLoading] = useState<boolean>(false);

  const fetchData = async (queryOption: QueryOption, curIndex?: number) => {
    if (asyncFn) {
      const asyncRes = await asyncFn(queryOption, curIndex);

      if (asyncRes === false) {
        return await fetch(queryOption.url, queryOption?.options);
      }

      return asyncRes;
    }

    return await fetch(queryOption.url, queryOption?.options);
  };

  const formatWrapper = (
    childData: any,
    curloadDataOption?: LoadDataOption | null | undefined,
    curIndex?: number,
    isEnd?: boolean,
  ): Option[] | [] => {
    if (formatter) {
      const formatRes = formatter(childData, curloadDataOption, curIndex);

      if (formatRes === false) {
        return (childData as Option[])?.map((item) => ({
          ...item,
          isLeaf: isEnd,
        }));
      }

      return formatRes;
    }

    return (childData as Option[])?.map((item) => ({ ...item, isLeaf: isEnd }));
  };

  useEffect(() => {
    (async () => {
      const firstLoadDataOption = loadDataOptions?.[0];

      if (firstLoadDataOption) {
        const { action } = firstLoadDataOption;
        const queryOption: QueryOption = {
          url: action,
        };
        setItemLoading(true);
        const childData = await fetchData(queryOption, 0);
        setItemLoading(false);
        setInitOptions(
          formatWrapper(
            childData,
            firstLoadDataOption,
            0,
            loadDataOptions?.length === 1,
          ),
        );
      }

      if (Array.isArray(value) && value?.length > 0) {
        for (let i = 1; i < value.length; i++) {
          const opts = loadDataOptions?.[i];
          if (opts) {
            const { action, queryKey } = opts;
            const queryOption: QueryOption = {
              url: action,
              options: {
                ...(queryKey
                  ? {
                    params: {
                      [String(queryKey)]: value?.[i - 1],
                    },
                  }
                  : null),
              },
            };
            setItemLoading(true);
            const childData = await fetchData(queryOption, i);
            setItemLoading(false);
            setInitOptions((oldOpts) => {
              const cData = formatWrapper(
                childData,
                firstLoadDataOption,
                i,
                loadDataOptions?.length - 1 === i,
              );

              return setChildData(oldOpts, cData, value?.[i - 1]);
            });
          }
        }
      }
    })();
  }, []);

  const loadData = async (selectedOptions?: DefaultOptionType[] | []) => {
    if (Array.isArray(selectedOptions) && loadDataOptions) {
      const curIndex = selectedOptions.length - 1;
      const targetOption = selectedOptions[curIndex];
      const isEnd = curIndex + 2 === loadDataOptions?.length;
      targetOption.loading = true;

      const { value: targetValue } = targetOption;
      const curloadDataOption = loadDataOptions[curIndex + 1];

      if (curloadDataOption) {
        const { action, queryKey } = curloadDataOption;
        const queryOption: QueryOption = {
          url: action,
          options: {
            ...(queryKey
              ? {
                params: {
                  [String(queryKey)]: targetValue,
                },
              }
              : null),
          },
        };
        setItemLoading(true);
        const childData = await fetchData(queryOption, curIndex + 1);
        setItemLoading(false);
        targetOption.loading = false;
        targetOption.children = formatWrapper(
          childData,
          curloadDataOption,
          curIndex + 1,
          isEnd,
        );
        setInitOptions((OPTIONS) => [...OPTIONS]);
      }
    }
  };

  const onCascaderChange = (val: any[]) => {
    if (onChange) {
      onChange(val);
    }
  };

  return (
    // @ts-ignore
    <Cascader
      loading={itemLoading}
      value={value}
      options={initOptions}
      onChange={onCascaderChange}
      {...(loadDataOptions ? { loadData } : null)}
      {...aCascaderRestProps}
    />
  );
};

export default ACascader;
