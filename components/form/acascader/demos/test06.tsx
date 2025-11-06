import { ACascader } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';
import { fetchAsync } from '../../../services';

const Test06: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test06" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <ACascader
        name="test06"
        label="高德地图获取省市区"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        loadDataOptions={[
          {
            action:
              'https://restapi.amap.com/v3/config/district?subdistrict=1&key=bc79432dc6c9a562b428d54904d0ebfe',
          },
          {
            action:
              'https://restapi.amap.com/v3/config/district?subdistrict=1&key=bc79432dc6c9a562b428d54904d0ebfe',
            queryKey: 'keywords',
          },
          {
            action:
              'https://restapi.amap.com/v3/config/district?subdistrict=1&key=bc79432dc6c9a562b428d54904d0ebfe',
            queryKey: 'keywords',
          },
        ]}
        formatter={(childData, _, index) => {
          if (index === 0) {
            return childData?.map((item) => ({
              label: item?.name,
              value: item?.adcode,
              isLeaf: false,
            }));
          }

          if (index === 1) {
            return childData?.map((item) => ({
              label: item?.name,
              value: item?.citycode,
              isLeaf: false,
            }));
          }

          if (index === 2) {
            return childData?.map((item) => ({
              label: item?.name,
              value: item?.adcode,
            }));
          }

          return false;
        }}
        asyncFn={async (queryOption, index) => {
          if (index === 0) {
            const res = (await fetchAsync(queryOption.url)) as any;

            return res?.districts?.[0]?.districts ?? [];
          }

          if (index === 1) {
            const res = (await fetchAsync(
              `${queryOption.url}&keywords=${
                (queryOption?.options?.params as any)?.keywords
              }`,
            )) as any;

            return res?.districts?.[0]?.districts ?? [];
          }

          if (index === 2) {
            const res = (await fetchAsync(
              `${queryOption.url}&keywords=${
                (queryOption?.options?.params as any)?.keywords
              }`,
            )) as any;

            return res?.districts?.[0]?.districts ?? [];
          }

          return false;
        }}
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        widgetProps={{
          allowClear: true,
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

export default Test06;
