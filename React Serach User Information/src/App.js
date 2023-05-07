import './App.css';
import Search from './componment/Search'
import React from 'react';

//class componment
class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return<div>
      <Search />
    </div>
  }
}

//fn componment
const App2 = (props) => {
  return<div>
    <Search />
  </div>
}


export default App2;
