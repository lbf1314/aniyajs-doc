/**
 * 多维数组转一维数组
 * @date 2022-10-09
 * @param {any} initArr 初始多维数组
 * @param {any} childrenField  子集集合字段名
 * @param {any} newArr=[] 每次递归结果数组
 * @returns {any}
 */
export function flatArr<T>({
  initArr,
  childrenField,
  newArr = [],
}: {
  initArr: T[];
  childrenField: keyof T;
  newArr?: T[];
}): T[] {
  for (let i = 0; i < initArr?.length; i++) {
    const ele: any = initArr[i];
    if (ele[childrenField] && ele[childrenField]?.length) {
      flatArr({
        initArr: ele[childrenField],
        newArr,
        childrenField,
      });
    }
    newArr.push(ele);
  }

  return newArr;
}

/**
 * 描述：下载文件
 * @date 2022-08-15
 * @param {any} blobData:Blob
 * @param {any} filename:string
 * @returns {any}
 */
export const blobTypeDownloadFile = async (
  blobData: Blob,
  filename: string,
): Promise<void> => {
  const url = window.URL.createObjectURL(blobData);
  const aLink = document.createElement('a');
  document.body.appendChild(aLink);
  aLink.style.display = 'none';
  aLink.href = url;
  aLink.setAttribute('download', filename);
  aLink.click();
  document.body.removeChild(aLink);
};

/**
 * 描述： url转为base64
 * @date 2022-08-16
 * @param {any} url:string
 * @returns {any}
 */
export const getUrlBase64 = async (url: string): Promise<any> => {
  const baseSS = new Promise((resolve, reject) => {
    window.URL = window.URL || window.webkitURL;
    const xhr = new XMLHttpRequest();
    xhr.open('get', url, true);
    xhr.responseType = 'blob';
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.onload = function () {
      if (this.status === 200) {
        const blob = this.response;
        const oFileReader = new FileReader();
        oFileReader.onloadend = function (e) {
          resolve(e?.target?.result);
        };
        oFileReader.readAsDataURL(blob);
      }
    };
    xhr.onerror = function () {
      console.error('**转base64失败**');
      reject('**转base64失败**');
    };
    xhr.send();
  });

  return baseSS;
};

/**
 * 重新定义多维数组结构
 * @date 2022-11-19
 * @param {any} initArr  初始多维数组
 * @param {any} initChildrenFieldName 初始多维数组子节点字段名
 * @param {any} resChildrenFieldName 结果多维数组子节点字段名
 * @param {any} rotorObj 重定义结构返回函数
 * @returns {any[]}
 */
export const multiArrayFormatter = <T = any, Y = any>({
  initArr,
  initChildrenFieldName,
  resChildrenFieldName,
  rotorObj,
}: {
  initArr: T[] | [];
  initChildrenFieldName: keyof T;
  resChildrenFieldName: keyof Y;
  rotorObj: (item: T) => Y;
}) => {
  return initArr?.map((item: T) => {
    const result = { ...rotorObj(item) };

    if (item?.[initChildrenFieldName]) {
      const child = multiArrayFormatter({
        // @ts-ignore
        initArr: item?.[initChildrenFieldName],
        initChildrenFieldName,
        resChildrenFieldName,
        rotorObj,
      });

      // @ts-ignore
      result[resChildrenFieldName] = child;
    }

    return result;
  });
};
