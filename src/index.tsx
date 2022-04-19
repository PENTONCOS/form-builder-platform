import React from 'react';
import ReactDOM from 'react-dom';
import Router from '@/router';
import { isInIcestark, setLibraryName } from "@ice/stark-app";
import { ConfigProvider } from "@fle-ui/next";
import Config from '../package.json';
import zhCN from "@fle-ui/next/lib/locale-provider/zh_CN";
import moment from 'moment';
import 'moment/dist/locale/zh-cn';

moment.locale('zh-cn');

import '@/style/index.less';


const App = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Router />
    </ConfigProvider>
  )
}


export function mount(props: any) {
  ReactDOM.render(<App {...props.customProps} />, props.container);
}


export function unmount(props: any) {
  ReactDOM.unmountComponentAtNode(props.container);
}

// 注意：setLibraryName的入参需要与 webpack 工程配置的output.library保持一致
setLibraryName(Config.appName);

if (!isInIcestark()) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
