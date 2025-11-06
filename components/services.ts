
import request, { RequestOptionsInit } from 'umi-request';

export const fetch = <T>(
  url: string,
  options?: RequestOptionsInit,
): Promise<T> => request(url, {
    method: 'GET',
    ...options,
  }).then((res) => res.result);

export const queryPost = <T>(
  url: string,
  data: Record<string, any>,
): Promise<T> =>
  request(url, {
    method: 'POST',
    data,
  });

export const queryPostAsync = <T>(
  url: string,
): Promise<T> =>
  request(url, {
    method: 'POST',
  });

export const fetchAsync = <T>(
  url: string,
  options?: RequestOptionsInit,
): Promise<T> =>
  request(url, {
    method: 'GET',
    ...options,
  })

export const downloadFile = (url: string, data: Record<string, any> = {}): Promise<any> =>
  request(url, {
    method: 'POST',
    responseType: 'blob',
    data,
  });
