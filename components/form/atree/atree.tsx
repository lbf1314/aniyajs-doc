import { Input, Spin, Tree } from 'antd';
import type { DataNode, EventDataNode } from 'antd/lib/tree';
import type { TreeProps } from 'antd/lib/tree/Tree';
import omit from 'omit.js';
import React, { useEffect, useRef, useState } from 'react';
import type { RequestOptionsInit } from 'umi-request';
import { fetch } from '../../services';
import { flatArr } from '../../utils';
import type { LoadDataOption } from '../../types';

import type { Key } from 'react';

interface QueryOption {
  url: string;
  options?: RequestOptionsInit;
}

export interface ATreeNormalPropsType {
  treeData?: TreeProps['treeData'];
  checkStrictlyChecked?: boolean;
  value?: Key[];
  onChange?: (value: any) => void;
  widgetProps?: Omit<TreeProps, 'treeData'>;
  url?: string;
  loadDataOptions?: Array<LoadDataOption | null | undefined>;
  formatter?: (
    childData: any[],
    curIndex?: number,
  ) => TreeProps['treeData'] | false;
  asyncFn?: (queryOption: QueryOption, curIndex?: number) => Promise<any>;
}

const updateTreeData = (
  list: TreeProps['treeData'],
  children: TreeProps['treeData'],
  key: Key,
): DataNode[] => {
  return list.map((node) => {
    if (node.key === key) {
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

const ATreeItem: React.FC<ATreeNormalPropsType> = (props) => {
  const {
    value: treeValue,
    onChange,
    checkStrictlyChecked,
    widgetProps,
    treeData,
    url,
    loadDataOptions,
    formatter,
    asyncFn,
  } = props;
  const { checkStrictly, checkable, ...rest } = widgetProps;
  const treeRestProps = omit(rest, ['onSelect', 'onCheck']);

  const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);
  const [selectedKeys, setSelectedKeys] = useState<undefined | Key[]>();
  const [checkedKeys, setCheckedKeys] = useState<
    | {
      checked: Key[];
      halfChecked: Key[];
    }
    | Key[]
    | undefined
  >();
  const [expandedKeys, setExpandedKeys] = useState<undefined | Key[]>();
  const [itemLoading, setItemLoading] = useState<boolean>(false);
  const [newTreeData, setNewTreeData] = useState<
    TreeProps['treeData'] | undefined | []
  >(treeData);

  const initComponent = useRef(false);

  useEffect(() => {
    if (
      newTreeData &&
      newTreeData?.length > 0 &&
      treeValue &&
      !initComponent.current &&
      !url
    ) {
      setExpandedKeys(treeValue);

      initComponent.current = true;
    }
  }, [newTreeData, treeValue]);

  const formatWrapper = (
    data: any,
    isCascade: boolean,
    curIndex?: number,
    isEnd?: boolean,
  ): TreeProps['treeData'] => {
    if (!isCascade) {
      if (formatter) {
        const formatRes = formatter(data);

        if (formatRes === false) {
          return data;
        }

        return formatRes as TreeProps['treeData'];
      }

      return data;
    } else {
      if (formatter) {
        const formRes = formatter(data, curIndex);

        if (formRes === false) {
          return (data as TreeProps['treeData'])?.map((item) => ({
            ...item,
            isLeaf: isEnd,
          }));
        }

        return formRes;
      }

      return (data as TreeProps['treeData'])?.map((item) => ({
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
        setExpandedKeys(treeValue);
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

  const onLoadData = async (treeNode: EventDataNode<DataNode>) => {
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
                [String(queryKey)]: treeNode?.key,
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
          treeNode?.key,
        ),
      );
    }
  };

  const triggerChange = (keys: unknown) => {
    if (onChange) {
      onChange(keys);
    }
  };

  const onSelect = (keys: Key[], info: any) => {
    if (rest.onSelect) {
      rest.onSelect(keys, info);
    }

    setSelectedKeys(keys);
    triggerChange(keys);
  };

  const onCheck = (
    checkedNode:
      | {
        checked: Key[];
        halfChecked: Key[];
      }
      | Key[],
    info: { node: EventDataNode<DataNode>; checked: boolean },
  ) => {
    let checkStrictlyCheckedKeys = checkedNode;

    if (checkStrictly && checkStrictlyChecked && !Array.isArray(checkedNode)) {
      const { node, checked } = info;
      const newArr = flatArr<EventDataNode<DataNode>>({
        initArr: [node],
        childrenField: 'children',
      })?.map((item) => item?.key);
      if (checked) {
        // @ts-ignore
        checkStrictlyCheckedKeys = [
          ...newArr,
          ...(checkedNode?.checked ?? []),
        ].reduce(
          (pre, cur) => (pre.indexOf(cur) === -1 ? [...pre, cur] : pre),
          [],
        );
      } else {
        checkStrictlyCheckedKeys = checkedNode?.checked?.filter(
          (item) => newArr?.indexOf(item) === -1,
        );
      }
    }
    if (rest.onCheck) {
      // @ts-ignore
      rest.onCheck(checkedNode, info);
    }

    // @ts-ignore
    if (checkStrictlyCheckedKeys?.checked) {
      // @ts-ignore
      checkStrictlyCheckedKeys = checkStrictlyCheckedKeys?.checked;
    }

    setCheckedKeys(checkStrictlyCheckedKeys);
    triggerChange(checkStrictlyCheckedKeys);
  };

  const onExpand = (keys: Key[]) => {
    initComponent.current = true;
    setExpandedKeys(keys);
    setAutoExpandParent(false);
  };

  if (itemLoading) {
    return <Spin />;
  }

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
    <Tree
      autoExpandParent={autoExpandParent}
      expandedKeys={expandedKeys}
      treeData={newTreeData}
      selectedKeys={treeValue || selectedKeys}
      checkedKeys={treeValue || checkedKeys}
      onSelect={onSelect}
      onExpand={onExpand}
      onCheck={onCheck}
      checkStrictly={checkStrictly}
      checkable={checkable}
      selectable={!checkable}
      {...(loadDataOptions ? { loadData: onLoadData } : null)}
      {...treeRestProps}
    />
  );
};

export default ATreeItem;
