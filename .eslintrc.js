// eslint-disable-next-line
module.exports = {
  extends: ['taro/react', 'prettier'],
  plugins: ['react', 'react-hooks', 'import', 'jsx-a11y', 'prettier'],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  settings: {
    'import/extensions': ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
      },
      // alias: {
      //   '@': '/src',
      //   map: [['@', './src']], // 这里配置你的别名路径，例如将 '@' 映射到 './src'
      //   extensions: ['.js', '.jsx', '.ts', '.tsx'], // 这里配置你的文件扩展名，例如支持 .js, .jsx, .ts, .tsx 文件
      // },
    },
  },
  rules: {
    // 'prettier/prettier': 1,
    'no-unused-vars': 0,
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'consistent-return': 0,
    'jsx-a11y/aria-role': 0,
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
    // prettier: 1,
    // '': 1,
    // "react/jsx-uses-react": "off",
    // "react/react-in-jsx-scope": "off",
    // "import/extensions": [
    //   "error",
    //   "always",
    //   {
    //     mjs: "never",
    //     js: "never",
    //     jsx: "never",
    //     ts: "never",
    //     tsx: "never",
    //   },
    // ],
    // "jsx-a11y/anchor-has-content": "off",
    // "jsx-a11y/anchor-is-valid": "off",
    // "jsx-a11y/click-events-have-key-events": "off",
    // "jsx-a11y/no-static-element-interactions": "off",
    'import/no-commonjs': 0,
    'object-curly-newline': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
