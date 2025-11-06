import React from 'react';
import { Form } from 'antd';
import ASwitchItem, { ASwitchNormalPropsType } from './aswitch';
import { IBaseWidgetProps } from '../../types';
import type { SwitchProps } from 'antd/lib/switch';

export interface ASwitchPropsType extends IBaseWidgetProps<SwitchProps['checked']>, ASwitchNormalPropsType { }

const ASwitch: React.FC<ASwitchPropsType> = (props) => {
  const {
    name,
    label,
    formItemProps = {},
    initialValue = false,
    rules,
    ...restProps
  } = props

  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue
  }

  return (
    <Form.Item {...formItemProps} name={name} label={label} rules={rules}>
      <ASwitchItem {...restProps} />
    </Form.Item>
  );
};

export default ASwitch;
