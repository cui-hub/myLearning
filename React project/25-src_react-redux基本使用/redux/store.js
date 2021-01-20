import {createStore, applyMiddleware} from 'redux'
// 引入为count组件准备的reducer
import countReducer from './count_reducer'
import thunk from 'redux-thunk'

const store = createStore(countReducer, applyMiddleware(thunk))

export default store;

