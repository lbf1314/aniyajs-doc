import { DownloadFile } from '@aniyajs/components';
import { notification } from 'antd';
import React from 'react';
import { fetchAsync } from '../../../services';

const Test03: React.FC = () => {
  return (
    <DownloadFile
      buttonTypeProps={{
        type: 'primary',
      }}
      folderName={`${String(Date.now())}`}
      downloadUrl={'http://yapi.yunxiaowei.cn/mock/168/sys/download'}
      data={{ test: 111 }}
      asyncFn={async (url, query) => {
        const response = await fetchAsync<any>(url, {
          params: query,
          responseType: 'blob',
        });

        if (response) {
          if (response.type === 'application/json') {
            const reader = new FileReader();
            reader.readAsText(response, 'utf-8');
            reader.onload = (e) => {
              const { message: msg } = e.target?.result
                ? // @ts-ignore
                  JSON.parse(e.target?.result)
                : {
                    message: '导出失败',
                  };

              notification.error({
                message: msg,
              });
            };
            return false;
          }

          notification.success({
            message: '导出成功',
          });
          return response;
        }
      }}
    >
      异步下载
    </DownloadFile>
  );
};

export default Test03;
