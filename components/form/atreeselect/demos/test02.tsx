import { ATreeSelect } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';

const Test0: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test0" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <ATreeSelect
        name="atree1"
        label="树节点1"
        initialValue={['nzzq']}
        treeData={[
          {
            value: 'nzj',
            title: '凝真境',
            children: [
              {
                value: 'nzcq',
                title: '凝真初期',
                children: [
                  {
                    value: 'nzcq1',
                    title: '凝真初期1',
                  },
                  {
                    value: 'nzcq12',
                    title: '凝真初期2',
                  },
                  {
                    value: 'nzcq3',
                    title: '凝真初期3',
                  },
                ],
              },
              {
                value: 'nzzq',
                title: '凝真中期',
              },
              {
                value: 'nzhq',
                title: '凝真后期',
              },
            ],
          },
          {
            value: 'byj',
            title: '抱元境',
            children: [
              {
                value: 'bycq',
                title: '抱元初期',
              },
              {
                value: 'byzq',
                title: '抱元中期',
              },
              {
                value: 'byhq',
                title: '抱元后期',
              },
            ],
          },
        ]}
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        widgetProps={{
          treeCheckable: true,
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

export default Test0;
