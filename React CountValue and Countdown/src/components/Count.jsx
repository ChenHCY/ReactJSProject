import { useState, useEffect } from "react";
import React from 'react'

//fn componment
const Count = () => {
    const [count, setCount] = useState(0);
    const [times, setTimes] = useState(30);
    const [isRunning, setIsRunning] = useState(false);

    //setState 的async特性，不会立即改变变量的值
    //setStaet 和 console.log 的区别就是 console.log会立即加入
    //在一个function里面 的所以setState都是基于一个相同的值
    const handleClick1 = () => {
        //通常的setState改变量值
        //setCount(count + 1) 
        //使用arrow function改变变量值，每次重新读取一场这个变量值
        //这样可以消除async异步，形成两个setState的顺序改变变量
        setCount(count => count + 1);
        setCount(count => count + 1);
    }


    //beacuse in the fn componment, the react hook did not allowed have call back method
    //so it will used the useEffect
    const handleClick2 = () => {
        setCount(count => {
            count += 3; 
            return count; 
        });
    }

    //这里的useEffect()相当于componmentWillUmount()：监控count值
    //当组件全部执行完毕之后，最后执行的操作
    useEffect(() => {
        //console.log(count, "[] -> mounted, no sec params -> rendering, [V1,V2] depends on Vs")
        return() => {
           // setCount(count => count + 3);
            console.log(count, "[] and unmounting, [V1, V2] at end of updates")
        };
    }, [count])

    //首先因为fn componment中是不允许使用arrow function进行call back的
    //必须要使用useEffect来完成一些操作，比如componmentWillUmount(), setState()执行完毕之后，最后再执行的操作

    //重点： 如果 function() 定义在useEffect() hook中，是无法在外部进行访问的，包括在button onclick中使用
    //所以如果要使这种function可以在外部被访问，我们需要定义在useEffect hook的外面，然后在hook中调用

    const handleTimeClick = () => {
        setIsRunning(true);
    }

    const handleStop = () => {
        setIsRunning(false);
    }

    /* return () => clearInterval(interval); useEffect hook中的语句称为clean up 函数。 
    它用于在组件componment卸载 或 if-statement 依赖项数组中的依赖项更改时执行任何必要的清理或拆卸。

    在这个具体的例子中，cleanup 函数清除了组件挂载时创建的interval function。 
    ==> 这确保在componment卸载 或  isRunning 状态从 true 变为 false 时stop time interval。

    简单来说，通过从 useEffect 钩子返回清理函数，当组件卸载或 isRunning 状态从 true 变为 false 时，
    React 将自动调用它。
    */ 

    //这个useEffect相当于componmentDidUpdate()，监控变量值isRunning的改变
    //然后根据依赖项的改变，生成新的效果
    useEffect(() => {
        if(isRunning === true){
            const interval = setInterval(() => {
                setTimes(times => {
                    times -= 1;
                    if(times === 0){
                        clearInterval(interval);
                    }
                    return times;
                });
            }, 100);
            return () => clearInterval(interval); 
            //相当于call back,，当组件卸载或 isRunning 状态从 true 变为 false 时，React 将自动调用它。
        }
    }, [isRunning]);

    const handleReset = () => {
        setTimes(30);
    }

    return <div>
        Count: {count + " "}
        <button onClick={handleClick1}>+2</button>
        <button style = {{"margin": "10px"}} onClick={handleClick2}>+3</button>
        <br/>
        <p></p>
        Time: {times + " "}
        {isRunning ? (
            <button style = {{"margin": "5px"}} onClick={handleStop}>Stop</button>
        ) : (
            <button style = {{"margin": "5px"}} onClick={handleTimeClick}>Start</button>
        )}
        <button style = {{"margin": "5px"}} onClick={handleReset}>Reset</button>
    </div>
}

//class componment
class Count2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            times: 30,
            isRunning: false,
            intervalId: null
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

    handleStart = () => {
        this.setState({isRunning: true});
    }

    handleStop = () => {
        clearInterval(this.state.intervalId);
        this.setState({isRunning: false, intervalId: null});
    }

    handleReset = () => {
        this.setState({times: 30});
    }

    componentDidUpdate(prevProps, prevState) {
        const {isRunning} = this.state;

        if(isRunning === true && prevState.isRunning === false){
            const interval = setInterval(() => {
                this.setState(
                    state => ({
                        times: state.times - 1
                    }),
                    //arrow function 相当于call back, 它会在每次setState执行完毕之后，然后执行这个function
                    () => {
                        if(this.state.times === 0){
                            clearInterval(interval);
                            this.setState({isRunning: false, intervalId: null});
                        }
                    }
                )
            }, 100);
            this.setState({intervalId: interval});
        }
    }

    render(){
        const {count, times, isRunning} = this.state;

        return<div>
            Count: {count + " "}
            <button onClick={this.handleClick}> +2 </button>
            <button style={{"margin": "10px"}} onClick={this.handleClick3}>+3 * 2 </button>
            <p></p>
            Time: {times + " "}
            {isRunning ? (
                <button style={{"margin": "5px"}} onClick={this.handleStop}>Stop</button>
            ) : (
            <button style={{"margin": "5px"}} onClick={this.handleStart}>Start</button>
            )}
            <button style={{"margin": "5px"}} onClick={this.handleReset}>Reset</button>
        </div>
    }
}

export default Count;