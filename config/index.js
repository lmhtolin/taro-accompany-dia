const path = require('path');
const { UnifiedWebpackPluginV5 } = require('weapp-tailwindcss/webpack');

const pluginOptions = {
  less: {
    patterns: [path.resolve(__dirname, '..', 'src/options.less')],
  },
};

const config = {
  projectName: 'accompany-dia',
  date: '2023-11-14',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  plugins: ['@taro-hooks/plugin-react', ['taro-plugin-style-resource', pluginOptions]],
  defineConstants: {},
  copy: {
    patterns: [],
    options: {},
  },
  framework: 'react',
  compiler: {
    type: 'webpack5',
  },
  cache: {
    enable: false, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    webpackChain(chain) {
      chain.merge({
        plugin: {
          install: {
            plugin: UnifiedWebpackPluginV5,
            args: [
              {
                appType: 'taro',
              },
            ],
          },
        },
      });
    },
    lessLoaderOption: {
      lessOptions: {
        modifyVars: {
          '@primary-color': '#1874bb',
        },
        javascriptEnabled: true,
      },
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 1024, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
    '@/': path.resolve(__dirname, '..', 'src/'),
  },
  h5: {
    esnextModules: ['taro-ui'],
    publicPath: '/',
    staticDirectory: 'static',
    lessLoaderOption: {
      lessOptions: {
        modifyVars: {
          '@primary-color': '#1874bb',
        },
        javascriptEnabled: true,
      },
    },
  },
};

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};
