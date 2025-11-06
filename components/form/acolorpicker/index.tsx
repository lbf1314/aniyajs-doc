import React from 'react';
import { Form, ColorPicker } from 'antd';
import { IBaseWidgetProps } from '../../types';
import type { ColorPickerProps } from 'antd/lib/color-picker';

export interface AColorPickerPropsType extends IBaseWidgetProps<ColorPickerProps['value']> {
  widgetProps?: ColorPickerProps
}

const AColorPicker: React.FC<AColorPickerPropsType> = (props) => {
  const {
    name,
    label,
    formItemProps = {},
    initialValue,
    rules,
    widgetProps,
  } = props

  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue
  }

  return (
    <Form.Item {...formItemProps} name={name} label={label} rules={rules}>
      {/* @ts-ignore */}
      <ColorPicker {...widgetProps} />
    </Form.Item>
  );
};

export default AColorPicker;
