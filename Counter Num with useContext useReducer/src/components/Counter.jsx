import React, {useContext} from "react";
import CountContext from "../CountContext";

//Counter子组件 只提供渲染的样式
const Counter = () => {
    // 使用useContext 从context上下文中提取 对应的 context 对象
    const count = useContext(CountContext); 
    const dispatch = count.dispatch; // 提取 useReducer修改state的方法

    return(
    <>
        {/*dispacth是useReducer用来分配修改state方法，所以这里button 直接传一个type */}
        <button onClick={() => dispatch({ type: 'counter/increment' })}> + </button>
        <span> {count.state} </span>
        <button onClick={() => dispatch({ type: 'counter/decrement' })}> - </button>
    </>
    );
}

export default Counter;