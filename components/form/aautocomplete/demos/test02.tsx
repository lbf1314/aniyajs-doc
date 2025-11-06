import { AAutoComplete } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';

const Test02: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test02" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <AAutoComplete
        name="test02"
        label="自动完成2"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        initialValue={'a'}
        url="http://yapi.yunxiaowei.cn/mock/168/auto-complete"
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

export default Test02;
