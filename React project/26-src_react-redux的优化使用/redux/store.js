import {createStore, applyMiddleware} from 'redux'
// 引入为count组件准备的reducer
import countReducer from './count_reducer'
import thunk from '../../27-src_react-redux数据共享版/redux/node_modules/redux-thunk'

const store = createStore(countReducer, applyMiddleware(thunk))

export default store;

