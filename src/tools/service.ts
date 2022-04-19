import axios from 'axios';
import { notification } from '@fle-ui/next';
import ServiceCode from '@/const/serviceCode';
import { baseURL, baseURLMap, fleAppEnv } from '@/const/serviceEnv';
import ServiceNice from '@/const/serviceNice';
import { CommonStore } from '@/stores';
import Cookies from 'js-cookie';

const $http = axios.create({
  baseURL,
  timeout: 60000,
});

// 添加请求拦截器
$http.interceptors.request.use((config) => {
  // 在发送请求之前做些什么
  const token = Cookies.get('token');
  if (typeof config.url === 'object') {
    let configUrl = config.url;
    config.url = configUrl.url;
    if (!(configUrl.token !== undefined && configUrl.token === false)) {
      if (token) {
        config.headers["authority_token"] = token;
      }
    }

    if ((!!configUrl.channel) || (!!configUrl.response)) {
      try {
        config.transformResponse = [(response) => {
          let responseJOSN = JSON.parse(response);

          if (!!configUrl.channel) {
            responseJOSN.channelSuccess = responseJOSN.success;
            responseJOSN.success = true;
          }

          if (!!configUrl.response) {
            responseJOSN.configResponse = true;
          }

          return responseJOSN;
        }]
      } catch (ex) {
        console.warn(ex);
      }
    }

    if (!!configUrl.baseUrl) {
      if (baseURLMap[configUrl.baseUrl]) {
        config.baseURL = baseURLMap[configUrl.baseUrl][fleAppEnv];
      } else {
        config.baseURL = configUrl.baseUrl;
      }
    }

    return config;
  }

  if (!!token) {
    config.headers["authority_token"] = token;
  }
  return config;
}, (error) => {
  // 对请求错误做些什么
  // notification.error({
  //   message: "发送请求失败",
  //   description: error,
  // });

  return Promise.reject(error);
});

// 添加响应拦截器
$http.interceptors.response.use((response) => {

  const { status, data, statusText } = response;

  if (status < 200 || status > 300) {
    notification.error({
      message: `请求错误: ${status}`,
      description: statusText,
    });
    return Promise.reject(statusText);
  }

  if (!data.success) {
    if (data.code === ServiceCode.get('LOGIN_ERROR')) {
      // 去登录
      CommonStore.goLogin();
      return Promise.reject(data.message);
    }

    notification.error({
      message: "提示",
      description: data.message,
    });
    return Promise.reject(data.message);
  }

  if (!!data?.configResponse) {
    return response;
  }

  return response.data;
}, (error) => {

  notification.error({
    message: "提示",
    description: ServiceNice.worstText,
  });

  return Promise.reject(error);
});

export default $http;