import './App.css';
import ToDoList from './components/ToDoList';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
  }

  render() {
    return <div>
      <ToDoList /> 
    </div>
  }
}

export default App;
