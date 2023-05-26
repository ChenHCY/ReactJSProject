import React, { useState, useEffect, memo } from 'react'
import ReactDOM from 'react-dom'

function A() {
  console.log('A')
  return <B/>
}

const B = memo(() => {
  console.log('B')
  return <C/>
})

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
      <A state={state}/>
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
"D"
            
/*解释： 在 React 中，re-render() 是指根据 componment's states 或 props 的变化更新用户界面的过程。React 使用 virtual DOM 来有效地确定 UI 的哪些部分需要更新。
            
 React.memo()：会自动实现 props 的 shallow comparison 浅比较，并在 props 没有改变的情况下防止重新渲染 re-render()
 
 React.memo() componment 用于根据其 props 记忆功能组件。它对之前和当前的 props 进行浅比较，以确定组件是否应该重新渲染。如果顶层的道具没有改变，组件就不会重新渲染。
 
 这意味着如果作为 prop 或 state 引用传递的对象或数组在render()之间保持相同，React 会假定其内容没有改变并避免重新渲染组件。
 
*/       
