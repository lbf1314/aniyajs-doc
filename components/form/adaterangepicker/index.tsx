import { DatePicker, Form } from 'antd';
import type { RangePickerProps } from 'antd/lib/date-picker';
import locale from 'antd/lib/date-picker/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import React from 'react';
import { IBaseWidgetProps } from '../../types';

const { RangePicker } = DatePicker;

export interface ADateRangePickerPropsType
  extends IBaseWidgetProps<RangePickerProps['value']> {
  widgetProps?: RangePickerProps;
}

const ADateRangePicker: React.FC<ADateRangePickerPropsType> = (props) => {
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
      <RangePicker locale={locale} {...widgetProps} />
    </Form.Item>
  );
};

export default ADateRangePicker;
