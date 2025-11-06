import React, { useEffect, useState } from 'react';
import { Form, Select } from 'antd';
import { IBaseWidgetProps } from '../../types';
import type { SelectProps } from 'antd/lib/select';
import { fetch } from '../../services';

export interface ASelectPropsType extends IBaseWidgetProps<SelectProps['value']> {
  widgetProps?: Omit<SelectProps, "options">
  selectOptions?: SelectProps['options']
  url?: string;
  formatter?: (childData: any[]) => SelectProps['options'];
  asyncFn?: (url: string) => Promise<any>;
}

const ASelect: React.FC<ASelectPropsType> = (props) => {
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
    asyncFn
  } = props
  const [itemLoading, setItemLoading] = useState<boolean>(false)
  const [newOptions, setNewOptions] = useState(selectOptions)

  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue
  }

  const formatWrapper = (data: any): SelectProps['options'] => {
    if (formatter) {
      const formatRes = formatter(data)

      return formatRes
    }

    return data
  }

  const fetchData = async (url: string) => asyncFn ? await asyncFn(url) : await fetch(url)

  useEffect(() => {
    (async () => {
      if (url) {
        setItemLoading(true)
        const data = await fetchData(url)
        setItemLoading(false)
        const newRes = formatWrapper(data)
        setNewOptions(newRes)
      }
    })()
  }, [])

  return (
    <Form.Item {...formItemProps} name={name} label={label} rules={rules}>
      <Select loading={itemLoading} options={newOptions} {...widgetProps} />
    </Form.Item>
  );
};

export default ASelect;
