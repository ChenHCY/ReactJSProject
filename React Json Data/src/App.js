import data from './data.json';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [jsonData, setJsonData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    setJsonData(data);
  }, []);


  const showMore = () => {
    setVisibleItems(visibleItems + 10);
  };


  return (
    <div>
      <button onClick={showMore}>Show More</button>
      {jsonData.slice(0, visibleItems).map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.email}</p>
        </div>
      ))}

    </div>
  );

}

export default App;
