import { ASelect } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React from 'react';

const formatFn = (data: any) => {
  let newData = [];
  for (let i = 0; i < data.length; i++) {
    const ele = data[i]?.local;
    const eleValue = data[i]?.id;
    if (ele.endsWith('省') && !newData?.find((item) => item.label === '省')) {
      newData.push({ label: '省', options: [{ label: ele, value: eleValue }] });
    } else if (
      ele.endsWith('省') &&
      newData?.find((item) => item.label === '省')
    ) {
      const pIndex = newData?.findIndex((item) => item?.label === '省');
      newData?.[pIndex]?.options?.push({ label: ele, value: eleValue });
    }

    if (ele.endsWith('市') && !newData?.find((item) => item.label === '市')) {
      newData.push({ label: '市', options: [{ label: ele, value: eleValue }] });
    } else if (
      ele.endsWith('市') &&
      newData?.find((item) => item.label === '市')
    ) {
      const pIndex = newData?.findIndex((item) => item?.label === '市');
      newData?.[pIndex]?.options?.push({ label: ele, value: eleValue });
    }

    if (ele.endsWith('区') && !newData?.find((item) => item.label === '区')) {
      newData.push({ label: '区', options: [{ label: ele, value: eleValue }] });
    } else if (
      ele.endsWith('区') &&
      newData?.find((item) => item.label === '区')
    ) {
      const pIndex = newData?.findIndex((item) => item?.label === '区');
      newData?.[pIndex]?.options?.push({ label: ele, value: eleValue });
    }

    if (
      !ele.endsWith('省') &&
      !ele.endsWith('市') &&
      !ele.endsWith('区') &&
      !newData?.find((item) => item.label === '其他')
    ) {
      newData.push({
        label: '其他',
        options: [{ label: ele, value: eleValue }],
      });
    } else if (
      !ele.endsWith('省') &&
      !ele.endsWith('市') &&
      !ele.endsWith('区') &&
      newData?.find((item) => item.label === '其他')
    ) {
      const pIndex = newData?.findIndex((item) => item?.label === '其他');
      newData?.[pIndex]?.options?.push({ label: ele, value: eleValue });
    }
  }

  return newData;
};

const Test03: React.FC<any> = () => {
  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test03" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <ASelect
        name="test02"
        label="选择2"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        initialValue={3}
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        widgetProps={{}}
        url="http://yapi.yunxiaowei.cn/mock/168/sys/province"
        formatter={(data) => {
          return data?.map((item) => ({
            value: item?.id,
            label: item?.provinceName,
          }));
        }}
      />
      <ASelect
        name="test03"
        label="多选2"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        initialValue={[1, 3, 4, 5]}
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        widgetProps={{
          mode: 'multiple',
        }}
        url="http://yapi.yunxiaowei.cn/mock/168/sys/province"
        formatter={(data) => {
          return data?.map((item) => ({
            value: item?.id,
            label: item?.provinceName,
          }));
        }}
      />
      <ASelect
        name="test04"
        label="分组多选2"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        initialValue={[1, 4, 5]}
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        widgetProps={{
          mode: 'multiple',
        }}
        url="http://yapi.yunxiaowei.cn/mock/168/tree-group/ssq"
        formatter={(data) => {
          return formatFn(data);
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
