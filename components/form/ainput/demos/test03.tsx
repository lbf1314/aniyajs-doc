import { AInput } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';

const Test03: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test03" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <AInput.Password
        name="password"
        label="密码"
        initialValue={'123456'}
        rules={[
          {
            required: true,
            message: ' 请输入',
          },
        ]}
        widgetProps={{
          placeholder: '请输入密码',
          allowClear: true,
        }}
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
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
