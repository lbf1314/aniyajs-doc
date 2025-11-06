import { AInput } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';

const Test02: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test02" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <AInput.TextArea
        name="remark"
        label="备注"
        initialValue={'这个人很懒，什么都没有说'}
        rules={[
          {
            required: true,
            message: ' 请输入',
          },
        ]}
        widgetProps={{
          placeholder: '请输入备注',
          allowClear: true,
          showCount: true,
          maxLength: 50,
          autoSize: {
            minRows: 5,
            maxRows: 5,
          },
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

export default Test02;
