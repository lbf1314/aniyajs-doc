import { AColorPicker } from '@aniyajs/components';
import { Button, Form, theme } from 'antd';
import React from 'react';

const Test01: React.FC<any> = () => {
  const { token } = theme.useToken();

  const onFinish = (values: any) => {
    console.log('values :>> ', values.test01.toHexString());
  };

  return (
    <Form name="test01" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <AColorPicker
        name="test01"
        label="颜色选择"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        initialValue={token.colorPrimary}
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        widgetProps={{
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

export default Test01;
