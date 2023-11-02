import './App.css';
import React, { useReducer } from 'react';
import Counter from './components/Counter'
import CountContext from './CountContext';
import CountReducer from './CountReducer'

//App.jsx 进行渲染的地方，也是确定父组件包裹哪些子组件的地方
const App = () => {
  // 从CountReducer()中提取 state 和 dispath数据
  // useReducer(reducer, state); //这里提供一个state默认值的接口
  const [state, dispatch] = useReducer(CountReducer,  0);
  
  return(
   <div className='App'>
    {/*value表示要传入子组件的值，这里是把useReducer需要用到的state 和 dispatch 作为一个对象 一起存入子组件Counter */}
    <CountContext.Provider value={{state, dispatch}}>
      <Counter />
    </CountContext.Provider>
   </div>
  )
}



export default App;
