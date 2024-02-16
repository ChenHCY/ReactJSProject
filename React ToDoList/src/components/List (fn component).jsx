import React from "react";

const List = (props) => {

    const {list, startItem, endItem, pageIndex, handle, previousPage, nextPage} = props;
    
    return (
        <div className="Table">
        <ul>{
            list.slice(startItem, endItem).map(
                (item) => <li key = {item["key-data"]}>
                    { 
                        !item.isEditing && <div
                            key-data = {item["key-data"]}
                            style={{display: "inline", margin: "10px" }}
                            className = {item.isDone ? "completed" : "incompleted" && item.isImportant ? "important" : "NotImportant"}
                            onClick={(e) => handle("markFinished", e)}
                        >
                            {item.text}
                        </div>
                    }

                    {
                        !item.isEditing && <button
                            key-data = {item["key-data"]}
                            value = {item.text} 
                            style={{display: "inline"}} 
                            onClick={(e) => handle("removedItem", e)}
                        >
                         Remove
                        </button>
                    }

                    {
                        !item.isEditing && <button
                            key-data = {item["key-data"]}
                            value = {item.text} 
                            style={{margin: "10px", display: "inline"}} 
                            onClick={(e) => handle("editItem", e)}
                        >
                        Edit
                        </button>
                    }

                    {
                        item.isEditing && <div>
                            <input type="text"
                                key-data = {item["key-data"]}
                                value = {item.editValue} 
                                onChange={(e) => handle("editChange", e)}
                            />

                            <button 
                                key-data = {item["key-data"]}
                                style = {{margin: "10px"}} 
                                onClick={(e) => handle("editConfirm", e)}
                            >
                            Confirm
                            </button>
                        </div>
                    }
                </li>
            )
        }</ul>

        <div>
            <button onClick={previousPage} style={{margin: "10px"}}>Previous</button> 
            {pageIndex}
            <button onClick={nextPage} style={{margin: "10px"}}>Next</button>
        </div>
    </div>
    )
}

export default List;
