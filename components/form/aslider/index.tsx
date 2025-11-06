import { Form, Slider } from 'antd';
import type { SliderRangeProps, SliderSingleProps } from 'antd/lib/slider';
import React from 'react';
import { IBaseWidgetProps } from '../../types';

export interface ASliderPropsType
  extends IBaseWidgetProps<(SliderSingleProps | SliderRangeProps)['value']> {
  widgetProps?: SliderSingleProps | SliderRangeProps;
}

const ASlider: React.FC<ASliderPropsType> = (props) => {
  const {
    name,
    label,
    formItemProps = {},
    initialValue,
    rules,
    widgetProps,
  } = props;

  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue;
  }

  return (
    <Form.Item {...formItemProps} name={name} label={label} rules={rules}>
      <Slider {...widgetProps} />
    </Form.Item>
  );
};

export default ASlider;
