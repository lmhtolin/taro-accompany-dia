import { Component } from 'react';
import { Provider } from 'react-redux';
import 'taro-ui/dist/style/index.scss'; // 全局引入一次即可
import store from './store';
import './app.css';
import LoginWatch from './components/loginWatch';

class App extends Component {
  // componentDidMount() {}

  // componentDidShow() {}

  // componentDidHide() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return (
      <Provider store={store}>
        {this.props.children}
        <LoginWatch />
      </Provider>
    );
  }
}

export default App;
