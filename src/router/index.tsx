import React, { FC, ReactElement } from 'react';
import { isInIcestark } from '@ice/stark-app';
import ProRouter, { routerLoader } from '@fle-ui/pro-router';
import routerConfig from '@/const/router.config';
import Config from '../../package.json';
// @ts-ignore
const __router = routerLoader(routerConfig);

const RouterPack: FC = (): ReactElement => {

  // app更换为你想要的名称哦

  return (
    <ProRouter router={__router} basename={isInIcestark() ? Config.homePath : Config.homePage}
    />
  )
}

export default RouterPack; 