import React, { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import { CoverView, CoverImage } from '@tarojs/components';
import './index.less';

const color = '#000000';
const selectedColor = '#DC143C';

export default () => {
  const [selected, setSelected] = useState(0);
  const switchTab = (index, url) => {
    setSelected(index);
    Taro.navigateTo({ url: '/pages/login/index' });
  };

  const [list] = useState([
    {
      pagePath: '/pages/index/index',
      selectedIconPath: '/images/tabbar_cart.png',
      iconPath: '/images/tabbar_cart.png',
      text: '首页',
    },
    {
      pagePath: '/pages/xx2/index',
      selectedIconPath: '/images/tabbar_cart.png',
      iconPath: '/images/tabbar_cart.png',
      text: '分类',
    },
    {
      pagePath: '/pages/xx3/index',
      selectedIconPath: '/images/tabbar_cart.png',
      iconPath: '/images/tabbar_cart.png',
      text: '购物车',
    },
  ]);
  return (
    <CoverView className="tab-bar">
      <CoverView className="tab-bar-border" />
      {list.map((item, index) => {
        return (
          <CoverView
            key={index}
            className="tab-bar-item"
            onClick={switchTab.bind(this, index, item.pagePath)}
          >
            <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath} />
            <CoverView style={{ color: selected === index ? selectedColor : color }}>
              {item.text}
            </CoverView>
          </CoverView>
        );
      })}
    </CoverView>
  );
};
