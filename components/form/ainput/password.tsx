import React from 'react';
import { Input, Form } from 'antd';
import { IBaseWidgetProps } from '../../types';
import { PasswordProps } from 'antd/lib/input/Password';

export interface AInputPasswordPropsType extends IBaseWidgetProps<PasswordProps['value']> {
  widgetProps?: PasswordProps
}

const AInputPassword: React.FC<AInputPasswordPropsType> = (props) => {
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
      <Input.Password {...widgetProps} />
    </Form.Item>
  );
};

export default AInputPassword;
