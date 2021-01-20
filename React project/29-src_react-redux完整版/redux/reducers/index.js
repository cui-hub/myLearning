/*改文件汇总所有的reducers */

import {combineReducers} from 'redux'
// 引入为Count组件准备的reducer
import count from './count'
// 引入为Person组件准备的reducer
import persons from './person'

// 汇总所有的reducer为一个总的reducers
const allReducers = combineReducers({
  count,
  persons
})

export default allReducers