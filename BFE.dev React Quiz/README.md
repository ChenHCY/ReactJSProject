# re-render in React.js

在 React 中，re-render() 是指根据 componment state 或 props 的变化更新用户界面的过程。React 使用 virtual DOM 来有效地确定 UI 的哪些部分需要更新。

默认情况下，只要componment state 或 props 发生变化，React 组件就会重新渲染。但是，React 采用各种优化技术来最大程度地减少不必要的重新渲染并提高性能。

1. `Virtual DOM Diffing`: React 执行 “diffing” 算法的过程 来识别以前和当前虚拟 DOM 表示之间的差异。

==> 它确定 UI 的哪些部分需要更新，并将必要的更改仅应用于那些特定的组件。

2. `PureComponent and React.memo`: React 提供 PureComponent()（对于class components）和 React.memo()（对于functional components）作为优化。

==> 这两个componment 会自动实现 props 的 shallow comparison浅比较，并在 props 没有改变的情况下防止重新渲染 re-render。

3. `React Hooks`: 随着 React Hooks 的引入，functional components 可以利用 useMemo() 和 useCallback()hooks 分别记忆值和函数。

==> 通过 memoize values and functions，您可以防止不必要的重新渲染。

# Shallow Comparison in React.js 

在 React.js 中，浅比较是指一种比较技术，用于确定两个对象或数组在顶层是否具有相同的值，而不深入比较嵌套元素。浅比较通常用于优化 React 组件重新渲染并避免不必要的更新。

1. `shouldComponentUpdate`: （对于class components）

shouldComponentUpdate() 在 functional components中实现浅比较，

我们可以控制componment 是否应在其 props 或 states 更改时重新渲染。

====> * 默认情况下，shouldComponentUpdate对组件的道具和状态进行浅比较。如果在顶层没有检测到变化，组件将不会重新渲染。

2. `React.memo()`: （对于functional components）

React.memo()是 higher-order component（HOC) 高阶组件, 可用于根据其 props 记忆功能组件。

它对之前和当前的 props 进行浅比较，以确定组件是否应该重新渲染。如果顶层的道具没有改变，组件就不会重新渲染。

```JavaScript
import React from 'react';

const MyComponent = React.memo((props) => {
  // Component logic here
});

export default MyComponent;
```
