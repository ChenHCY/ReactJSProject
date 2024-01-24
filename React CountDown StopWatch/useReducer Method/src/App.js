import './App.css';
import React, { useEffect, useReducer} from 'react';
import countDownReducer from './useReducer';

function App() {
  //链接useReducer接口，同时申明两个变量的初始值
  const [state, dispatch] = useReducer(countDownReducer, {
    seconds: 30,
    isActive: false,
  });

  //使用useEffect来监控isActive的改变，从而实现倒计时
  useEffect(() => {
    let interval;

    //如果计时器打开为true，则seconds需要改变，传入对应的dispath到useReducer
    if(state.isActive){ 
      interval = setInterval(() => {
        if(state.seconds === 0){
          clearInterval(interval);
        } else{
          dispatch({type: "START"});
        }
      }, 1000);
    } else{ //如果计时器关闭，则清理计时器
      clearInterval(interval);
    }

    //最后当程序卸载，使用call function 清除计时器
    return () => {
      clearInterval(interval);
    };
  }, [state.seconds, state.isActive]);


  //button function: 开始 / 停止, 传入对应的dispath到useReducer里面
  const handleToggle = () => {
    dispatch({type: "TOGGLE"});
  }

  //button function: 重置，传入对应的dispath到useReducer里面
  const handleReset = () => {
    dispatch({type: "RESET"});
  }
 
  return (
    <div className="App">
      <h1>{state.seconds}s</h1>

      <button onClick={handleToggle}>{state.isActive ? 'STOP' : 'START'}</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
}

export default App;
