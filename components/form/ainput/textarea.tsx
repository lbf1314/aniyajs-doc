import React from 'react';
import { Input, Form } from 'antd';
import { IBaseWidgetProps } from '../../types';
import { TextAreaProps } from 'antd/lib/input/TextArea';

export interface AInputTextAreaPropsType extends IBaseWidgetProps<TextAreaProps['value']> {
  widgetProps?: TextAreaProps
}

const AInputTextArea: React.FC<AInputTextAreaPropsType> = (props) => {
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
      <Input.TextArea {...widgetProps} />
    </Form.Item>
  );
};

export default AInputTextArea;
