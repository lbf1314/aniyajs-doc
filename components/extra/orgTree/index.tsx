import React from 'react';
import type { Key } from '../../types';
import TreeNode from './TreeNode';
import './index.less'

/**
 *
 * demo1：基本演示，可展开类型
 * demo2：不可折叠
 * demo3：自定义节点内容
 * demo5：自定义展开方向
 * demo6：异步
 * demo8：完全受控
 *
 */

export interface DataType {
  label: Key; // 节点文本
  key: Key; // 节点唯一标识
  title?: Key; // 节点标题
  children?: DataType[]; // 子数据
  [key: string]: any;
}
export interface OrgTreeProps {
  data: DataType; // 树结构数据
  horizontal?: 'left' | 'right' | 'top' | 'bottom'; // 展开方向
  isCollapsable?: boolean; // 是否可折叠
  defaultExpandAll?: boolean; // 默认是否展开全部
  expandKeys?: Key[] | []; // 展开的节点
  curSelected?: Key; // 默认选中选中的节点
  renderContent?: (data: DataType) => React.ReactNode; // 自定义节点内容
  onNodeClick?: (key: Key, data: DataType) => void; // 节点点击事件
  onExpand?: (key: Key, data: DataType) => Promise<DataType[] | []> | DataType[] | [] | void; // 节点展开事件
}

const OrgTree: React.FC<OrgTreeProps> = (props) => {
  const { horizontal, ...restProps } = props

  return (
    <div className='org_tree_container'>
      <div className={`org_tree ${horizontal ? 'horizontal' : ''}`}>
        {/* @ts-ignore */}
        <TreeNode
          {...restProps}
        />
      </div>
    </div>
  )
}

export default OrgTree;
