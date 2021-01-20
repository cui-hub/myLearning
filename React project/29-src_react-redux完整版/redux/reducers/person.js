import {ADD_PERSON} from '../constant'

// 初始化人的列表
const initState = [{name:'tom', age:18, id:'001'}]
export default function personReducer(preState=initState, action){
  const {type, data} = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState] // 防止redux底层浅对比（内存地址）检测不到变化
    default:
      return preState
  }
}