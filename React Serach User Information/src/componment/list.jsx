import React from "react";

class list extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: props.isOpenPro
        }
    }

    render(){
        const { list, startItem, endItem} = this.props;
     
        return(
            <div>
                <ul>{
                list.slice(startItem, endItem).map((item) => <li key = {item.id}>
                    {
                        <div key={item.id} 
                        value={item.name}
                        style={{"textAlign": "left"}}
                        >
                            {item.name}<br/>
                            {item.email}
                        </div>  
                    }

                    {
                        <button 
                        value={item.id} 
                        style={{"alignItems": "left"}}
                        onClick={(e) => this.props.handle("clickItem", e)}
                        >
                            Click
                        </button>
                    }

                    {
                         <button style = {{margin: "10px"}} 
                         value={item.id}
                         onClick={(e) => this.props.handle("editItem", e)}
                         >
                            Edit
                         </button>
                    }

                    {
                        <button style = {{margin: "10px"}} 
                        value={item.id} 
                        onClick={(e) => this.props.handle("removeItem", e)}
                        >
                         Remove
                        </button>
                    }

                 </li>
                ) 
            }</ul>
            </div>
        );
    }
}

export default list