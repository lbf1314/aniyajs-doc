import { FormItemProps as AntdFormItemProps, Rule } from 'antd/lib/form';
import React from 'react';

export interface IBaseWidgetProps<T> {
  name: string;
  label?: React.ReactNode;
  formItemProps?: AntdFormItemProps;
  initialValue?: T;
  rules?: Rule[];
}

export type Key = number | string;

export interface LoadDataOption {
  action: string;
  queryKey?: string;
}
