import React from "react";
import useCounter from "../useCounter";

//Counter子组件 只提供渲染的样式
const Counter = () => {
    // 从我们的自定义hook中提取 state 和 function
    // 提取需要用{}, 不是[]
    const {count, increment, decrement} = useCounter(10);

    return(
    <>
        {/*dispacth是useReducer用来分配修改state方法，所以这里button 直接传一个type */}
        <button onClick={increment}> + </button>
        <span> {count} </span>
        <button onClick={decrement}> - </button>
    </>
    );
}

export default Counter;