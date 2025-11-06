import { Form, TimePicker } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import { TimeRangePickerProps } from 'antd/lib/time-picker';
import React from 'react';
import { IBaseWidgetProps } from '../../types';

export interface ATimeRangePickerPropsType
  extends IBaseWidgetProps<TimeRangePickerProps['value']> {
  widgetProps?: TimeRangePickerProps;
}

const ATimeRangePicker: React.FC<ATimeRangePickerPropsType> = (props) => {
  const {
    name,
    label,
    formItemProps = {},
    initialValue,
    rules,
    widgetProps = {},
  } = props;

  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue;
  }

  return (
    <Form.Item {...formItemProps} name={name} label={label} rules={rules}>
      <TimePicker.RangePicker locale={locale} {...widgetProps} />
    </Form.Item>
  );
};

export default ATimeRangePicker;
