import { AAutoComplete } from '@aniyajs/components';
import { Button, Form } from 'antd';
import React, { useState } from 'react';

const mockVal = (str: string, repeat = 1) => ({
  label: str.repeat(repeat),
  value: str.repeat(repeat),
});

const Test01: React.FC<any> = () => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    [],
  );

  const onSearch = (searchText: string) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };

  const onFinish = (values: any) => {
    console.log('values :>> ', values);
  };

  return (
    <Form name="test01" style={{ maxWidth: 600 }} onFinish={onFinish}>
      <AAutoComplete
        name="test01"
        label="自动完成1"
        rules={[
          {
            required: true,
            message: '请选择',
          },
        ]}
        initialValue={'a'}
        formItemProps={{
          labelCol: { span: 6 },
          wrapperCol: { span: 18 },
        }}
        selectOptions={options}
        onSearch={onSearch}
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
