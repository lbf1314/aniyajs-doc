import { Form } from 'antd';
import React from 'react';
import { IBaseWidgetProps, Key } from '../../types';
import ATreeSelectItem, { ATreeSelectNormalPropsType } from './treeselect';

export interface ATreeSelectPropsType
  extends IBaseWidgetProps<Key[] | []>,
  ATreeSelectNormalPropsType { }

const ATreeSelect: React.FC<ATreeSelectPropsType> = (props) => {
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
      <ATreeSelectItem {...restProps} />
    </Form.Item>
  );
};

export default ATreeSelect;
