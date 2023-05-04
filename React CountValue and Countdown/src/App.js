import './App.css';
import ToDoList from './components/ToDoList';
import Count from "./components/Count"
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return <div>
      <ToDoList /> 
      <br/>
      <Count />
    </div>
  }
}

export default App;
