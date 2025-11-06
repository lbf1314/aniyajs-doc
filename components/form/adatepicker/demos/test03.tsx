import { ADatePicker } from '@aniyajs/components';
import { Button, Form } from 'antd';
import dayjs from 'dayjs';
import React from 'react';

const Test03: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test03" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <ADatePicker
        name="test03"
        label="选择月"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        initialValue={dayjs('2015/01/01', 'YYYY/MM/DD')}
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        widgetProps={{
          placeholder: '请选择',
          picker: 'month',
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
