import { AInput } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';

const Test04: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test04" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <AInput.Number
        name="asset"
        label="资产"
        initialValue={10}
        rules={[
          {
            required: true,
            message: ' 请输入',
          },
        ]}
        widgetProps={{
          prefix: '￥',
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

export default Test04;
