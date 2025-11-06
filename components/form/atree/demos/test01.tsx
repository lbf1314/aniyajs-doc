import { ATree } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';

const Test01: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test01" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <ATree
        name="atree1"
        label="树节点1"
        initialValue={['nzcq']}
        treeData={[
          {
            key: 'nzj',
            title: '凝真境',
            children: [
              {
                key: 'nzcq',
                title: '凝真初期',
              },
              {
                key: 'nzzq',
                title: '凝真中期',
                disabled: true,
              },
              {
                key: 'nzhq',
                title: '凝真后期',
              },
            ],
          },
          {
            key: 'byj',
            title: '抱元境',
            children: [
              {
                key: 'bycq',
                title: '抱元初期',
              },
              {
                key: 'byzq',
                title: '抱元中期',
              },
              {
                key: 'byhq',
                title: '抱元后期',
              },
            ],
          },
        ]}
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
          selectable: true,
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
