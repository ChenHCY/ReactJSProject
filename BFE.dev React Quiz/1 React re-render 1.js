import React, { useState, useEffect} from 'react'
import ReactDOM from 'react-dom'

function A() {
  console.log('A')
  return <B/>
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
      <A state={state}/>
      <D/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)

/* What does the code snippet to the right output by console.log?
Answer:
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

在此题中，parent component 中的每个 state 更改 都会 triggers触发 child components 的re-render，即使它们没有收到任何props。

==> 如果我们想要防止不必要的渲染，我们可以使用将其包在`React.memo`中。 只有当传递给它们的道具发生变化时，它们才会重新渲染。

虽然在 `memo` 包装之后，它们也将始终在修改其内部状态时呈现，但是当子组件 child componment 重新渲染时，其parent component 不会重新渲染。
*/
