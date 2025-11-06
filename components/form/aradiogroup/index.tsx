import React from 'react';
import { Form, Radio } from 'antd';
import { IBaseWidgetProps } from '../../types';
import type { RadioGroupProps } from 'antd/lib/radio';

export interface ARadioGroupPropsType extends IBaseWidgetProps<RadioGroupProps['value']> {
  widgetProps?: Omit<RadioGroupProps, "options">
  options?: RadioGroupProps['options']
}

const ARadioGroup: React.FC<ARadioGroupPropsType> = (props) => {
  const {
    name,
    label,
    formItemProps = {},
    initialValue,
    rules,
    widgetProps = {

    },
    options
  } = props

  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue
  }

  return (
    <Form.Item {...formItemProps} name={name} label={label} rules={rules}>
      <Radio.Group options={options} {...widgetProps} />
    </Form.Item>
  );
};

export default ARadioGroup;
