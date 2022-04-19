
import React from 'react';
import { HomeOutlined, OrderedListOutlined } from '@ant-design/icons';

import type { MenuItem } from '@fle-ui/pro-layout/es/components/proMenu';

const MenuConfig: MenuItem[] = [
  {
    name: '首页',
    icon: <HomeOutlined />,
    path: '/home',
    key: '/home',
  },
  {
    name: '演示列表',
    icon: <OrderedListOutlined />,
    path: '/list',
    key: '/list'
  }
];

export default MenuConfig;
