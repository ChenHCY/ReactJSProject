# setState 的 async特性

setState 的asyc特性，不会立即改变变量的值 ==> 在一个function里面 的所以setState都是基于一个相同的值

setStaet 和 console.log 的区别就是 console.log会立即加入

==> 通常的setState改变量值: `setCount(count + 1) `

==> 可以使用arrow function改变变量值，每次重新读取一场这个变量值 ==> 这样可以消除async异步，形成两个setState的顺序改变变量

# fn componment useEffect()

首先因为fn componment中是不允许使用arrow function进行call back的, 所以我们使用useEffect来完成一些操作，

==》 1. componentDidMount(): componentDidMount 方法在组件首次挂载到 DOM 中时被调用。 您可以使用 useEffect 通过将空数组作为第二个参数传递给 useEffect 来执行类似的行为。 
  ==> 这将导致效果仅在安装组件时运行一次。
 
```React.js
useEffect(() => {
    // code to run when component is mounted
}, []);
```

==》2. componentDidUpdate(): 监控一些变量依赖项的改变，来执行对应的操作

```React.js
useEffect(() => {
      // code to run when component updates
}, [prop1, prop2]);
```
    
==》 3. componmentWillUmount(): setState()执行完毕之后，最后再执行的操作

```React.js
useEffect(() => {
    // code to run when component is mounted
  return () => {
    // cleanup code to run when component is unmounted
  };
}, []);
```
`return ()`: useEffect hook中的语句称为clean up 函数。 ==> 它用于在组件componment卸载 或 if-statement 依赖项数组中的依赖项更改时执行任何必要的清理或拆卸。

For Example：`return () => clearInterval(interval)`

在这个例子中， cleanup 函数清除了组件挂载时创建的interval function。 ==> 这确保在componment卸载 或  isRunning 状态从 true 变为 false 时 stop time interval。

简单来说，通过从 useEffect 钩子返回清理函数，当组件卸载或 isRunning 状态从 true 变为 false 时，React 将自动调用它。
    
```    
==> 其他重点： function() 定义在useEffect() hook中，是无法在外部进行访问的，包括在button onclick中使用
  
 ==> 所以如果要使这种function可以在外部被访问，我们需要定义在useEffect hook的外面，然后在hook中调用
```
 
# class componment call back

arrow function 相当于call back, 它会在每次setState执行完毕之后，然后执行这个function

# React-Bootstrap Modals Install Step
  Step 1: install bootstrap package: 在my-app里面 ==》 npm install react-bootstrap bootstrap
	
  Step 2: add file in index.js ==》 import 'bootstrap/dis/css/bootstrap.min.css';
  
  Step 3: 在对应的JSX file中，都要 ==》 import Modal componment and use it 
  
# onHide() in React-Bootstrap Modals
`onHide()` 是 React.js 中常用的 prop，用于处理隐藏或关闭组件或元素时的事件。它通常与模态或弹出组件结合使用。

在 React Bootstrap 中，`onHide()` 通常用于模态组件，例如<Modal>和<Popover>。

==> 当模式或弹出框关闭或隐藏时，传递给的函数onHide被调用。这对于在用户关闭模式后执行某些操作很有用，例如重置组件的状态。

# starWith() in JavaScript
The startsWith() method returns true if a string starts with a specified string.
==> Otherwise it returns false.

string.startsWith(searchValue, start) 用来判断这个string是否是以searchValue开头的, 如果是，返回true, 不是，返回false

The startsWith() method is case sensitive. ==> starWith()是区分大小写的
	
# Array.filter() in JavaScript
==> 数组过滤器

1. The filter() method creates a new array filled with elements that pass a test provided by a function.

==> 该filter()方法创建一个新数组，其中填充了通过函数提供的测试的元素。

2. The filter() method does not execute the function for empty elements.
	
==> 该filter()方法不执行空元素的功能。
	
3. The filter() method does not change the original array.

==> 该filter()方法不会更改原始数组。
