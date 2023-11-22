import React from 'react';
import { Input, View } from '@tarojs/components';
import Taro, { useRouter as UC } from '@tarojs/taro';
import './index.less';

const Index = () => {
  return (
    <View className="main-view">
      <Input placeholder="请输入内容" />
    </View>
  );
};

export default Index;
