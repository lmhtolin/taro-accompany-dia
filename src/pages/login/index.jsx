import React, { useCallback } from 'react';
// import Taro from '@tarojs/taro';
import { useLogin } from 'taro-hooks';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input, View } from '@tarojs/components';
import './index.less';

const Index = () => {
  const dispatch = useDispatch();
  const { login, check } = useLogin();
  const loginClick = useCallback(() => {
    login(true)
      .then((res) => {
        console.log('qqqqq', res);
      })
      .catch((err) => {
        console.log('errrr', err);
      });
    // login({
    //   success: (authRes) => {
    //     console.log('aaaaaaa', authRes);
    //     // const { code } = authRes; // code需要去服务换取openId
    //   },
    //   fail: (err) => {
    //     console.log('errrrr', err);
    //   },
    // });
  }, [dispatch]);

  return (
    <View className="main-view">
      <Button className="login-btn" onClick={loginClick}>
        授权登录
      </Button>
    </View>
  );
};

export default Index;
