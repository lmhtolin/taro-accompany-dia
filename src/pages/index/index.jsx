import React, { useCallback } from 'react';
import { SwiperItem, Swiper, View, Image } from '@tarojs/components';
// 这样用才不会出现打包的时候的优化问题（images资源消失）
import bann1 from '@/images/bann1.png';
import bann2 from '@/images/bann2.png';
import bann3 from '@/images/bann3.png';
import MenuCard from '@/components/menu-card';
import Taro from '@tarojs/taro';
import './index.less';

const Index = () => {
  const goBook = useCallback(() => {
    Taro.navigateTo({ url: '/pages/book/index' });
  }, []);
  return (
    <View className="ggp-index">
      <Swiper circular indicatorDots autoplay>
        <SwiperItem>
          <Image src={bann1} />
        </SwiperItem>
        <SwiperItem>
          <Image src={bann2} />
        </SwiperItem>
        <SwiperItem>
          <Image src={bann3} />
        </SwiperItem>
      </Swiper>
      <View className="mt-[24px] grid gap-[14px] grid-cols-2">
        <View className="main-yw" onClick={goBook}>
          就医陪诊
        </View>
        <View>
          <View className="main-yw main-yw-1 mb-[14px]" onClick={goBook}>
            就医半天陪诊
          </View>
          <View className="main-yw main-yw-1" onClick={goBook}>
            诊前咨询
          </View>
        </View>
      </View>
      <View className="flex mt-[24px]">
        <MenuCard className="mr-[14px]" title="取/送服务" icon="hospital" onClick={goBook} />
        <MenuCard title="代办买药" icon="wheelchair" onClick={goBook} />
      </View>
    </View>
  );
};

export default Index;
