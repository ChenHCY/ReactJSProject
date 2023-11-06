import React from 'react';
import useLocalStorage from './useLocalStorage'; // 引入自定义Hook

function App() {
  const [name, setName, clearName] = useLocalStorage('name', 'Anouyname'); // 使用自定义Hook

  return (
    <div>
      <h1>Local Storage Example</h1>
      <p>Name: {name}</p>
      
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
      />

      <button onClick={clearName}>Clear Name</button>
    </div>
  );
}

export default App;