import Taro from '@tarojs/taro';

Taro.cloud.init({
  env: 'taro-music-test',
});

exports.main = () => {
  const { ENV, OPENID, APPID } = Taro.cloud.getWXContext();
  console.log('ENV, OPENID, APPID', ENV, OPENID, APPID);
  return {
    OPENID,
    ENV,
    APPID,
  };
};
