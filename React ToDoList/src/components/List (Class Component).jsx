import React from "react";

//Stateless Component 没有自己的变量的componen
class List extends React.Component{
    constructor(props){
      super(props);
    }

    render(){
        //接受上层componenet传送下来的变量
        const {list, showItemEnd, showItemStart} = this.props;

        return <ul>{
            list.slice(showItemStart, showItemEnd).map(
            (item) => <li key = {item["key-data"]}>
            {
                !item.isEditing && <div
                  key-data = {item["key-data"]}
                  style={{display: "inline", margin: "10px" }}
                  className = {item.isDone ? "completed" : "incompleted" && item.isImportant === 'important' ? "important" : "NotImportant" }
                  onClick = {(e) => this.props.handler("markedFinished", e)}
                > 
                  {item.text}
                </div>
              }
      
              {
                !item.isEditing && <button 
                key-data = {item["key-data"]}
                value = {item.text} 
                style={{display: "inline"}} 
                onClick={(e) => this.props.handler("removeItem", e)}
                >
                  Remove
                </button>
              }
      
              {
                !item.isEditing && <button 
                key-data = {item["key-data"]}
                value = {item.text} 
                style={{margin: "10px", display: "inline"}} 
                onClick={(e) => this.props.handler("editClick", e)}
                >
                  Edit
                </button>
              }
      
              {item.isEditing && <div>
                <input 
                  key-data = {item["key-data"]} 
                  value = {item.editValue} 
                  onChange={(e) => this.props.handler("editChange", e)}
                /> 
      
                <button 
                  key-data = {item["key-data"]} 
                  style = {{margin: "10px"}}  
                  onClick={(e) => this.props.handler("editConfirm", e)}
                >
                  Confirm
                </button>
                
                </div>
            }
              
            </li>
          )
        }</ul> 
    }
}

export default List;
