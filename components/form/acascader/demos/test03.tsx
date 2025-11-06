import { ACascader } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';

const Test03: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test03" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <ACascader
        name="test03"
        label="省市区"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        loadDataOptions={[
          { action: 'http://yapi.yunxiaowei.cn/mock/168/sys/cascader/test01' },
          {
            action: 'http://yapi.yunxiaowei.cn/mock/168/sys/cascader/test02',
            queryKey: 'id',
          },
          {
            action: 'http://yapi.yunxiaowei.cn/mock/168/sys/cascader/test03',
            queryKey: 'id',
          },
        ]}
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        widgetProps={{
          allowClear: true,
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

export default Test03;
