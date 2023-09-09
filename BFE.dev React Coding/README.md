# useRef() Hook in React.js
**定义**：用于创建对 DOM element tree 的可变引用或可变容器，用于保存跨渲染持续存在的值，而不会在值更改时导致重新渲染。 它对于与 DOM 交互或跟踪不应触发重新渲染的值特别有用。

==> 用于保存一个指定的值，保证这个值发生改变时，“不会” 重新 re-render渲染
```JavaScript
import React, { useRef, useState } from 'react';

function MyComponent() {
  const renderCount = useRef(0);
  const [state, setState] = useState(0);

  /*React 不会重新渲染 基于 .current 属性更改的组件。*/
  renderCount.current++; // This value won't trigger re-renders

  return (
    <div>
      <p>Render count: {renderCount.current}</p> 
      <button onClick={() => setState(state + 1)}>Increment State</button>
    </div>
  );
}

//Out put:
Render count: 1
```
**解释**： renderCount.current++ 将 renderCount 中存储的值增加 1。但是renderCount 值的这种变化不会触发重新渲染，因为修改 ref 对象（renderCount）具有 .current 属性。


# useRef() .current 属性 in React.js
**定义**： 使用 useRef 创建的 ref 对象的 .current 属性用于访问和存储在渲染过程中持续存在的 mutable values 可变值，而不会在值更改时导致重新渲染

==> 它本质上是一种维护状态信息的方法，在更新时不会触发组件重新渲染

**工作原理**
1. Accessing Mutable Values 访问可变值：
   
使用 .current 属性在组件代码中的任何位置访问存储在 ref 中的值。**允许您读取和修改该值，而不会导致组件重新渲染**。

```JavaScript
import React, { useRef } from 'react';

function MyComponent() {
  const myRef = useRef(initialValue);

  // Access the value stored in myRef
  const storedValue = myRef.current;

  // Modify the value stored in myRef
  myRef.current = newValue;

  return <div>{storedValue}</div>;
}
```

2. Persistence Across Renders 跨渲染的持久性:

存储在 `.current` 中的值在 component 组件的 re-render重新渲染中仍然存在。 即使 component 由于 state 或 prop更改而重新渲染，`.current` 中的值仍然保持不变，除非您显式更新它。

3. Avoiding Re-renders 避免重新渲染

`.current` **的主要用例之一是存储更改时不需要触发重新渲染的值**
```JavaScript
import React, { useRef } from 'react';

function MyComponent() {
  const renderCount = useRef(0);

  // The value in renderCount.current persists across renders
  renderCount.current++;

  return <div>Render count: {renderCount.current}</div>;
}
```

