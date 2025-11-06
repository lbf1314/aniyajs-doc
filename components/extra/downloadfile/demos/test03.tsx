import { DownloadFile } from '@aniyajs/components';
import React from 'react';

const Test03: React.FC = () => {
  return (
    <DownloadFile
      buttonTypeProps={{
        type: 'primary',
      }}
      folderName={`${String(Date.now())}`}
      downloadUrl={'http://yapi.yunxiaowei.cn/mock/168/sys/download'}
      data={{ test: 111 }}
    >
      异步下载
    </DownloadFile>
  );
};

export default Test03;
