import React from "react";
import { useState, useEffect } from "react";

//fn componment
const NewComp = () => {
    const [times, setTimes] = useState(30);
    const [toggle, setToggle] = useState(false);

    //首先因为fn componment中是不允许使用arrow function进行call back的
    //必须要使用useEffect来完成一些操作，比如componmentWillUmount(), setState()执行完毕之后，最后再执行的操作

    //重点： 如果 function() 定义在useEffect() hook中，是无法在外部进行访问的，包括在button onclick中使用
    //所以如果要使这种function可以在外部被访问，我们需要定义在useEffect hook的外面，然后在hook中调用

    const handleStart = () => {
        setToggle(true);
    }

    const handleStop = () => {
        setToggle(false);
    }

    const handleReset = () => {
        setTimes(30);
    }

     /* return () => clearInterval(interval); useEffect hook中的语句称为clean up 函数。 
    它用于在组件componment卸载 或 if-statement 依赖项数组中的依赖项更改时执行任何必要的清理或拆卸。

    在这个具体的例子中，cleanup 函数清除了组件挂载时创建的interval function。 
    ==> 这确保在componment卸载 或  isRunning 状态从 true 变为 false 时stop time interval。

    简单来说，通过从 useEffect 钩子返回清理函数，当组件卸载或 isRunning 状态从 true 变为 false 时，
    React 将自动调用它。
    */ 

    //这个useEffect相当于componmentDidUpdate()，监控变量值toggle的改变
    //然后根据依赖项的改变，生成新的效果
    //第一次toggle是false, 所以是属于componmentDidMount()
    useEffect(() => {
        let intervalId;
        if(toggle === true){
            intervalId = setInterval(() => {
                setTimes(times => {
                    times -= 1;
                    if(times === 0){
                        clearInterval(intervalId);
                    }
                    return times;
                });
            }, 100);
        }
        
        //相当于call back,，当组件卸载或 isRunning 状态从 true 变为 false 时，React 将自动调用它。
        return() => {
            console.log(intervalId); //当这个组件被卸载的时候，才会打印
            clearInterval(intervalId);
        }
    }, [toggle]);


    return<div>
        CountDown Time: {times + " "}
        {!toggle ? (
            <button style={{"margin": "5px"}} onClick={handleStart}>Start</button>
        ) : (
            <button style={{"margin": "5px"}} onClick={handleStop}>Stop</button>
        )}
        <button style={{"margin": "5px"}} onClick={handleReset}>Reset</button>
    </div>
}


//class componment
class NewComp2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            times: 30,
            toggle: false,
            intervalId: null
        }
    }

    handleStart = () => {
        this.setState({toggle: true});
    }

    handleStop = () => {
        clearInterval(this.state.intervalId);
        this.setState({toggle: false, intervalId: null});
    }

    handleReset = () => {
        this.setState({times: 30});
    }

    componentDidUpdate(prevProps, prevState){
        const {toggle} = this.state;
        if(toggle === true && prevState.toggle === false){
            const interval = setInterval(() => {
                this.setState(
                    state => ({
                        times: state.times -= 1
                    }),
                    //user arrow function 实现 call back效果
                    //它会在每次setState执行完毕之后，然后执行这个function
                    () => {
                        if(this.state.times === 0){
                            clearInterval(interval);
                            this.state({toggle: false, intervalId: null});
                        }
                    }
                )
            }, 100);
            this.setState({intervalId: interval});
        }
    }


    render(){
        const {times, toggle} = this.state; 

        return<div>
            CountDown Time: {times + " "}
            {toggle ? (
                <button style={{"margin": "5px"}} onClick= {this.handleStop}>Stop</button>
                ) : (
                <button style={{"margin": "5px"}} onClick={this.handleStart}>Start</button>
            )}
             <button style={{"margin": "5px"}} onClick={this.handleReset}>Reset</button>
        </div>
    }
} 

export default NewComp;