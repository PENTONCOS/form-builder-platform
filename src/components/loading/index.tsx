import React, { FC, ReactElement } from 'react';
import classnames from 'classnames';
import { Spin } from '@fle-ui/next';

import type { LoadingProps } from '@/types/components/loading';


import './index.less';

const Layout: FC<LoadingProps> = (props): ReactElement => {

  const { className, ...otherProps } = props;

  return (
    <div 
      className={classnames('components-loading', className)}>
      <Spin size="large" />
    </div>
  )
}

export default Layout;