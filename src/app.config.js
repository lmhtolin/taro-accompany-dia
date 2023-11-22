export default {
  pages: [
    'pages/index/index',
    'pages/order/index',
    'pages/my/index',
    'pages/login/index',
    'pages/book/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    // custom: true,
    color: '#333333',
    selectedColor: '#1874bb',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        selectedIconPath: 'images/home_active.png',
        iconPath: 'images/home.png',
        text: 'GGP陪诊',
      },
      {
        pagePath: 'pages/order/index',
        selectedIconPath: 'images/order_active.png',
        iconPath: 'images/order.png',
        text: '订单',
      },
      {
        pagePath: 'pages/my/index',
        selectedIconPath: 'images/my_active.png',
        iconPath: 'images/my.png',
        text: '我的',
      },
    ],
  },
};
