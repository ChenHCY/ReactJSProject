import data from '../data.json'
import '../App.css'
import React from "react"
import List from "./list"

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: "",
            list: [],
            startItem: 0,
            endItem: 5,
            pageIndex: 1,
            clickUser: {},
        }
    }

    //every time get the data from json file and save in a array first
    componentDidMount(){
        this.setState({list: data});
    }

    //get the input value from search bar
    inputEnter = (e) => {
        this.setState({inputValue: e.target.value});
    }

    //the button serach function
    serachUser = () => {
        const{inputValue, list} = this.state;

        const matchLsit = data.filter((matchUser) => {
            //!== -1 检查确保只有具有匹配字符串的非负索引， 才会加入到matchList中
            return matchUser.name.toLowerCase().indexOf(inputValue.toLocaleLowerCase()) !== -1;
        }); // //And test if the lowercase version of matchStates contains the lowercase version of another variable called inputValue.

        if(matchLsit.length <= 5){
            this.setState({startItem: 0, endItem: 5, pageIndex: 1});
        }
        this.setState({list: matchLsit});
    }

    resetList = () => {
        this.setState({
            inputValue: "",
            list: data,
            startItem: 0,
            endItem: 5,
            pageIndex: 1,
            clickUser: {},
        });
    }

    //click the user information
    clickUser = (e) => {
        const { list } = this.state; //接原有的list数据
        const newList = [...list]; //要保留之前的其他数据
        const item = newList.find((item) => item.id === e.target.value) //找到选择的item 进行改变
        this.setState({clickUser: item})
    }

    //remove the user infromation
    removeUser = (e) => {
        const { list } = this.state; //接原有的list数据
        const newList = [...list]; //要保留之前的其他数据
        const item = newList.find((item) => item.id === e.target.value) //找到选择的item 进行改变
        newList.splice(newList.indexOf(item), 1);
        this.setState({list: newList})
    }

    editUser = (e) => {
        const { list } = this.state; //接原有的list数据
        const newList = [...list]; //要保留之前的其他数据
        const item = newList.find((item) => item.id === e.target.value) //找到选择的item 进行改变
        const newName = prompt("Enter new name:"); //使用提示框来改变user information
        const newEmail = prompt("Enter new email:"); //使用提示框来改变user information
        if (newName && newEmail) {
          item.name = newName;
          item.email = newEmail;
          this.setState({ list: newList });
        }
    }

    handle = (handleAction, e) => {
        const { list } = this.state; //接原有的list数据
        const newList = [...list]; //要保留之前的其他数据
        const item = newList.find((item) => item.id === e.target.value) //找到选择的item 进行改变
        switch(handleAction){
            case "clickItem":
                this.setState({clickUser: item});
                break;
            case "editItem":
                const newName = prompt("Enter new name:"); //使用提示框来改变user information
                const newEmail = prompt("Enter new email:"); //使用提示框来改变user information
                if (newName && newEmail) {
                  item.name = newName;
                  item.email = newEmail;
                  this.setState({ list: newList });
                }
                break;
            case "removeItem":
                newList.splice(newList.indexOf(item), 1);
                this.setState({list: newList})
                break;
            default:
                break;
        }
    }

     //Pagination 功能, previous page feature
    previousPage = () => {
        const {startItem, endItem, pageIndex} = this.state;
        this.setState({
            startItem: Math.max(startItem - 5, 0),
            endItem: Math.max(endItem - 5, 5),
            pageIndex: Math.max(pageIndex - 1, 1)
        })
    }

    //Pagination 功能, next page feature
    nextPage = () => {
        const {list, startItem, endItem, pageIndex} = this.state;
        if(list.length <= 5){
            this.setState({
                startItem: 0,
                endItem: 5,
                pageIndex: 1,
            })
        } else if(endItem >= list.length){
            this.setState({
                startItem: list.length - 5,
                endItem: list.length,
                pageIndex: list.length / 5,
            })
        } else{
            this.setState({
                startItem: startItem + 5,
                endItem: endItem + 5,
                pageIndex: pageIndex + 1,
            })
        }
    }

    render(){
        const {inputValue, list, startItem, endItem, pageIndex, clickUser} = this.state;

        return<div className='App'>
            <h2 style = {{margin: "10px"}}> Serach User Project </h2>

            <div className='searchBox'>
                <div className='inputArea'>
                    <input style = {{width: "15rem"}} 
                    value = {inputValue}
                    onChange={this.inputEnter}
                    placeholder='Plese Enter the User name: '/>

                    <button style = {{margin: "10px"}} onClick={this.serachUser}> Serach </button>
                    <button style = {{margin: "10px"}} onClick={this.resetList}> Reset </button>
                    <p style={{"textAlign": "left"}}>User Name: {clickUser.name}</p>
                    <p style={{"textAlign": "left"}}>User Email: {clickUser.email}</p>
                    <p style={{"textAlign": "left"}}>User ID: {clickUser.id}</p>
                </div>

                <List
                    list = {list} //sent the props list to list.jsx
                    startItem = {startItem} //send the showItemStart 的访问资格到list.jsx
                    endItem = {endItem} //send the showItemEnd 的访问资格到list.jsx
                    handle = {this.handle} //传送hanler function的访问资格到list.jsx
                />
                
            </div>

            <p>
                <button style={{"margin": "10px"}} onClick={this.previousPage}>Previous Page</button>
                Page: {pageIndex}
                <button style={{"margin": "10px"}} onClick={this.nextPage}>Next Page</button>
            </p>
        </div>
    }
}

export default Search;