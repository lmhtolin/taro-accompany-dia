import React from 'react';
import { useEnv } from 'taro-hooks';
import { Input, View } from '@tarojs/components';
import './index.less';

const Index = () => {
  const env = useEnv();
  return (
    <View className="main-view">
      <Input placeholder="bew " />
    </View>
  );
};

export default Index;
