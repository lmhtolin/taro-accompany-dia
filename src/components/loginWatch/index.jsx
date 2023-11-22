import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Taro from '@tarojs/taro';

const needLoginRoute = ['/pages/book/index', '/pages/setting/index'];

export default () => {
  const { isLogin } = useSelector((state) => state.user);
  const { path } = Taro.getCurrentInstance().router;
  useEffect(() => {
    if (isLogin) {
      if (path === '/pages/login/index') {
        Taro.navigateBack();
      }
      return;
    }
    if (needLoginRoute.includes(path)) {
      Taro.navigateTo({
        url: '/pages/login/index',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);
  return null;
};
