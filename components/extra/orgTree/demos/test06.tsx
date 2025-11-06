import React, { useState } from 'react';
import { OrgTree } from '@aniyajs/components';
import type { DataType, OrgTreeProps } from '../index';
import { Key } from 'components/types';

const Test06: React.FC = () => {
  const [expandKeys, setExpandKeys] = useState<OrgTreeProps['expandKeys']>([0]);
  const data = {
    key: 0,
    label: '旺旺集团',
    title: '旺旺',
    children: [{
      key: 1,
      label: '技术部',
      children: [{
        key: 4,
        label: '后端工程师'
      }, {
        key: 5,
        label: '前端工程师'
      }, {
        key: 6,
        label: '运维工程师'
      }]
    }, {
      key: 2,
      label: '人事部'
    }, {
      key: 3,
      label: '销售部',
      children: [{
        key: 7,
        label: '后端工程师'
      }]
    }]
  }

  const onExpand = (key: Key) => {
    if (expandKeys.includes((key as never))) {
      setExpandKeys(state => state.filter(item => item !== key))
    } else {
      setExpandKeys(state => [...state, key])
    }
  }

  return (
    <div>
      <OrgTree
        expandKeys={expandKeys}
        data={data}
        onExpand={onExpand}
      />
    </div>
  );
};

export default Test06;
