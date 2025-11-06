import React from 'react';
import { Form } from 'antd';
import AUploadItem, { AUploadNormalPropsType } from './aupload';
import { IBaseWidgetProps } from '../../types';
import type { UploadProps } from 'antd/lib/upload';

export interface AUploadPropsType extends IBaseWidgetProps<UploadProps['fileList']>, AUploadNormalPropsType { }

const AUpload: React.FC<AUploadPropsType> = (props) => {
  const {
    name,
    label,
    formItemProps = {},
    initialValue,
    rules,
    ...restProps
  } = props

  if (initialValue !== undefined) {
    formItemProps.initialValue = initialValue
  }

  return (
    <Form.Item {...formItemProps} name={name} label={label} rules={rules}>
      <AUploadItem {...restProps} />
    </Form.Item>
  );
};

export default AUpload;
