import {createStore, applyMiddleware, combineReducers} from 'redux'
// 引入为Count组件准备的reducer
import countReducer from './reducers/count'
// 引入为Person组件准备的reducer
import personReducer from './reducers/person'
// 引入thunk用来支持异步action
import thunk from '../../28-src_react-redux开发者工具/redux/node_modules/redux-thunk'

const allReducers = combineReducers({
  count:countReducer,
  persons:personReducer,
})

const store = createStore(allReducers, applyMiddleware(thunk))

export default store;

