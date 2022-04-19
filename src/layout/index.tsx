import React, { FC, ReactElement } from 'react';
import { withRouter } from 'react-router-dom';
import ProLayout from '@fle-ui/pro-layout';
import MenuConfig from '@/const/menu.config';

export interface LayoutProps {
  location: any;
}

const Layout: FC<LayoutProps> = (props): ReactElement => {

  return (
    <ProLayout location={props.location} menuList={MenuConfig}>
      {props.children}
    </ProLayout>
  )
}

export default withRouter(Layout);