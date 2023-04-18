import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: "",
      showValue: ""
    }
  }

  textEnter = (e) => {
    this.setState({inputValue: e.target.value});
  }

  showInput = () => {
    this.setState({showValue: this.state.inputValue});
  }

  changeText = () => {
    this.setState({showValue: "Hello Conditates"});
  }


  render() {
    const {inputValue, showValue} = this.state;

    return <div>
      <input value={inputValue} onChange={this.textEnter}></input>
      <button onClick={this.showInput}>Show Input</button>
      <button onClick={this.changeText}>Change Text</button>

      <p>{showValue}</p>      
    </div>
  }

}

export default App;
