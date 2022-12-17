const routes = [
  // 客户端
  {
    path: '/',
    component: '../layouts/index.tsx',
    title: '',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        component: './../pages/home',
      },
      {
        path: '/about',
        component: './../pages/about',
      },
      {
        path: '/portfolio',
        component: './../pages/portfolio',
      },
    ],
  },
];

module.exports = routes;
