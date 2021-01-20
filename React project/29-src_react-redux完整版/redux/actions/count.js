// 改文件专门为count组件生成action对象,包含同步和异步action
import {INCREMENT, DECREMENT} from '../constant'
// import store from './store'

export const increment = data => ({type:INCREMENT, data})

export const decrement = data => ({type:DECREMENT, data})



// 异步action必须返回函数类型,但是得需要一个中间件库redux-thunk,y异步action中一般都会开启同步任务
export const incrementAsync = (data, interval) => {
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch(increment(data))
    }, interval)
  }
}