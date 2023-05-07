import data from '../data.json'
import '../App.css'
import React from "react"
import List from "./list"
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

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
            editUser: {},
            isOpenPro: false, //used for edit modal open 
            addModal: false, //used for add user modal open
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
        const{inputValue} = this.state;

        const matchLsit = data.filter((matchUser) => {
            //!== -1 检查确保只有具有匹配字符串的非负索引， 才会加入到matchList中
            return matchUser.name.toLowerCase().indexOf(inputValue.toLocaleLowerCase()) !== -1;
        }); // //And test if the lowercase version of matchStates contains the lowercase version of another variable called inputValue.

        if(matchLsit.length <= 5){
            this.setState({startItem: 0, endItem: 5, pageIndex: 1});
        }
        this.setState({list: matchLsit});
    }

    clearInfor = () => {
        this.setState({
            inputValue: "",
            startItem: 0,
            endItem: 5,
            pageIndex: 1,
            clickUser: {},
        });
    }

    resetList = () => {
        this.setState({
            list: data
        })
    }

    openModal = () => {
        this.setState({isOpenPro: true});
    }

    closedModal = () => {
        this.setState({isOpenPro: false});
    }

    handle = (handleAction, e) => {
        const { list } = this.state; //接原有的list数据
        const newList = [...list]; //要保留之前的其他数据
        const choosedUser = newList.find((item) => item.id === e.target.value) //找到选择的item 进行改变
        switch(handleAction){
            case "clickItem":
                this.setState({clickUser: choosedUser});
                break;
            case "editItem":
                this.setState({editUser: choosedUser});
                this.openModal();
                break;
            case "removeItem":
                newList.splice(newList.indexOf(choosedUser), 1);
                this.setState({list: newList})
                break;
            default:
                break;
        }
    }

    //save the edit information function
    saveEditUserInfor = () => {
        const {list, editUser} = this.state;
        const newList = [...list];
        const itemUser = newList.find((item) => item.id === editUser.id); //找到选定更改的user index值
        const newName = document.getElementById("nameInput").value;
        const newEmail = document.getElementById("emailInput").value;
        const newId = document.getElementById("idInput").value;
        if(newName && newEmail){
            itemUser.name = newName;
            itemUser.email = newEmail;
            itemUser.id = newId;
            this.closedModal();
        }
        this.setState({list: newList, editUser: {}});
    }

    //control open the add modal windows
    openAddmodal = () => {
        //console.log(1);
        this.setState({addModal: true});
    }

    //control closed the modal windows
    closedAddmodal = () =>{
        this.setState({addModal: false});
    }

    //save the add user information function
    saveAddUserInfor = () => {
        const { list } = this.state;
        const userName = document.getElementById("addName").value;
        const userEmail = document.getElementById("addEmail").value;
        const userId = document.getElementById("addId").value;
        if(userName && userEmail && userId){
            const newList = [
                ...list,
                {
                    "name": userName,
                    "email": userEmail,
                    "id": userId
                }
            ];
            this.setState({list: newList});
            this.closedAddmodal();
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
        const {inputValue, list, startItem, endItem, pageIndex, clickUser, editUser, isOpenPro, addModal} = this.state;

        return<div className='App'>
            <h2 style = {{margin: "10px"}}> Serach User Project </h2>

            <div className='searchBox'>
                <div className='inputArea'>
                    <input style = {{width: "15rem"}} 
                    value = {inputValue}
                    onChange={this.inputEnter}
                    placeholder='Plese Enter the User name: '/>

                    <button style = {{margin: "5px"}} onClick={this.serachUser}> Serach </button>
                    <button style = {{margin: "5px"}} onClick={this.clearInfor}> Clear </button>
                    <button style = {{margin: "5px"}} onClick={this.resetList}> Reset Data </button>
                    <button style = {{margin: "5px"}} onClick={this.openAddmodal}> Add New User </button>
                    <p style={{marginTop: "10px", "textAlign": "left"}}>User Name: {clickUser.name}</p>
                    <p style={{"textAlign": "left"}}>User Email: {clickUser.email}</p>
                    <p style={{"textAlign": "left"}}>User ID: {clickUser.id}</p>
                </div>
                <List
                    list = {list} //sent the props list to list.jsx
                    editUser = {editUser} //sent the props edituser to list.jsx
                    startItem = {startItem} //send the showItemStart 的访问资格到list.jsx
                    endItem = {endItem} //send the showItemEnd 的访问资格到list.jsx
                    handle = {this.handle} //传送hanler function的访问资格到list.jsx
                />
                
                <Modal show = {isOpenPro} onHide = {this.closedModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit User Information</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <label>User Name:</label>
                        <input type="text" style={{"margin": "10px"}} id="nameInput"/>
                        <p></p>
                        <label>User Email:</label>
                        <input type="email" style={{"margin": "10px"}} id="emailInput"/>
                        <p></p>
                        <label>User ID:</label>
                        <input type="id" style={{"margin": "10px"}} id="idInput"/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closedModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.saveEditUserInfor}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>


                <Modal show = {addModal} onHide={this.closedAddmodal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New User Information</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <label>User Name: </label>
                        <input type = "text" style={{"margin": "10px"}} id="addName"/>
                        <p></p>
                        <label>User Email: </label>
                        <input type = "email" style={{"margin": "10px"}} id="addEmail"/>
                        <p></p>
                        <label>User ID: </label>
                        <input type = "id" style={{"margin": "10px"}} id="addId"/>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant='secondary' onClick={this.closedAddmodal}>
                            Close
                        </Button>
                        <Button variant='primary' onClick={this.saveAddUserInfor}>
                            Add
                        </Button>
                    </Modal.Footer>
                </Modal>
                
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