import { Form, Rate } from 'antd';
import type { RateProps } from 'antd/lib/rate';
import React from 'react';
import { IBaseWidgetProps } from '../../types';

export interface ARatePropsType extends IBaseWidgetProps<RateProps['value']> {
  widgetProps?: RateProps;
}

const ARate: React.FC<ARatePropsType> = (props) => {
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
      <Rate {...widgetProps} />
    </Form.Item>
  );
};

export default ARate;
