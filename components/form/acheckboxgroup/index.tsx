import { Checkbox, Form } from 'antd';
import type { CheckboxGroupProps } from 'antd/lib/checkbox';
import React from 'react';
import { IBaseWidgetProps } from '../../types';

export interface ACheckboxGroupPropsType
  extends IBaseWidgetProps<CheckboxGroupProps['value']> {
  widgetProps?: Omit<CheckboxGroupProps, 'options'>;
  options?: CheckboxGroupProps['options'];
}

const ACheckboxGroup: React.FC<ACheckboxGroupPropsType> = (props) => {
  const {
    name,
    label,
    formItemProps = {},
    initialValue,
    rules,
    widgetProps,
    options,
  } = props;

  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue;
  }

  return (
    <Form.Item {...formItemProps} name={name} label={label} rules={rules}>
      <Checkbox.Group options={options} {...widgetProps} />
    </Form.Item>
  );
};

export default ACheckboxGroup;
