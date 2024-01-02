import './App.css';
import React, { useState } from 'react';
import axios from 'axios'; // 引入axios接口

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const hanleAsync = async () => {
    try{
      setLoading(true); //进入Loading状态

      //开始async任务，提取data
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      
      //把提取的数据储存进data[]
      setData(response.data);
      setError(null); //没有错误
    } catch (error){ //报错误
      setData(null); 
      setError(error.message || 'There is an error happened')
    } finally { //重置流程
      setLoading(false); 
    }
  }

  const hanleRenew = () => {
    setData(null);
    setError(null);
    setLoading(false);
  }

  return (
    <div className="App">
      <button  style={{margin: "10px"}} onClick={hanleAsync} >
        {loading ? 'Loading...' : 'Click me'}
      </button>

      <button  style={{margin: "10px"}} onClick={hanleRenew}>Renew Data</button>


      <div>
        {/*首先判断是否异步任务成功, 然后渲染数据*/}
        {data && <div>Data: {JSON.stringify(data)}</div>}
        {/*检查error报错*/}
        {error && <div>Error: {error}</div>}
      </div>

    </div>
  );
}

export default App;
