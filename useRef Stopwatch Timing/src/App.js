import './App.css';
import React, { useEffect, useRef, useState} from 'react';

function App() {
  //我们使用了 useRef 创建了 intervalRef。
  //intervalRef 保存计时器的引用避免重新渲染
  //在 useEffect 中，我们使用 intervalRef.current 来存储和清除计时器。
  const intervalRef = useRef(null);
  const [seconds, setSeconds]= useState(0);
  const [isActive, setIsActive] = useState(false); 

  useEffect (() => {
    // 直接在UI中使用 secondaryRef.current 可能会导致问题
    // 所以需要一个function 来改变 secondaryRef.current 
    const tick = () => {
      setSeconds((seconds) => seconds + 1);
    };

    if(isActive){
      intervalRef.current = setInterval(tick, 1000);
    } else{
      clearInterval(intervalRef.current);
    }

    //程序卸载的时候，清除计时器
    return () => {
      clearInterval(intervalRef.current);
    }
  }, [isActive]);

  //button function: 开始 / 停止
  const hanleToggle = () => {
    setIsActive((prev) => !prev);
  }

  //button function: 重置
  const handleReset = () => {
    setSeconds(0);
    setIsActive(false);
  }
 
  return (
    <div className="App">
      <h1>{seconds}s</h1>

      <button onClick={hanleToggle}>{isActive ? 'STOP' : 'START'}</button>
      <button onClick={handleReset}>RESET</button>
    </div>
  );
}

export default App;
