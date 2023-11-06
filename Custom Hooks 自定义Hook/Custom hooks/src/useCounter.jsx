//自定义hook
import { useState } from "react";

const useCounter = (num) => {
    // useState的申明都是[]
    const [count, setCount] = new useState(0);

    // 添加值
    const increment = () => {
        setCount(count => count + num);
    }

    // 减少值
    const decrement = () => {
        setCount(count => count - num);
    }

    //把设定的 state值，和function ==》 返回输出
    return{
        count,
        increment,
        decrement,
    }
}

export default useCounter;