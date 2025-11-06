import { ATree } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';

const Test04: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test05" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <ATree
        name="atree5"
        label="树节点5"
        initialValue={['a1', 1, 3, 4, 7, 8]}
        checkStrictlyChecked={true}
        url="http://yapi.yunxiaowei.cn/mock/168/tree-data"
        rules={[
          {
            required: true,
            message: ' 请选择',
          },
        ]}
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        widgetProps={{
          checkable: true,
          checkStrictly: true,
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
