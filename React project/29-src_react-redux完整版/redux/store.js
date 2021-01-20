import {createStore, applyMiddleware} from 'redux'

// 引入thunk用来支持异步action
import thunk from 'redux-thunk'
// 扩展应用redux开发者工具插件
import {composeWithDevTools} from 'redux-devtools-extension'

// 直接引入合并好的reducers
import allReducers from './reducers'


const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;

