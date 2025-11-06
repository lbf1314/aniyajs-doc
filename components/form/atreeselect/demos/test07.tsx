import { ATreeSelect } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';
import { queryPost } from '../../../services';
import { multiArrayFormatter } from '../../../utils';

const Test07: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test07" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <ATreeSelect
        name="atree1"
        label="树节点1"
        initialValue={['a1', 1, 3, 4, 7, 8]}
        url="http://yapi.yunxiaowei.cn/mock/168/tree-data/async-fn"
        formatter={(data) =>
          multiArrayFormatter<any, any>({
            initArr: data,
            initChildrenFieldName: 'students',
            resChildrenFieldName: 'children',
            rotorObj: (item) => {
              return {
                value: item?.classname || item?.order,
                title: item?.class || item?.name,
              };
            },
          })
        }
        asyncFn={async (queryOption) => {
          const res = (await queryPost(queryOption.url, { test: 11 })) as any;

          if (res?.code === 200) {
            return res?.result ?? [];
          }

          return [];
        }}
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        widgetProps={{
          multiple: true,
        }}
      />
      <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Test07;
