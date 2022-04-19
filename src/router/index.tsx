import React, { FC, ReactElement } from 'react';
import ProRouter, { routerLoader } from '@fle-ui/pro-router';
import { AppRouter, AppRoute } from '@ice/stark';
import routerConfig from '@/const/router.config';

const __router = routerLoader(routerConfig);

const RouterPack: FC = (): ReactElement => {

  return (
    <AppRouter>
      <AppRoute
        activePath="/seller"
        title="商家平台"
        url={[
          '//unpkg.com/icestark-child-seller/build/js/index.js',
          '//unpkg.com/icestark-child-seller/build/css/index.css',
        ]}
      />
      <AppRoute
        activePath="/"
        render={() => {
          return <ProRouter router={__router} />
        }}
      />
    </AppRouter>
    // 
  )
}

export default RouterPack; 