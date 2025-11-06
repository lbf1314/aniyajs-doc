import { DownloadFile } from '@aniyajs/components';
import React from 'react';

const Test01: React.FC = () => {
  return (
    <DownloadFile
      isAsync={false}
      buttonTypeProps={{
        type: 'primary',
      }}
      folderName={`${String(Date.now())}.xlsx`}
      excelProps={{
        columns: [
          { header: '序号', key: 'order' },
          { header: '姓名', key: 'name' },
          { header: '性别', key: 'sex' },
          { header: '备注', key: 'remark' },
          { header: '种族', key: 'type' },
        ],
        dataSource: [
          {
            order: 1,
            name: '桃夭夭',
            sex: '女',
            remark: '这个人很美，但是很懒，没有说什么',
            type: '神族',
          },
          {
            order: 2,
            name: '亚索',
            sex: '男',
            remark: '此剑之势愈演愈烈',
            type: '人族',
          },
          {
            order: 3,
            name: '亚托克斯',
            sex: '男',
            remark: '暮光星灵！你！该死啊！',
            type: '暗裔',
          },
        ],
        columnsWidth: [6, 10, 6, 15, 8],
      }}
    >
      导出excel
    </DownloadFile>
  );
};

export default Test01;
