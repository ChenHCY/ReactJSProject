import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home'
import Project  from './pages/Project'
import Resume  from './pages/Resume'
import NoPage from './pages/NoPage';

//class componment
class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
 
 
  render(){
    return<div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element ={<Home/>} />
          <Route path = "/project" element = {<Project/>} />
          <Route path = "/resume" element = {<Resume/>} />
          <Route path = "*" element = {<NoPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  }
}

export default App;
