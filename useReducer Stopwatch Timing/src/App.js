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
    //计时器正在进行
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

  //开始秒表计时的按钮
  const handleToggle = () => {
    dispatch({type: 'STOP'});
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
