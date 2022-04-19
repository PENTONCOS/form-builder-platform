export default [
  {
    layout: import('@/layout'),
    routers: [
      {
        title: '首页',
        path: '/home',
        exact: true,
        component: import('@/pages/home'),
        routers: [
          {
            title: '详情',
            path: '/details',
            exact: true,
            component: import('@/pages/details'),
          }
        ]
      },
      {
        title: '演示列表',
        path: '/list',
        exact: true,
        component: import('@/pages/list'),
      }
    ]
  },
  {
    redirect: '/home',
  }
]