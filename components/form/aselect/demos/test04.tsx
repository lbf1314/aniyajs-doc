import { ASelect } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';
import { fetchAsync } from '../../../services';

const Test03: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test04" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <ASelect
        name="test02"
        label="选择3"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        initialValue={'360000'}
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        widgetProps={{}}
        url="https://restapi.amap.com/v3/config/district?subdistrict=1&key=bc79432dc6c9a562b428d54904d0ebfe"
        formatter={(data) => {
          return data?.map((item) => ({
            label: item?.name,
            value: item?.adcode,
          }));
        }}
        asyncFn={async (url) => {
          const res = (await fetchAsync(url)) as any;

          return res?.districts?.[0]?.districts ?? [];
        }}
      />
      <ASelect
        name="test03"
        label="多选3"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        initialValue={['360000', '110000', '710000', '810000']}
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        widgetProps={{
          mode: 'multiple',
        }}
        url="https://restapi.amap.com/v3/config/district?subdistrict=1&key=bc79432dc6c9a562b428d54904d0ebfe"
        formatter={(data) => {
          return data?.map((item) => ({
            label: item?.name,
            value: item?.adcode,
          }));
        }}
        asyncFn={async (url) => {
          const res = (await fetchAsync(url)) as any;

          return res?.districts?.[0]?.districts ?? [];
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
