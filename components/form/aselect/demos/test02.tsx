import { ASelect } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';

const Test02: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test02" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <ASelect
        name="test02"
        label="选择1"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        initialValue={3}
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        widgetProps={{}}
        url="http://yapi.yunxiaowei.cn/mock/168/sys/cascader/test01"
      />
      <ASelect
        name="test03"
        label="多选1"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        initialValue={[1, 3, 4, 5]}
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        widgetProps={{
          mode: 'multiple',
        }}
        url="http://yapi.yunxiaowei.cn/mock/168/sys/cascader/test01"
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
