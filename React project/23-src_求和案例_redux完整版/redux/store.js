import {createStore} from '../../24-src_求和案例_redux异步action/redux/node_modules/redux'
// 引入为count组件准备的reducer
import countReducer from './count_reducer'

const store = createStore(countReducer)

export default store;

