import { Form } from 'antd';
import React from 'react';
import { IBaseWidgetProps } from '../../types';
import ACascaderItem, { ACascaderNormalPropsType } from './acascader';
import type { CascaderProps } from 'antd/lib/cascader';
import type { Option } from './acascader';

export type ACascaderPropsType = IBaseWidgetProps<CascaderProps<Option>['value']> &
  ACascaderNormalPropsType;

const ACascader: React.FC<ACascaderPropsType> = (props) => {
  const {
    name,
    label,
    formItemProps = {},
    initialValue,
    rules,
    ...restProps
  } = props;

  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue;
  }

  return (
    <Form.Item {...formItemProps} name={name} label={label} rules={rules}>
      <ACascaderItem {...restProps} />
    </Form.Item>
  );
};

export default ACascader;
