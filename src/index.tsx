import React from 'react';
import ReactDOM from 'react-dom';
import Router from '@/router';
import { ConfigProvider } from "@fle-ui/next";
import zhCN from "@fle-ui/next/es/locale-provider/zh_CN";
import moment from 'moment';
import 'moment/dist/locale/zh-cn';
import '@/style/index.less';

moment.locale('zh-cn');


console.log('测试console11212 ');

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <Router />
  </ConfigProvider>,
  document.getElementById('root')
);