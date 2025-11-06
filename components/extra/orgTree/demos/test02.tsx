import React from 'react';
import { OrgTree } from '@aniyajs/components';

const Test02: React.FC = () => {
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

  return (
    <div>
      <OrgTree
        data={data}
        isCollapsable={false}
      />
    </div>
  );
};

export default Test02;
