import { Input, TreeSelect } from 'antd';
import type { TreeSelectProps } from 'antd/es/tree-select';
import React, { useEffect, useState } from 'react';
import type { RequestOptionsInit } from 'umi-request';
import { fetch } from '../../services';
import type { Key, LoadDataOption } from '../../types';
interface QueryOption {
  url: string;
  options?: RequestOptionsInit;
}

export interface ATreeSelectNormalPropsType {
  value?: Key[];
  onChange?: (value: any) => void;
  treeData?: TreeSelectProps['treeData'];
  widgetProps?: Omit<TreeSelectProps, 'treeData'>;
  url?: string;
  loadDataOptions?: Array<LoadDataOption | null | undefined>;
  formatter?: (
    childData: any[],
    curIndex?: number,
  ) => TreeSelectProps['treeData'] | false;
  asyncFn?: (queryOption: QueryOption, curIndex?: number) => Promise<any>;
}

const updateTreeData = (
  list: TreeSelectProps['treeData'],
  children: TreeSelectProps['treeData'],
  key: Key,
): any[] => {
  return list.map((node) => {
    if (node.value === key) {
      return {
        ...node,
        isLeaf: !children?.length,
        children,
      };
    }
    if (node.children) {
      return {
        ...node,
        children: updateTreeData(node.children, children, key),
      };
    }
    return node;
  });
};

const ATreeSelectNormal: React.FC<ATreeSelectNormalPropsType> = (props) => {
  const {
    value: treeValue,
    onChange,
    treeData,
    url,
    asyncFn,
    loadDataOptions,
    formatter,
    widgetProps,
  } = props;
  const { treeCheckStrictly, treeCheckable, multiple } = widgetProps;
  const [newTreeValue, setNewTreeValue] = useState<TreeSelectProps['value']>();
  const [itemLoading, setItemLoading] = useState<boolean>(false);
  const [newTreeData, setNewTreeData] = useState<
    TreeSelectProps['treeData'] | undefined | []
  >(treeData);

  const formatWrapper = (
    data: any,
    isCascade: boolean,
    curIndex?: number,
    isEnd?: boolean,
  ): TreeSelectProps['treeData'] => {
    if (!isCascade) {
      if (formatter) {
        const formatRes = formatter(data);

        if (formatRes === false) {
          return data;
        }

        return formatRes as TreeSelectProps['treeData'];
      }

      return data;
    } else {
      if (formatter) {
        const formRes = formatter(data, curIndex);

        if (formRes === false) {
          return (data as TreeSelectProps['treeData'])?.map((item) => ({
            ...item,
            isLeaf: isEnd,
          }));
        }

        return formRes;
      }

      return (data as TreeSelectProps['treeData'])?.map((item) => ({
        ...item,
        isLeaf: isEnd,
      }));
    }
  };

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

  useEffect(() => {
    (async () => {
      if (url) {
        setItemLoading(true);
        const data = await fetchData({ url });
        setItemLoading(false);
        const newRes = formatWrapper(data, false);
        setNewTreeData(newRes);
        return;
      }

      const firstLoadDataOption = loadDataOptions?.[0];
      if (firstLoadDataOption) {
        const { action } = firstLoadDataOption;
        const queryOption: QueryOption = {
          url: action,
        };
        setItemLoading(true);
        const childData = await fetchData(queryOption, 0);
        const stagRes = formatWrapper(
          childData,
          true,
          0,
          loadDataOptions?.length === 1,
        );
        setNewTreeData(stagRes);
        setItemLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    if (Array.isArray(treeValue)) {
      if (treeCheckStrictly) {
        setNewTreeValue(treeValue?.map((item) => ({ value: item })));
        return;
      }
      if (!treeCheckable && !multiple) {
        setNewTreeValue(treeValue?.[0]);
        return;
      }
      setNewTreeValue(treeValue);
    }
  }, [treeValue]);

  const onLoadData = async (treeNode: any) => {
    if (Array.isArray(loadDataOptions)) {
      const curPos = treeNode?.pos?.split('-');
      const curIndex = curPos?.length - 2;
      const isEnd = curIndex + 2 === loadDataOptions?.length;
      const curDataOption = loadDataOptions?.[curIndex + 1];
      const { action, queryKey } = curDataOption;
      const queryOption: QueryOption = {
        url: action,
        options: {
          ...(queryKey
            ? {
              params: {
                [String(queryKey)]: treeNode?.value,
              },
            }
            : null),
        },
      };

      const childData = await fetchData(queryOption, curIndex + 1);

      setNewTreeData((d) =>
        updateTreeData(
          d,
          formatWrapper(childData, true, curIndex + 1, isEnd),
          treeNode?.value,
        ),
      );
    }
  };

  const onTreeSelectChange = (value: TreeSelectProps['value']) => {
    if (onChange) {
      if (treeCheckStrictly) {
        onChange(value?.map((item) => item?.value));
        return;
      }

      if (!treeCheckable && !multiple) {
        onChange([value]);
        return;
      }

      onChange(value);
    }
  };

  if ((!newTreeData || !newTreeData?.length) && !itemLoading) {
    return (
      <Input
        style={{ backgroundColor: '#fff' }}
        placeholder="暂无数据"
        disabled
      />
    );
  }

  return (
    <TreeSelect
      loading={itemLoading}
      value={newTreeValue}
      onChange={onTreeSelectChange}
      treeData={newTreeData}
      treeDefaultExpandedKeys={treeValue}
      showCheckedStrategy={
        treeCheckStrictly || (!treeCheckable && multiple)
          ? 'SHOW_ALL'
          : 'SHOW_CHILD'
      }
      {...(loadDataOptions ? { loadData: onLoadData } : null)}
      {...widgetProps}
    />
  );
};

export default ATreeSelectNormal;
