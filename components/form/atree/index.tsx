import React from 'react';
import { Form } from 'antd';
import ATreeItem, { ATreeNormalPropsType } from './atree';
import { IBaseWidgetProps, Key } from '../../types';

export interface ATreePropsType extends IBaseWidgetProps<Key[] | []>, ATreeNormalPropsType { }

const ATree: React.FC<ATreePropsType> = (props) => {
  const {
    name,
    label,
    formItemProps = {},
    initialValue,
    rules,
    ...restProps
  } = props

  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue
  }

  return (
    <Form.Item {...formItemProps} name={name} label={label} rules={rules}>
      <ATreeItem {...restProps} />
    </Form.Item>
  );
};

export default ATree;
