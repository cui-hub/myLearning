import CountUI from '../../components/Count'
import {createIncrementAction, createDecrementAction, createIncrementAsyncAction} from '../../redux/count_action'

// 引入connect用于连接UI组件与redux
import {connect} from 'react-redux'


// 函数mapStateToProps的返回值作为UI组件的props的：状态,参数state为react-redux帮你从store拿来的状态
const mapStateToProps = (state)=>{
  return {
    count:state,
  }
}

// 函数mapDispatchToProps的返回值作为UI组件的props操作状态的：方法, 参数dispatch为react-redux帮你从store拿来的dispatch
const mapDispatchToProps = (dispatch)=>{
  return {
    // 通知redux执行+运算
    increment: data => dispatch(createIncrementAction(data)),
    decrement: data => dispatch(createDecrementAction(data)),
    incrementAsync: (data, time) => dispatch(createIncrementAsyncAction(data, time)),
  }
}
// 利用connect()()方法创建容器组件
const CountContainer = connect(mapStateToProps, mapDispatchToProps)(CountUI);

export default CountContainer;