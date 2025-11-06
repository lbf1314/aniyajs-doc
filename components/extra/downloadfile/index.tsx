import { DownloadOutlined } from '@ant-design/icons';
import { Button, message } from 'antd';
import ExcelJS from 'exceljs';
import JSZIP from 'jszip';
import React, { memo, useState } from 'react';
import { downloadFile } from '../../services';
import { blobTypeDownloadFile, flatArr, getUrlBase64 } from '../../utils';
import './index.less';

import type { ButtonProps } from 'antd';
import type { Column } from 'exceljs';

export interface folderDatas {
  folderName?: string;
  fileName?: string;
  imageUrl?: string;
  content?: string;
  data?:
  | folderDatas[]
  | Partial<{ fileName: string; imageUrl: string }>[]
  | Partial<{ fileName: string; content: string }>[];
}
export interface DownloadFilePropsType<T = any> {
  children?: React.ReactNode;
  isAsync?: boolean;
  downloadUrl?: string;
  data?: Record<string, any>; // 请求参数
  buttonTypeProps?: ButtonProps; // 存在就是按钮模式，自定义按钮属性
  folderName: string; // 文件名、包名
  excelProps?: {
    columns: Partial<Column>[]; // 列标题
    dataSource: T[]; // 数据
    columnsWidth?: number[]; // 自定义列宽
  }; // 导出excel所需数据
  folderData?: folderDatas[]; // 下载图片文件夹所需数据
  beforeDownloadFn?: () => boolean;
  asyncFn?: (url: string, queryData?: Record<string, any>) => Promise<any>;
}

const recursion = (folderZip: any, folderData: folderDatas[] | []) => {
  return new Promise(async (resolve, reject) => {
    for (let i = 0; i < folderData.length; i++) {
      const item = folderData[i];

      if (item.folderName && item.data?.length) {
        const newFolderZip = folderZip.folder(item.folderName);
        recursion(newFolderZip, item.data);
      }

      if (item.folderName && !item.data?.length) {
        folderZip.folder(item.folderName);
      }

      if (item.fileName) {
        if (item.content) {
          folderZip.file(item.fileName, item.content);
        }
        if (item.imageUrl) {
          try {
            const baseData = await getUrlBase64(item.imageUrl);
            folderZip.file(item.fileName, baseData.substring(22), {
              base64: true,
            });
          } catch (error) {
            reject(error);
          }
        }
      }
    }

    resolve(folderZip);
  });
};

const DownloadFile: React.FC<DownloadFilePropsType> = (props) => {
  const {
    children = 'Download',
    isAsync = true,
    downloadUrl,
    data = {},
    buttonTypeProps,
    folderName,
    excelProps,
    folderData,
    beforeDownloadFn,
    asyncFn,
    ...restProps
  } = props;

  const [loading, setLoading] = useState(false);

  const excelDownload = async () => {
    const newColumns =
      excelProps?.columns?.map((columnItem, index) => ({
        ...columnItem,
        width: excelProps?.columnsWidth?.[index] ?? 10,
      })) ?? [];

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet('My Sheet', {
      views: [{ state: 'frozen', ySplit: 1 }],
    });

    sheet.columns = [...newColumns];
    sheet.addRows(
      excelProps?.dataSource?.map((dataItem) => {
        const newItem = { ...dataItem };
        Object.keys(dataItem).forEach((ele) => {
          newItem[ele] = String(
            newItem[ele] === undefined || newItem[ele] === null
              ? ''
              : newItem[ele],
          );
        });

        return newItem;
      }) ?? [],
    );

    sheet.eachRow({ includeEmpty: true }, (itemRow) => {
      itemRow.alignment = {
        vertical: 'middle',
        horizontal: 'center',
        wrapText: true,
      };
      itemRow.font = { size: 9 };
      itemRow.height = 16;
    });

    const headerRow = sheet.getRow(1);

    headerRow.alignment = {
      vertical: 'middle',
      horizontal: 'center',
      wrapText: true,
    };
    headerRow.height = 22;
    headerRow.font = { bold: true, size: 10 };

    const excelData = await workbook.xlsx.writeBuffer();

    const content = new Blob([excelData], { type: 'xlsx' });

    await blobTypeDownloadFile(content, folderName);
    message.success('导出成功', 1, () => {
      setLoading(false);
    });
  };

  const folderDownload = async () => {
    const folderZip = new JSZIP();

    try {
      await recursion(folderZip, folderData ?? []);

      const bigPackage = await folderZip.generateAsync({ type: 'blob' });
      await blobTypeDownloadFile(bigPackage, folderName);
      message.success('导出成功', 1, () => {
        setLoading(false);
      });
    } catch (error) {
      message.error('导出失败', 1, () => {
        setLoading(false);
      });
    }
  };

  const fetchData = async (url: string, queryData: Record<string, any>) => {
    if (asyncFn) {
      await asyncFn(url, queryData).then((result) => {
        if (result) {
          blobTypeDownloadFile(result, folderName);
        }
        setLoading(false);
      });
      return;
    }

    const response = await downloadFile(url, queryData);

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

          message.error(msg, 1, () => {
            setLoading(false);
          });
        };
        return false;
      }

      await blobTypeDownloadFile(response, folderName);
      message.success('导出成功', 1, () => {
        setLoading(false);
      });
    }
  };

  const onDownload = async () => {
    if ((beforeDownloadFn && beforeDownloadFn()) || !beforeDownloadFn) {
      if (!folderName) {
        console.log(
          new Error('error: folderName property may not exist or be null'),
        );
        return;
      }

      if (isAsync) {
        if (!downloadUrl) {
          console.log(
            new Error('error: downloadUrl property may not exist or be null'),
          );
          return;
        }

        setLoading(true);

        await fetchData(downloadUrl, data);
      } else {
        setLoading(true);

        if (excelProps) {
          await excelDownload();
        }

        if (folderData) {
          if (!folderData) return false;

          const maxNum =
            flatArr({ initArr: folderData, childrenField: 'data' })?.filter(
              (item) => item?.data === undefined,
            )?.length ?? 0;

          console.log('含有文件夹、文件数量', maxNum);
          await folderDownload();
        }
      }
    }
  };

  return (
    <span className="adownload-file" {...restProps}>
      {buttonTypeProps ? (
        <Button
          type="primary"
          icon={<DownloadOutlined rev={undefined} />}
          size="middle"
          onClick={onDownload}
          loading={loading}
          {...buttonTypeProps}
        >
          {children}
        </Button>
      ) : (
        <span className="adownload-file-text" onClick={onDownload}>
          {children}
        </span>
      )}
    </span>
  );
};

export default memo(DownloadFile);
