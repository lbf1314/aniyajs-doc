import React, { useEffect, useState } from 'react';
import { OrgTree } from '@aniyajs/components';
import type { DataType, OrgTreeProps } from '../index';
import type { Key } from '../../../types';
import { queryPost } from '../../../services';

const Test05: React.FC = () => {
  const [data, setData] = useState<DataType>({ key: null, label: '旺旺集团', title: '旺旺' });

  // 获取组织架构
  const getOrgData = async (id: Key) => {
    const res = await queryPost('http://yapi.yunxiaowei.cn/mock/236/org', { id }) as any;

    if (res?.code === 200 && Array.isArray(res?.data) && res?.data.length) {
      return res?.data
    }

    return []
  }

  const onExpand = async (key: Key) => {
    const orgData = await getOrgData(key)

    return orgData
  }

  useEffect(() => {
    getOrgData(null)
      .then((orgData: OrgTreeProps['data']) => {
        setData((state: DataType) => ({
          ...state,
          ...orgData.length
            ? {
              children: orgData.map((item: DataType) => ({
                ...item,
                ...item.isChildren ? { children: [] } : {}
              }))
            }
            : {}
        }))
      })
  }, [])

  return (
    <div>
      <OrgTree
        expandKeys={[null]}
        data={data}
        onExpand={onExpand}
      />
    </div>
  );
};

export default Test05;
