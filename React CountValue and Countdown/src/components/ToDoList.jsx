import {useState, useEffect} from "react"
import React from 'react'
import List from "./List"

class ToDoList extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        inputValue: "",
        list: [],
        important: '',
        showItemStart: 0,
        showItemEnd: 5,
        pageIndex: 1
      }
    }
  
    //function about enter input value
    inputEnter = (e) => {
      this.setState({
        inputValue: e.target.value,
      })
    }
  
    //used to set this thing is important
    setImportant = (e) => {
      this.setState({
        important: e.target.value,
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
          "key-data": inputValue + Math.random() //用来明确删除或者需要修改的item
        }
      ]
  
      //if finished the input, clear the input text and important radio button
      //also can use for refused to add empty inputValue
      if(inputValue){
        this.setState({
          inputValue: "",
          important: '',
          list: newList
        })
      }
    }
  
    //clear all the list as empty
    clearInput = () => {
      this.setState({
        inputValue: "",
        list: [],
        important: '',
        pageIndex: 1,
        showItemStart: 0,
        showItemEnd: 5
      })
    }

    //remove feature and eidt item feature
    handler = (handlerAction, e) => {
      const { list } = this.state; //接原有的list数据
      const newList = [...list]; //要保留之前的其他数据
      const item = newList.find((item) => item["key-data"] === e.target.getAttribute("key-data")) //找到选择的item 进行改变
    
      switch(handlerAction) {
        case "markedFinished":
          item.isDone = !item.isDone;
          break;
        case "editClick":
          item.isEditing = !item.isEditing;
          break;
        case "editChange":
          item.editValue = e.target.value
          break;
        case "editConfirm":
          item.isEditing = !item.isEditing;
          item.text = item.editValue;
          break;
        case "removeItem":
          newList.splice(newList.indexOf(item), 1); //删除选中的item
          break;
        default:
          break;
      }
      this.setState({list: newList});
    }
  
    //Pagination 功能, previous page feature
    previous = () => {
      const {showItemStart, showItemEnd, pageIndex} = this.state;
      this.setState({
        showItemStart: Math.max(showItemStart - 5, 0),
        showItemEnd: Math.max(showItemEnd - 5, 5),
        pageIndex: Math.max(pageIndex - 1, 1)
      })
    }
  
    //Pagination 功能, next page feature
    nextpage = () =>{
      const {list, showItemStart, showItemEnd, pageIndex} = this.state;
  
      if(list.length <= 5){
        this.setState({
          showItemStart: 0,
          showItemEnd: 5,
          pageIndex: 1
        })
      } else{
        this.setState({
          showItemStart: showItemStart + 5,
          showItemEnd: showItemEnd + 5,
          pageIndex: pageIndex + 1,
        })
      }
    }
  
    render(){
      const {inputValue, list, important, showItemStart, showItemEnd, pageIndex} = this.state;
  
      return <div>
      <h2 style = {{margin: "10px"}}> Todo List Project </h2>
      
      <input style = {{margin: "10px", width: "15rem"}} 
      value = {inputValue} 
      onChange={this.inputEnter} 
      placeholder='Plesae Enter the thing need to do: '/>
      
      <button onClick={this.addInput} style = {{margin: "10px"}}>Add</button> 
      
      <label>
        <input type='radio' value="important" checked={important === 'important'} onChange={this.setImportant} />
        Important event
      </label>

    
      <List 
        list = {list} //sent the props list to list.jsx
        showItemStart = {showItemStart} //send the showItemStart 的访问资格到list.jsx
        showItemEnd = {showItemEnd} //send the showItemEnd 的访问资格到list.jsx
        pageIndex = {pageIndex} //send the pageIndex 的访问资格到list.jsx
        handler = {this.handler}  //传送hanler function的访问资格到list.jsx
      /> 


      <p>
      <button style = {{margin: "10px"}} onClick={this.previous}>Pervious Page </button>
       Page Index: {pageIndex} 
      <button style = {{margin: "10px"}} onClick={this.nextpage}>Next Page</button>
      </p>
      <button style = {{margin: "10px"}}  onClick={this.clearInput}>Clear</button>
      </div>
    }
}

// The function Component
const ToDoList2 = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);
  const [important, setImportant] = useState('');
  const [pageIndex, setPageIndex] = useState(1);
  const [showItemStart, setShowItemStart] = useState(0);
  const [showItemEnd, setShowItemEnd] = useState(5);

  //Input bar function: enter the string input value 
  const inputEnter = (e) => {
    setInputValue(e.target.value);
  }

  //used to set this thing is important
  const radioImportant = (e) => {
    setImportant(e.target.value);
  }

   //add the inputValue into total list area
  const handleAdd = () => {
    const newList = [
      ...list,
      {
        text: inputValue,
        isDone: false,
        isEditing: false,
        isImportant: important,
        editValue: "",
        "key-data": inputValue + Math.random()
      }
    ]

    //if finished the input, clear the input text and important radio button
    //also can use for refused to add empty inputValue
    if(inputValue){
      setList(newList);
      setInputValue("");
      setImportant('');
    }
  }

  //clear all the list as empty, and all feature
  const hanleClear = () =>{
    setList([]);
    setInputValue("");
    setImportant('');
    setPageIndex(1);
    setShowItemStart(0);
    setShowItemEnd(0);
  }

   //remove feature and eidt item feature
  const handler = (handlerKey, e) => {
    const newList = [...list];//首先创建一个new list 然后保留原list所以number
    const item = newList.find((item) => item["key-data"] === e.target.getAttribute("key-data"));
    switch(handlerKey){
      case "markedFinished":
        item.isDone = !item.isDone;
        break;
      case "editClick":
        item.isEditing = !item.isEditing;
        break;
      case "editChange":
        item.editValue = e.target.value;
        break;
      case "editConfirm":
        item.text = item.editValue;
        item.isEditing = !item.isEditing;
        break;
      case "removeItem":
        newList.splice(newList.indexOf(item), 1);
        break;
      default:
        break;
    }
    setList(newList);
  }

  const previous = () => {
    setShowItemStart(Math.max(showItemStart - 5, 0));
    setShowItemEnd(Math.max(showItemEnd - 5, 5));
    setPageIndex(Math.max(pageIndex - 1, 1));
  }

  const nextPage = () => {
    if(list.length <= 5){
      setShowItemStart(0);
      setShowItemEnd(5);
      setPageIndex(1);
    } else{
      setShowItemStart(showItemStart + 5);
      setShowItemEnd(showItemEnd + 5);
      setPageIndex(pageIndex + 1);
    }
  }


  return <div>
    <h2 style={{margin: "10px"}}> ToDo List Project </h2>
    <input style = {{margin: "10px", width: "15rem"}} value = {inputValue} onChange={inputEnter} placeholder='Plesae Enter the thing need to do: '/>
    <button onClick={handleAdd} style={{margin: "10px"}}> Add </button>
    <label>
      <input type='radio' value="important" checked={important === 'important'} onChange={radioImportant} />
        Important Item
    </label>

    <List
        list = {list} //sent the props list to list.jsx
        showItemStart = {showItemStart} //send the showItemStart 的访问资格到list.jsx
        showItemEnd = {showItemEnd} //send the showItemEnd 的访问资格到list.jsx
        pageIndex = {pageIndex} //send the pageIndex 的访问资格到list.jsx
        handler = {handler}  //传送hanler function的访问资格到list.jsx
    />

    <p>
    <button style = {{margin: "10px"}} onClick={previous}>Pervious Page </button>
    Page Index: {pageIndex} 
    <button style = {{margin: "10px"}} onClick={nextPage}>Next Page</button>
    </p>
    <button style = {{margin: "10px"}}  onClick={hanleClear}>Clear</button>

  </div>

}

export default ToDoList2;
