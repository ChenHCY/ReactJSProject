import { useState, useEffect } from "react";
import React from 'react'

const Count = () => {
    const [count, setCount] = useState(0);
    const [times, setTimes] = useState(30);

    //setState 的asyc特性，不会立即改变变量的值
    //setStaet 和 console.log 的区别就是 console.log会立即加入
    //在一个function里面 的所以setState都是基于一个相同的值
    const handleClick1 = () => {
        //通常的setState改变量值
        //setCount(count + 1) 
        //使用call back function 改变变量值，可以形成两个setState的顺序改变变量
        console.log(1, count)
        setCount(count => count + 1);
        console.log(2, count)
        setCount(count => {console.log("before setState", count); return count + 1});
    }


    //beacuse in the fn componment, the react hook did not allowed have call back method
    //so it will used the useEffect
    const handleClick2 = () => {
        console.log(1, count)
        setCount(count => count + 1);
        console.log(2, count)
        
        setCount(count => count + 1);

        setCount(count => {
            console.log("before setState", count); 
            return count + 1
        });
    }

    const hanleTime = () => {
        const interval = setInterval(() => {
            setTimes(times => {
                times -= 1;
                if(times === 0){
                    clearInterval(interval); //当倒计时结束后，卸载interval
                }
                return times;
            })
        }, 100);
    }

    const handleReset = () => {
        setTimes(30);
    }

    return <div>
        Count: {count + " "}
        <button onClick={handleClick1}>+2</button>
        <button onClick={handleClick2}>+3</button>
        <br/>
        <p></p>
        Time: {times + " "}
        <button style = {{"margin": "10px"}} onClick={hanleTime}>Start</button>
        <button onClick={handleReset}>Reset</button>
    </div>
}

class Count2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            times: 30
        }
    }

    
    //setState 的asyc特性，不会立即改变变量的值
    //setStaet 和 console.log 的区别就是 console.log会立即加入
    //在一个function里面 的所以setState都是基于一个相同的值
    handleClick = () => {
        //通常的setState改变量值
        //setCount(count + 1) 
        //使用call back function 改变变量值，可以形成两个setState的顺序改变变量
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
            () => {
                console.log(this.state.count) //this is means "call back"
                //it will print after the setState() finished changed variable value
            }
        )
    }


    handleTime = () => {
        const interval = setInterval(() => {
            this.setState(
                state => ({
                    times: state.times - 1
                }),
                () => {
                    if(this.state.times === 0){
                        clearInterval(interval);
                    }
                }
            )
        }, 100);
    }

    handleReset = () => {
        this.setState({times: 30});
    }

    render(){
        const {count, times} = this.state;

        return<div>
            Count: {count + " "}
            <button onClick={this.handleClick}> +2 </button>
            <button style={{"margin": "10px"}} onClick={this.handleClick3}>+3 </button>
            <p></p>
            Time: {times + " "}
            <button onClick={this.handleTime}>Start</button>
            <button style={{"margin": "10px"}} onClick={this.handleReset}>Reset</button>
        </div>
    }
}

export default Count2;