/* 2. useTimeout()

Create a hook to easily use setTimeout(callback, delay).

1. reset the timer if delay changes
2. DO NOT reset the timer if only callback changes

*/

import React, {useEffect, useRef} from 'react';

//1. reset the timer if delay changes =》 当delay 发生改变时，重置setTimeout的等待时间
//2. DO NOT reset the timer if only callback changes =》如果callback回调函数发生改变，不用重置setTimeout等待时间
export function useTimeout(callback: () => void, delay: number) {
  // your code here
  // 2. 如果callback回调函数发生改变，不用重置setTimeout等待时间
  // useRef 通常非常适合state value 并在 render 之间持久保存它们
  const callbackRef = useRef(callback); // 保存跨渲染持续存在的值，而不会在值更改时导致重新渲染
  callbackRef.current = callback; // React 不会重新 re-render 渲染 基于 .current 属性更改的组件。

  //1. 当delay 发生改变时，重置setTimeout的等待时间
  // 我们使用useEffect监控delay的改变
  useEffect ( () =>{
    //设定计时器，当经过delay时间后，再调用callback function => callback: () => void
    const timerId = setTimeout(() => callbackRef.current(), delay);

    //当delay发生更改时，useEffect 将调用这个自己本身的callback函数 清除旧的计时，然后创建一个新实例setTimeout与新的delay。
    return () => { //回调函数 卸载计时器
      clearTimeout(timerId);
    }
  }, [delay]);

}
