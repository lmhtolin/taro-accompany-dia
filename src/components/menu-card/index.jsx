import React, { useState, useCallback, useEffect } from 'react';
import { View } from '@tarojs/components';
import './index.less';

export default ({ className, title, icon }) => {
  return (
    <View className={`home-menu-card flex-1 home-menu-card-${icon} ${className}`}>{title}</View>
  );
};
