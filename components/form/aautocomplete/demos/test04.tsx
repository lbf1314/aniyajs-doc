import { AAutoComplete } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';
import { queryPost } from '../../../services';

const Test04: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test04" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <AAutoComplete
        name="test04"
        label="自动完成4"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        initialValue={'a'}
        url="http://yapi.yunxiaowei.cn/mock/168/auto-complete/asyncFn"
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        formatter={(data) => {
          return data?.map((item) => ({
            label: item?.name,
            value: item?.name,
          }));
        }}
        asyncFn={async (url, value) => {
          const res = (await queryPost(url, { test: value })) as any;

          if (res?.code === 200) {
            return res?.result ?? [];
          } else {
            return [];
          }
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

export default Test04;
