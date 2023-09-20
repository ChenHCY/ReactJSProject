/* Create a Redux Store

Redux 是一个state管理框架，可与多种不同的 Web 技术一起使用，包括 React。

在 Redux 中，有一个state 对象负责应用程序的整个state。

这意味着如果您有一个包含十个componmnet 的 React 应用程序，并且每个组件都有自己的本地 state，则应用程序的整个状态将由 Redux 中容纳的单个状态对象定义store。


Reduxstore是一个保存和管理应用程序的对象state。Redux 对象上有一个方法被调用createStore()，
您可以用它来创建 Redux store。此方法将reducer函数作为必需参数。

该reducer函数将在后面的挑战中介绍，并且已在代码编辑器中为您定义。它只是将其state作为参数并返回state。

 ==> 声明一个 store 变量并将其分配给 createStore()方法，并传入 作为 reducer 参数。

*/

const reducer = (state = 5) => {
  return state;
}

/*使用 Redux.createStore（）*/
const store = Redux.createStore(reducer);
console.log(store.getState());

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
