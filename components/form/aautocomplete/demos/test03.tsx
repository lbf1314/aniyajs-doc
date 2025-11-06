import { AAutoComplete } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';

const Test03: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test03" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <AAutoComplete
        name="test03"
        label="自动完成3"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        initialValue={'a'}
        url="http://yapi.yunxiaowei.cn/mock/168/auto-complete/formatter"
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        formatter={(data) => {
          return data?.map((item) => ({
            label: (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                这个是：{item?.name}
                <a
                  target="_blank"
                  href="https://www.baidu.com"
                  rel="noreferrer"
                >
                  more
                </a>
              </div>
            ),
            value: item?.name,
          }));
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
