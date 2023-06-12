import { useState, useEffect } from "react";
import React from 'react'

//fn componment
const Count = () => {
    const [count, setCount] = useState(0);

    //setState 的async特性，不会立即改变变量的值
    //setStaet 和 console.log 的区别就是 console.log会立即加入
    //在一个function里面 的所以setState都是基于一个相同的值
    const handleClick1 = () => {
        //通常的setState改变量值
        //setCount(count + 1) 
        //使用arrow function改变变量值，每次重新读取一场这个变量值
        //这样可以消除async异步，形成两个setState的顺序改变变量
        setCount(count => count + 1);
        //setCount(count => count + 1);
    }

    const handleMinus = () =>{
        setCount(count => Math.max(0, count - 1));
    }

    const handleRest = () => {
        setCount(0);
    }


    //beacuse in the fn componment, the react hook did not allowed have call back method
    //so it will used the useEffect
    // const handleClick2 = () => {
    //     setCount(count => {
    //         count += 3; 
    //         return count; 
    //     });
    // }


    //这里的useEffect()相当于componmentWillUmount() 
    //当第二个参数运行完毕，最后执行的操作。如果第二个参数为空，则就是所有组件结束时，运行
    useEffect(() => {
        //console.log(count, "[] -> mounted, no sec params -> rendering, [V1,V2] depends on Vs")
        //console.log("Use Effect");
        return () => { //clear event
            console.log("call back");
        }
    }, [count])

    return <div>
        Count: {count + " "}
        <button onClick = {handleClick1}>Add</button>
        <button style = {{"margin": "10px"}} onClick={handleMinus}>Minus</button>
        <button onClick={handleRest}>Reset</button>
    </div>
}

//class componment
class Count2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    //setState 的asyc特性，不会立即改变变量的值
    //setStaet 和 console.log 的区别就是 console.log会立即加入
    //在一个function里面 的所以setState都是基于一个相同的值
    handleClick = () => {
        //通常的setState改变量值
        //setCount(count + 1) 
        //使用arrow function改变变量值，每次重新读取一场这个变量值
        //这样可以消除async异步，形成两个setState的顺序改变变量
        this.setState(
            state => ({count: state.count + 1})
        )

        this.setState(
            state => ({count: state.count + 1})
        )
    }

    handleClick3 = () => {
        //通常的setState改变量值
        //setCount(count + 1) 
        //使用call back function 改变变量值，可以形成两个setState的顺序改变变量
        this.setState(
            state => ({
                count: state.count + 3
            }), 
            //这里的arrow function相当于call back, 它会在setState执行完毕之后，然后运行
            () => {
                //it will print after the setState() finished changed variable value
                this.setState({count: this.state.count + 3});
            }
        )
    }

    render(){
        const {count} = this.state;

        return<div>
            Count: {count + " "}
            <button onClick={this.handleClick}> +2 </button>
            <button style={{"margin": "10px"}} onClick={this.handleClick3}>+3 * 2 </button>
        </div>
    }
}

export default Count;