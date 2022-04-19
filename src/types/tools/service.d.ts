

interface AssistDescribe {

  // 请求接口地址
  url: string;

  // 该接口是否携带token
  token?: boolean;

  /**
   *  是否开启绿色通道 开启后
   *  接口返回success 
   *  🌟将会强行转为ture 真实success字段会在 channelSuccess 透出
   */
  channel?: boolean;

  /**
   *  开启后 response 将会全量返回
   *  格式如下： 
   *  {
   * 
   *   `axios` 请求的配置信息
   *    config: {}, 
   * 
   *    由服务器提供的响应
   *    data: {},
   *   
   *    服务器响应头 
   *    headers: {},
   *      
   *    是生成此响应的请求 
   *    在node.js中它是最后一个ClientRequest实例 (in redirects)，在浏览器中则是 XMLHttpRequest 实例
   *    request  XMLHttpRequest {}
   *    
   *    来自服务器响应的 HTTP 状态码
   *    status: number;  
   *    
   *    来自服务器响应的 HTTP 状态信息         
   *    statusText: string;     
   *  }
   */
  response?: boolean;

  baseUrl?: string;

  
}

type RewriteUrl = string | AssistDescribe;


interface AxiosTransformer {
  (data: any, headers?: any): any;
}

interface AxiosAdapter {
  (config: AxiosRequestConfig): AxiosPromise<any>;
}


interface AxiosBasicCredentials {
  username: string;
  password: string;
}

interface AxiosProxyConfig {
  host: string;
  port: number;
  auth?: {
    username: string;
    password: string;
  };
  protocol?: string;
}

type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK'

type ResponseType =
  | 'arraybuffer'
  | 'blob'
  | 'document'
  | 'json'
  | 'text'
  | 'stream'

interface AxiosRequestConfig {
  url?: RewriteUrl;
  method?: Method;
  baseURL?: string;
  transformRequest?: AxiosTransformer | AxiosTransformer[];
  transformResponse?: AxiosTransformer | AxiosTransformer[];
  headers?: any;
  params?: any;
  paramsSerializer?: (params: any) => string;
  data?: any;
  timeout?: number;
  timeoutErrorMessage?: string;
  withCredentials?: boolean;
  adapter?: AxiosAdapter;
  auth?: AxiosBasicCredentials;
  responseType?: ResponseType;
  xsrfCookieName?: string;
  xsrfHeaderName?: string;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  maxContentLength?: number;
  validateStatus?: ((status: number) => boolean) | null;
  maxBodyLength?: number;
  maxRedirects?: number;
  socketPath?: string | null;
  httpAgent?: any;
  httpsAgent?: any;
  proxy?: AxiosProxyConfig | false;
  cancelToken?: CancelToken;
  decompress?: boolean;
}

interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  request?: any;
}

interface AxiosError<T = any> extends Error {
  config: AxiosRequestConfig;
  code?: string;
  request?: any;
  response?: AxiosResponse<T>;
  isAxiosError: boolean;
  toJSON: () => object;
}

interface AxiosPromise<T = any> extends Promise<AxiosResponse<T>> {
}

interface CancelStatic {
  new(message?: string): Cancel;
}

interface Cancel {
  message: string;
}

interface Canceler {
  (message?: string): void;
}

interface CancelTokenStatic {
  new(executor: (cancel: Canceler) => void): CancelToken;
  source(): CancelTokenSource;
}

interface CancelToken {
  promise: Promise<Cancel>;
  reason?: Cancel;
  throwIfRequested(): void;
}

interface CancelTokenSource {
  token: CancelToken;
  cancel: Canceler;
}

interface AxiosInterceptorManager<V> {
  use(onFulfilled?: (value: V) => V | Promise<V>, onRejected?: (error: any) => any): number;
  eject(id: number): void;
}

interface AxiosInstance {
  (config: AxiosRequestConfig): AxiosPromise;
  (url: RewriteUrl, config?: AxiosRequestConfig): AxiosPromise;
  defaults: AxiosRequestConfig;
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse>;
  };
  getUri(config?: AxiosRequestConfig): string;
  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R>;
  get<T = any, R = AxiosResponse<T>>(url: RewriteUrl, config?: AxiosRequestConfig): Promise<R>;
  delete<T = any, R = AxiosResponse<T>>(url: RewriteUrl, config?: AxiosRequestConfig): Promise<R>;
  head<T = any, R = AxiosResponse<T>>(url: RewriteUrl, config?: AxiosRequestConfig): Promise<R>;
  options<T = any, R = AxiosResponse<T>>(url: RewriteUrl, config?: AxiosRequestConfig): Promise<R>;
  post<T = any, R = AxiosResponse<T>>(url: RewriteUrl, data?: any, config?: AxiosRequestConfig): Promise<R>;
  put<T = any, R = AxiosResponse<T>>(url: RewriteUrl, data?: any, config?: AxiosRequestConfig): Promise<R>;
  patch<T = any, R = AxiosResponse<T>>(url: RewriteUrl, data?: any, config?: AxiosRequestConfig): Promise<R>;
}

interface AxiosStatic extends AxiosInstance {
  create(config?: AxiosRequestConfig): AxiosInstance;
  Cancel: CancelStatic;
  CancelToken: CancelTokenStatic;
  isCancel(value: any): boolean;
  all<T>(values: (T | Promise<T>)[]): Promise<T[]>;
  spread<T, R>(callback: (...args: T[]) => R): (array: T[]) => R;
  isAxiosError(payload: any): payload is AxiosError;
}

declare const axios: AxiosStatic;

// export default axios;