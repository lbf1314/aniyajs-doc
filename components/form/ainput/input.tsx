import React from 'react';
import { Input, Form } from 'antd';
import { IBaseWidgetProps } from '../../types';
import { InputProps } from 'antd/lib/input';
import TextArea from './textarea';
import Password from './password';
import Number from './number';


export interface AInputPropsType extends IBaseWidgetProps<InputProps['value']> {
  widgetProps?: InputProps
}

class AInput extends React.Component<AInputPropsType> {
  static TextArea: typeof TextArea
  static Password: typeof Password
  static Number: typeof Number

  render() {
    const {
      name,
      label,
      formItemProps = {},
      initialValue,
      rules,
      widgetProps = {}
    } = this.props

    if (initialValue !== undefined) {
      formItemProps.initialValue = initialValue
    }

    return (
      <Form.Item {...formItemProps} name={name} label={label} rules={rules}>
        <Input {...widgetProps} />
      </Form.Item>
    )
  }
}

export default AInput;
