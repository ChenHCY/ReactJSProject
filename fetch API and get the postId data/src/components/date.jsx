import React, { useState } from "react";

const Date = () => {
    const [inputId, setInputId] = new useState("");
    const [userObj, setUserObj] = new useState([]);

    // 拿到search bar里面的输入
    const handleInput = (e) => {
        setInputId(() => e.target.value);
    }

    // 使用输入的string, 从API里面查找到对应的date
    // 然后得到这个date对应的数据
    const searchUserIdPost = () => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${inputId}`)
        .then((response) => {
            if(!response.ok){
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then((data) => {
            setUserObj(data);            
        }).catch((error) => {
            console.error('Error fetching data:', error);        
        })
    }


    return(
        <div className="App">
            <input type="text" style={{margin: "10px"}} value={inputId} onChange={handleInput}/>
            <button onClick={ searchUserIdPost }>Search</button>

            {/*如果没找到对应date, 输出报错信息 */}
            <div style={{marginLeft: "35vw", "textAlign": "left"}}>
                <ul>
                { userObj ? ( userObj.map((item) => <li key = {item.id}>
                    Post Id: {item.postId} <br/>
                    ID: {item.id} <br/>
                    name: {item.name} <br/>
                    email: {item.email} <br/>
                </li>)) : "Can not find this User ID"
                }</ul>
            </div>
        </div>
    );

}

export default Date;