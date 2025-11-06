import { ACheckboxGroup } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';

const Test01: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test01" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <ACheckboxGroup
        name="test01"
        label="多选"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        initialValue={['a']}
        options={[
          {
            label: 'A',
            value: 'a',
          },
          {
            label: 'B',
            value: 'b',
          },
          {
            label: 'C',
            value: 'c',
            disabled: true,
          },
          {
            label: 'D',
            value: 'd',
          },
        ]}
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        widgetProps={{}}
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
