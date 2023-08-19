/* BFE.dev 1. the React Counter app

As the first React problem, you are asked to create the famous Counter app.

counter starts from 0.
click the '+' button to increment.
click the '-' button to decrement.

*/

import React from 'react'
import {useState, useEffect} from "react"

export function App() {
  const [num, setNum] = useState(0);

  const addOne = () =>{
    setNum(num => num + 1);
  }

  const minusOne = () => {
    setNum(num => num - 1);
  }

  return (
    <div>
      <button onClick = {minusOne} data-testid="decrement-button">-</button>
      <button onClick = {addOne} data-testid="increment-button">+</button>
      <p>clicked: {num}</p>
    </div>
  )
}
