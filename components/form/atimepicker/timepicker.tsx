import { Form, TimePicker } from 'antd';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import type { TimePickerProps } from 'antd/lib/time-picker';
import React from 'react';
import { IBaseWidgetProps } from '../../types';
import RangePicker from './timerangepicker';

export interface ATimePickerPropsType
  extends IBaseWidgetProps<TimePickerProps['value']> {
  widgetProps?: TimePickerProps;
}

class ATimePicker extends React.Component<ATimePickerPropsType> {
  static RangePicker: typeof RangePicker;

  render() {
    const {
      name,
      label,
      formItemProps = {},
      initialValue,
      rules,
      widgetProps = {},
    } = this.props;

    if (initialValue !== undefined) {
      formItemProps.initialValue = initialValue;
    }

    return (
      <Form.Item {...formItemProps} name={name} label={label} rules={rules}>
        <TimePicker locale={locale} {...widgetProps} />
      </Form.Item>
    );
  }
}

export default ATimePicker;
