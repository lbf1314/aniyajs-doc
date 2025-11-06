import { ADateRangePicker } from '@aniyajs/components';
import { Button, Form } from 'antd';
import dayjs from 'dayjs';
import React from 'react';

const Test01: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test01" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <ADateRangePicker
        name="test01"
        label="日期"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        initialValue={[dayjs('2015/01/01', 'YYYY/MM/DD'), dayjs()]}
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        widgetProps={{
          placeholder: ['开始日期', '结束日期'],
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
