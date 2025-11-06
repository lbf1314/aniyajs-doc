import { ATimePicker } from '@aniyajs/components';
import { Button, Form } from 'antd';
import dayjs from 'dayjs';
import React from 'react';

const Test01: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test01" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <ATimePicker.RangePicker
        name="test2"
        label="时间范围"
        initialValue={[dayjs('12:08:23', 'HH:mm:ss'), dayjs()]}
        rules={[
          {
            required: true,
            message: ' 请输入',
          },
        ]}
        widgetProps={{}}
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

export default Test01;
