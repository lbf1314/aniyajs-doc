import { DownloadFile } from '@aniyajs/components';
import React from 'react';

const Test02: React.FC = () => {
  return (
    <DownloadFile
      isAsync={false}
      folderName={`${String(Date.now())}`}
      folderData={[
        {
          fileName: '测试文本文件1.txt',
          content: '1吧why文本业务毕业后',
        },
      ]}
    >
      批量分包下载文件
    </DownloadFile>
  );
};

export default Test02;
