import {useState, useEffect} from "react"
import React from 'react'
import List from "./List"

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
    setPageIndex(Math.max(pageIndex - 1, 0));
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
