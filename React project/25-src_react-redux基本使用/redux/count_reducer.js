/*
  1. 创建一个为count组件服务的reducer，本质是一个函数
  2. reducer函数会接到两个参数，分别是之前的状态，动作对象
*/
import {INCREMENT, DECREMENT} from './constant'


const initState = 0; // 初始化的状态， 因为store.js初次加载的时候会自动调用一下reducer
export default function countReducer(preState=initState, action){
  // console.log(preState, action)
  const {type, data} = action;
  switch (type) {
    case INCREMENT:
      return preState + data;
    case DECREMENT:
      return preState - data;
    default: // 初始化
      return preState;
  }
}