import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: "",
      list: [],
      important: '',
      showItemStart: 0,
      showIntemEnd: 5,
      pageIndex: 1
    }
  }

  //function about enter input value
  inputEnter = (e) => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  //add the inputValue into total list area
  addInput = () => {
    const {inputValue, list, important} = this.state;

    const newList = [
      ...list,
      {
        text: inputValue,
        isDone: false,
        isEditing: false,
        isImportant: important,
        editVlue: "",
      }
    ]

    //if input is empty, can not add it
    if(inputValue){
      this.setState({
        inputValue: "",
        important: '',
        list: newList
      })
    }
  }

  setImportant = (e) => {
    this.setState({
      important: e.target.value,
    })
  }

  //clear all the list as empty
  clearInput = () => {
    this.setState({
      inputValue: "",
      list: []
    })
  }

  //finished button function
  handleclick = (e) => {
    const {list} = this.state; //接原有的list数据
    const newList = [...list]; //要保留之前的其他数据
    const item = newList.find((item) => item.text === e.target.innerHTML); //找到选择的item 进行改变
    item.isDone = !item.isDone;
    this.setState({list: newList});
  }

  //edit button function
  handleEdit = (e) => {
    const {list} = this.state; //接原有的list数据
    const newList = [...list]; //要保留之前的其他数据
    const item = newList.find((item) => item.text === e.target.value); //找到选择的item 进行改变
    item.isEditing = !item.isEditing;
    this.setState({list: newList});
  }

  //confirm edit button function
  handleEditChange = (e) => {
   const {list} = this.state;
   const newList = [...list];
   const item = newList.find((item) => item.text === e.target.getAttribute("key-data"));
   item.editVlue = e.target.value;
   this.setState({list: newList});
  }

  //confirm the edit value instead of previous value
  handleConfirm = (e) => {
    const {list} = this.state;
    const newList = [...list];
    const item = newList.find((item) => item.text === e.target.getAttribute("key-data"));
    item.isEditing = !item.isEditing;
    item.text = item.editVlue;
    this.setState({list: newList});
  }


  handleRemove = (e) => {
    const {list} = this.state; //接原有的list数据
    const newList = list.filter((item) => item.text !== e.target.value);
    this.setState({list: newList});
  }

  prevous = () => {
    const {showItemStart, showIntemEnd, pageIndex} = this.state;
    this.setState({
      showItemStart: showItemStart - 5,
      showIntemEnd: showIntemEnd - 5,
      pageIndex: pageIndex - 1
    })
  }

  nextpage = () =>{
    const {showItemStart, showIntemEnd, pageIndex} = this.state;
    this.setState({
      showItemStart: showItemStart + 5,
      showIntemEnd: showIntemEnd + 5,
      pageIndex: pageIndex + 1
    })
  }

  render(){
    const {inputValue, list, important, showItemStart, showIntemEnd, pageIndex} = this.state;

    return <div>
    <h2 style = {{margin: "10px"}}> Todo List Project</h2>
    <input style = {{margin: "10px", width: "15rem"}} value = {inputValue} onChange={this.inputEnter} placeholder='Plesae Enter the thing need to do: '/>
    <button onClick={this.addInput} style = {{margin: "10px"}}>Add</button> 
    <label>
      <input type='radio' value="important" checked={important === 'important'} onChange={this.setImportant} />
      Important event
    </label>

    <ul>{
      list.slice(showItemStart, showIntemEnd).map(
        (item, index) => <div>
        {
          !item.isEditing && <li
            style={{display: "inline", margin: "10px" }}
            className = {item.isDone ? "completed" : "incompleted" && item.isImportant === 'important' ? "important" : "NotImportant" }
            onClick = {this.handleclick}
          > 
            {item.text}
          </li>
        }

        {
          !item.isEditing && <button value = {item.text} style={{display: "inline"}} onClick={this.handleRemove}>Remove</button>
        }

        {
          !item.isEditing && <button value = {item.text} style={{margin: "10px", display: "inline"}} onClick={this.handleEdit}>Edit</button>
        }

        {item.isEditing && <dib>
          <input key-data = {item.text} value = {item.editVlue} onChange={this.handleEditChange}/> 
          <button key-data = {item.text} style = {{margin: "10px"}}  onClick={this.handleConfirm}>Confirm</button>
          </dib>
        }
        
      </div>
    )
    }</ul> 

    <p>
    <button style = {{margin: "10px"}} onClick={this.prevous}>Pervious Page </button>
     Page: {pageIndex} 
    <button style = {{margin: "10px"}} onClick={this.nextpage}>Next Page</button>
    </p>
    <button style = {{margin: "10px"}}  onClick={this.clearInput}>Clear</button>
    </div>
  }
}


export default App;
