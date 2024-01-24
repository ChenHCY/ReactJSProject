import './App.css';
import React, { useEffect, useReducer } from 'react';
import stopwatchReducer from './useReducer'

function App() {
    // 使用 useReducer() 链接 stopwatchReducer, 同时申明初始值
  const [state, dispatch] = useReducer(stopwatchReducer, {
    seconds: 0,
    isActive: false,
  });

  //使用useEffect来监控isActive是否正在进行
  useEffect(() => {
    let interval;
      
    //如果从useRedcuer的接口得到的isActive变为true, 则计时器开始运行，传输对应的dispath给useReducer去改变变量seconds
    if(state.isActive){
      interval = setInterval(() => {
        dispatch({type: 'START'});
      }, 100);
    } else{ //计时器停止, 清除计时器
      clearInterval(interval);
    }

    //当程序停止时，使用call back() function卸载 这个秒表
    return () => {
      clearInterval(interval);
    };
  }, [state.isActive]);

  //开始计时器开始改变的时候，需要对于变量isActive进行改变 ==> 传输对应的dispath 给useReducer()进行改变
  const handleToggle = () => {
    dispatch({type: 'TOGGLE'});
  }

  //重置秒表的按钮
  const handleReset = () => {
    dispatch({type: 'RESET'});
  }
  
  return (
    <div className="App">
      <h1>{state.seconds}s</h1>

      <button onClick={handleToggle}>{state.isActive ? 'STOP' : 'START'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
