import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

function A({ children }) {
  console.log('A')
  return children
}

function B() {
  console.log('B')
  return <C/>
}

function C() {
  console.log('C')
  return null
}

function D() {
  console.log('D')
  return null
}

function App() {
  const [state, setState] = useState(0)
  useEffect(() => {
    setState(state => state + 1)
  }, [])
  console.log('App')
  return (
    <div>
      <A><B/></A>
      <D/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
 
// Question:  What does the code snippet to the right output by console.log?
// Answer:
"App"
"A"
"B"
"C"
"D"
"App"
"A"
"B"
"C"
"D"
            
/*解释： 

In JS, B is a function. B() will only evaluate when we call it. 在 JS 中，B 是一个函数。 B 只会在我们调用它时进行评估

We are passing the B function in A. It will pass without running.

When we return children react will execute the B.
 
*/       
