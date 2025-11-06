import React from 'react';
import { InputNumber, Form } from 'antd';
import { IBaseWidgetProps } from '../../types';
import { InputNumberProps } from 'antd/lib/input-number';

export interface AInputNumberPropsType extends IBaseWidgetProps<InputNumberProps['value']> {
  widgetProps?: InputNumberProps
}

const AInputNumber: React.FC<AInputNumberPropsType> = (props) => {
  const {
    name,
    label,
    formItemProps = {},
    initialValue,
    rules,
    widgetProps = {}
  } = props

  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue
  }

  return (
    <Form.Item {...formItemProps} name={name} label={label} rules={rules}>
      <InputNumber {...widgetProps} />
    </Form.Item>
  );
};

export default AInputNumber;
