import { ATreeSelect } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';

const Test05: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test05" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <ATreeSelect
        name="atree1"
        label="树节点1"
        initialValue={['nzzq', 'nzj']}
        url="http://yapi.yunxiaowei.cn/mock/168/treeSelectDataall"
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        widgetProps={{
          multiple: true,
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

export default Test05;
