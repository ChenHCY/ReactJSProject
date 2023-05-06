import React from "react";

class list extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {list, startItem, endItem} = this.props
        return<div>
            {list.slice(startItem, endItem).map(
                (item) => (
                    <div key={item.id} value={item.name}>
                        <p style={{"textAlign": "left"}}>{item.name}</p>
                        <p style={{"textAlign": "left"}} >{item.email}</p>
                                        
                        <button 
                        value={item.id} 
                        onClick={(e) => this.props.handle("clickItem", e)}
                        >
                            Click
                        </button>
                
                        <button style = {{margin: "10px"}} 
                        value={item.id}
                        onClick={(e) => this.props.handle("editItem", e)}
                        >
                            Edit
                        </button>
                
                        <button style = {{margin: "10px"}} 
                        value={item.id} 
                        onClick={(e) => this.props.handle("removeItem", e)}
                        >
                            Remove
                        </button>
                    </div>
                 ))
            }  
        </div>
    }
}

export default list