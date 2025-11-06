import { AutoComplete, Form } from 'antd';
import type { AutoCompleteProps } from 'antd/lib/auto-complete';
import React, { useEffect, useState } from 'react';
import { fetch } from '../../services';
import { IBaseWidgetProps } from '../../types';

export interface AAutoCompletePropsType
  extends IBaseWidgetProps<AutoCompleteProps['value']> {
  widgetProps?: Omit<AutoCompleteProps, 'options' | 'onSearch'>;
  selectOptions?: AutoCompleteProps['options'];
  url?: string;
  formatter?: (childData: any[]) => AutoCompleteProps['options'];
  asyncFn?: (url: string, value: string) => Promise<any>;
  onSearch?: AutoCompleteProps['onSearch'];
}

const AAutoComplete: React.FC<AAutoCompletePropsType> = (props) => {
  const {
    name,
    label,
    formItemProps = {},
    initialValue,
    rules,
    widgetProps,
    selectOptions,
    url,
    formatter,
    asyncFn,
    onSearch,
  } = props;
  const [newSelectOptions, setNewSelectOptions] = useState([]);

  useEffect(() => {
    if (selectOptions) {
      setNewSelectOptions(selectOptions);
    }
  }, [selectOptions]);

  const formatWrapper = (data: any): AutoCompleteProps['options'] => {
    if (formatter) {
      const formatRes = formatter(data);

      return formatRes;
    }

    return data;
  };

  const fetchData = async (url: string, value: string) =>
    asyncFn
      ? await asyncFn(url, value)
      : await fetch(url, { params: { search: value } });

  const onAsyncSearch = async (value) => {
    if (url) {
      const data = await fetchData(url, value);
      const newRes = formatWrapper(data);
      setNewSelectOptions([...newRes]);
    }

    if (onSearch) {
      onSearch(value);
    }
  };

  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue;
  }

  return (
    <Form.Item {...formItemProps} name={name} label={label} rules={rules}>
      <AutoComplete
        {...widgetProps}
        onSearch={onAsyncSearch}
        options={newSelectOptions}
      />
    </Form.Item>
  );
};

export default AAutoComplete;
