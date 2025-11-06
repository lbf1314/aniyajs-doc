import { ATreeSelect } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';
import { fetchAsync } from '../../../services';

const Test08: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test08" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <ATreeSelect
        name="atree1"
        label="树节点1"
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
        formatter={(data, curIndex) => {
          if (curIndex === 0) {
            return data?.map((item) => ({
              value: `level1_${item?.adcode}`,
              title: item?.name,
              isLeaf: false,
            }));
          }

          if (curIndex === 1) {
            return data?.map((item) => ({
              value: `level2_${item?.citycode}`,
              title: item?.name,
              isLeaf: false,
            }));
          }

          if (curIndex === 2) {
            return data?.map((item) => ({
              value: `level3_${item?.adcode}`,
              title: item?.name,
              isLeaf: true,
            }));
          }

          return false;
        }}
        asyncFn={async (queryOption, curIndex) => {
          if (curIndex === 0) {
            const res = (await fetchAsync(queryOption.url)) as any;

            return res?.districts?.[0]?.districts ?? [];
          }

          if (curIndex === 1) {
            const res = (await fetchAsync(
              `${queryOption.url}&keywords=${
                (queryOption?.options?.params as any)?.keywords?.split('_')[1]
              }`,
            )) as any;

            return res?.districts?.[0]?.districts ?? [];
          }

          if (curIndex === 2) {
            const res = (await fetchAsync(
              `${queryOption.url}&keywords=${
                (queryOption?.options?.params as any)?.keywords?.split('_')[1]
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

export default Test08;
