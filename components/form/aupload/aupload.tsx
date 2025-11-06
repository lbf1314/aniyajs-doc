import React from 'react';
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Upload, message } from 'antd';
import type { UploadProps, RcFile, UploadChangeParam, UploadFile } from 'antd/lib/upload';

export interface AUploadNormalPropsType {
  value?: RcFile[] | undefined;
  onChange?: (value: any) => void;
  widgetProps?: UploadProps
}

const AUploadItem: React.FC<AUploadNormalPropsType> = (props) => {
  const { value, onChange, widgetProps } = props
  const { children, beforeUpload, ...restProps } = widgetProps;
  const { listType, accept } = restProps;

  const beforeUploadFn = (file: RcFile, fileList: RcFile[]) => {
    if (beforeUpload) {
      beforeUpload(file, fileList);
    }

    const correctAccepts = accept?.split(',').map((item) => item.trim().slice(1));
    const fileType = file?.name?.split('.')[file?.name?.split('.').length - 1];

    if (!correctAccepts?.includes(fileType)) {
      message.error(`只能上传${correctAccepts?.join('、')}格式文件！`);

      return false || Upload.LIST_IGNORE;
    }
  };

  const onUploadChange = (info: UploadChangeParam<UploadFile<any>>) => {
    if (onChange) {
      onChange(info.fileList);
    }
  };

  return (
    <Upload fileList={value} beforeUpload={beforeUploadFn} onChange={onUploadChange} {...restProps}>
      {children === undefined && listType === 'picture-card' ? <PlusOutlined rev={undefined} /> : children}
      {children === undefined && listType === 'picture' ? (
        <Button icon={<UploadOutlined rev={undefined} />}>Upload</Button>
      ) : (
        children
      )}
      {children === undefined && listType === 'text' ? (
        <Button icon={<UploadOutlined rev={undefined} />}>Upload</Button>
      ) : (
        children
      )}
    </Upload>
  );
};

export default AUploadItem;
