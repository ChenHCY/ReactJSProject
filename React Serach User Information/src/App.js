import data from './data.json';
import './App.css';
import Search from './componment/Search'
import React, { useState, useEffect } from 'react';

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


export default App;
