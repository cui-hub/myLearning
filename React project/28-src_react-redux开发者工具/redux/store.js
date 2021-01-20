import {createStore, applyMiddleware, combineReducers} from 'redux'
// 引入为Count组件准备的reducer
import countReducer from './reducers/count'
// 引入为Person组件准备的reducer
import personReducer from './reducers/person'
// 引入thunk用来支持异步action
import thunk from '../../29-src_react-redux完整版/redux/node_modules/redux-thunk'
// 扩展应用redux开发者工具插件
import {composeWithDevTools} from '../../29-src_react-redux完整版/redux/node_modules/redux-devtools-extension'

const allReducers = combineReducers({
  count:countReducer,
  persons:personReducer,
})

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;

