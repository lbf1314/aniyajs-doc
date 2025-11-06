import { DatePicker, Form } from 'antd';
import type { DatePickerProps } from 'antd/lib/date-picker';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import React from 'react';
import { IBaseWidgetProps } from '../../types';

export interface ADatePickerPropsType
  extends IBaseWidgetProps<DatePickerProps['value']> {
  widgetProps?: DatePickerProps;
}

const ADatePicker: React.FC<ADatePickerPropsType> = (props) => {
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
      <DatePicker locale={locale} {...widgetProps} />
    </Form.Item>
  );
};

export default ADatePicker;
