import React, { useEffect, useRef, useState } from 'react';
import { OrgTreeProps, DataType } from './index';
import type { Key } from "../../types";
import { flatArr } from '../../utils';

export type TreeNodeProps = Omit<OrgTreeProps, 'horizontal' | 'onExpand'> & {
  onExpand: (key: Key, data: DataType) => void;
}

// 判断是否为叶子节点
const isLeafHandle = (data: DataType) => Array.isArray(data?.children);

// 创建node节点
const renderNode = (data: DataType, props: TreeNodeProps, childrenRender?: React.ReactNode): React.ReactNode => {
  const { expandKeys = [], onExpand, onNodeClick, curSelected, isCollapsable = true, renderContent } = props
  const isLeaf = isLeafHandle(data)

  const onCollapse = (data: DataType, direct: 'top' | 'bottom' | 'left' | 'right') => {
    if (onExpand) {
      onExpand(data.key, data)
    }
  }

  const clickHandle = (key: Key, data: DataType) => {
    if (onNodeClick) {
      onNodeClick(key, data)
    }
  }

  return (
    <div className={`org_tree_node ${data?.sameLevels > 1 ? '' : 'isOne'}`} key={data.key}>
      <div className={`org_tree_node_label ${isLeaf && expandKeys.includes(data.key) ? 'isLeaf' : ''} ${curSelected === data.key ? 'org_tree_node_label_sel' : ''}`} onClick={() => clickHandle(data.key, data)}>
        <div className='org_tree_node_content'>
          {
            renderContent ? renderContent(data) : (
              <>
                <div className={`org_tree_node_content_title ${isLeaf ? 'isChild' : ''}`}>{data?.title ?? ''}</div>
                <div className='org_tree_node_content_text'>{data?.label ?? ''}</div>
              </>
            )
          }
        </div>
        {
          isCollapsable ? (
            <>
              {/* <span className='org_fold_top' onClick={() => onCollapse(data, 'top')}></span> */}
              {isLeaf && <span className={expandKeys.includes(data.key) ? 'org_fold_bottom_top' : 'org_fold_bottom'} onClick={() => onCollapse(data, 'bottom')}></span>}
              {/* <span className='org_fold_left' onClick={() => onCollapse(data, 'left')}></span>
              <span className='org_fold_right' onClick={() => onCollapse(data, 'right')}></span> */}
            </>
          ) : null
        }
      </div>
      {(isLeaf && expandKeys.includes(data.key)) ? (
        <div className='org_tree_children' id={`org_tree_children_${data.key}`}>
          {
            data.children?.map((item: DataType) => renderNode({ ...item, sameLevels: data.children.length }, props))
          }
        </div>
      ) : null}
    </div>
  )
}

// 创建children节点
const renderChildren = (data: DataType, props: TreeNodeProps, childrens: DataType[] | []): React.ReactNode => {
  const { expandKeys = [] } = props
  const isLeaf = isLeafHandle(data)

  return (isLeaf && expandKeys.includes(data.key)) ? (
    <div className='org_tree_children' id={`org_tree_children_${data.key}`}>
      {
        childrens?.map((item: DataType) => renderNode({ ...item, sameLevels: childrens.length }, props))
      }
    </div>
  ) : null
}

const TreeNode = (props: TreeNodeProps): React.ReactNode => {
  const { isCollapsable = true } = props;
  const allKeys = flatArr<DataType>({ initArr: [props.data], childrenField: 'children' }).map(item => item.key)
  const [expandKeys, setExpandKeys] = useState<Key[] | []>([]);
  const [curSelected, setCurSelected] = useState<Key | undefined>(props?.curSelected ?? undefined);
  const [childrens, setChildrens] = useState<DataType[] | []>([]);
  const isInit = useRef(true)

  useEffect(() => {
    if (isInit.current && props.defaultExpandAll) {
      setExpandKeys(allKeys)
    } else {
      if (Array.isArray(props?.expandKeys)) {
        setExpandKeys(props?.expandKeys)
      }
    }
    isInit.current = false
  }, [props.expandKeys])

  useEffect(() => {
    if (props?.curSelected !== undefined) {
      setCurSelected(props?.curSelected)
    }
  }, [props.curSelected])

  useEffect(() => {
    setChildrens(props.data.children ?? [])
  }, [])


  useEffect(() => {
    console.log('childrens :>> ', childrens);
  }, [childrens])

  const onNodeClick = (key: Key, data: DataType) => {
    if (curSelected !== key) {
      setCurSelected(key)
    }

    if (props.onNodeClick) {
      props.onNodeClick(key, data)
    }
  }

  const onExpand = async (key: Key, data: DataType) => {
    if (props.onExpand) {
      const newData = await props.onExpand(key, data)

      if (Array.isArray(newData)) {
        setChildrens(newData)
      } else {
        setChildrens(data?.children ?? [])
        props.onExpand(key, data)
        if (!props.expandKeys) {
          // @ts-ignore
          if (expandKeys.includes(key)) {
            setExpandKeys(state => state.filter(item => item !== key))
          } else {
            setExpandKeys(state => [...state, key])
          }
        }
      }
    } else {
      setChildrens(data?.children ?? [])
      // @ts-ignore
      if (expandKeys.includes(key)) {
        setExpandKeys(state => state.filter(item => item !== key))
      } else {
        setExpandKeys(state => [...state, key])
      }
    }
  }

  return renderNode(
    props.data,
    {
      ...props,
      onExpand,
      expandKeys: isCollapsable ? expandKeys : allKeys,
      onNodeClick,
      curSelected
    },
    renderChildren(props.data, props, childrens),
  )
}

export default TreeNode;
