import './App.css';
import React, { useState } from 'react';

function App() {
  const [num, setNum] = useState(0);
  const [res, setRes] = useState(0);
  
  const handleInput = (e) => {
    setNum(num => num = e.target.value);
  }

  const handleRest = () => {
    setNum(0);
    setRes(0);
  }

  const fibfn = (num) => {
    num = parseInt(num, 10);
    setRes(fibonacci(num));
  }

  const fibonacci = (n) => {
    if(n === 0 || n === 1){
      return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
  }
 
  return (
    <div className="App">
     <input type="text" style={{margin: "10px"}} value={num} onChange={handleInput}/>

     <button onClick={() => fibfn(num)}>Fib Result</button>
     <button onClick={handleRest}>Fib Result</button>

      <div>
        The fibonacci Result is {res}
      </div>
    </div>
  );
}

export default App;
