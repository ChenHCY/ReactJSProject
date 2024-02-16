import React from "react";
import List from './List'
import { useState } from "react";

const ToDoList = () => {
    const [inputEvent, setInputEvent] = useState('');
    const [list, setList] = useState([]);
    const [important, setImportant] = useState(false);
    const [pageIndex, setPageIndex] = useState(1);
    const [startItem, setStartItem] = useState(0);
    const [endItem, setEndItem] = useState(5);

    // 输入的字符串作为item
    const handleEnter = (e) => {
        setInputEvent(e.target.value);
    }

    //把输入的事件加入到list
    const handleAdd = () => {
        const newList = [
            ...list,
            {
               text: inputEvent,
               isDone: false,
               isEditing: false,
               isImportant: important,
               editValue: '',
               "key-data": inputEvent + Math.random()
            }
        ];

        //if finished the input, clear the input text and important radio button
        //also can use for refused to add empty inputValue
        if(inputEvent){
            setList(newList); //把new list赋值给旧的list
            setInputEvent('');
            setImportant(false);
        }
    }

    //选择是否是important
    const radioInput = () => {
        setImportant(!important);
    }

    const handleClear = () => {
        setInputEvent("");
        setList([]);
        setImportant(false);
        setPageIndex(1);
        setStartItem(0);
        setEndItem(5);
    }

    //function: finished, edit, removed
    const handle = (handleKey, e) => {
        const newList = [...list];
        const currItem = newList.find((item) => item["key-data"] === e.target.getAttribute("key-data"));
        switch(handleKey){
            case "markFinished":
                currItem.isDone = !currItem.isDone;
                break;
            case "removedItem":
                newList.splice(newList.indexOf(currItem), 1); //在需要删除的item的index位置，删除一个元素
                break;
            case "editItem":
                currItem.isEditing = !currItem.isEditing;
                break;
            case "editChange":
                currItem.editValue = e.target.value;
                break;
            case "editConfirm":
                currItem.text = currItem.editValue;
                currItem.isEditing = !currItem.isEditing;
                break;
            default:
                break;
        }
        setList(newList);
    }

    const previousPage = () =>{
        setStartItem(Math.max(0, startItem - 5));
        setEndItem(Math.max(5, endItem - 5));
        setPageIndex(Math.max(1, pageIndex - 1));
    }

    const nextPage = () => {
        if(list.length < 5){
            setStartItem(0);
            setEndItem(5);
            setPageIndex(1);
        } else if(startItem < list.length && endItem < list.length){
            setStartItem(startItem + 5);
            setEndItem(endItem + 5);
            setPageIndex(pageIndex + 1);
        } else{
            setStartItem(startItem);
            setEndItem(endItem);
            setPageIndex(pageIndex);
        }
    }

    return <div>
        <h2> To Do List Project </h2>
        <input style = {{margin: "10px", width: "20rem", fontSize: "20px"}} type="text" value={inputEvent} onChange={handleEnter} placeholder='Plesae Enter the thing need to do: '></input>
        <button onClick={handleAdd} style={{margin: "10px"}}> Add </button>
        <button onClick={handleClear} style={{margin: "10px"}}> Clear </button>
        <label>
            <input type='checkbox' checked={important} onChange={radioInput} /> 
            Important Item
        </label>
        
        <List
            list = {list}
            startItem = {startItem}
            endItem = {endItem}
            handle = {handle}
            nextPage = {nextPage}
            pageIndex = {pageIndex}
            previousPage = {previousPage}
        />
        
    </div>
}

export default ToDoList
