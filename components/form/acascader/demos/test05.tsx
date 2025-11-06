import { ACascader } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';
import { queryPost } from '../../../services';

const Test05: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test05" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <ACascader
        name="test05"
        label="省市区"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        selectOptions={[
          {
            value: 'zhejiang',
            label: '浙江',
            isLeaf: false,
          },
          {
            value: 'jiangsu',
            label: '江苏',
            isLeaf: false,
          },
        ]}
        loadDataOptions={[
          null,
          {
            action: 'http://yapi.yunxiaowei.cn/mock/168/sys/city',
            queryKey: 'id',
          },
          {
            action: 'http://yapi.yunxiaowei.cn/mock/168/sys/test-asyncFn',
            queryKey: 'id',
          },
        ]}
        formatter={(childData, _, index) => {
          if (index === 1) {
            return childData?.map((item) => ({
              label: item?.cityName,
              value: item?.id,
              isLeaf: false,
            }));
          }

          return false;
        }}
        asyncFn={async (queryOption, index) => {
          if (index === 2) {
            const res = await queryPost<any>(queryOption?.url, {
              ...queryOption?.options?.params,
            });

            if (res?.code === 200) {
              const { result } = res;

              return result;
            }
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

export default Test05;
