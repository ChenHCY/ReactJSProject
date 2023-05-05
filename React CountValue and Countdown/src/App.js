import './App.css';
import ToDoList from './components/ToDoList';
import Count from "./components/Count"
import CountDown from "./components/countDown"
import HOC from "./components/HOC"
import React, {useState} from 'react';

//class componment
class App extends React.Component{
  constructor(props){
    super(props)
  }

  NewComponment = HOC(Count) //HOC: High Order Componment

  render() {
    return <div>
      <ToDoList /> 
      <br/>
      <Count />
      <br/>
      <CountDown />
      <br />
      <this.NewComponment/> 
    </div>
  }
}

//fn componment
const App2 = (props) => {

  //渲染组件的语法应该使用以大写字母开头的组件名称
  const NewComponment = HOC(Count) //HOC: High Order Componment

  return <div>
       <ToDoList /> 
      <br/>
      <Count />
      <br/>
      <CountDown />
      <br />
      <NewComponment /> 
  </div>
}

export default App2;
