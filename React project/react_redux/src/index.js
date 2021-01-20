import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './redux/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  // Provider组件可以将所有的容器组件注入store属性，则不需要每个容器都要写store={store}了
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root'));

// redux：检测store中state的改变，如果状态改变，重新渲染App组件
/* store.subscribe(()=>{
  ReactDOM.render(<App/>,document.getElementById('root'));
})*/

// react-redux:无需手动检测store中state的变化，该方法已经在connect方法中实现
