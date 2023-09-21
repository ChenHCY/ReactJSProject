# React Redux 的 使用

React Redux 是一个用于管理 React state 的 libary。==> redux就是一个实现上述集中管理的容器

# redux 遵循三大基本原则：
  · 单一数据源
  · state 是只读的 
  · 使用纯函数来执行修改

==> 通常与 React 结合使用，以便更容易地管理和共享应用程序的状态。

# Action(): 一个用来描述发生了什么事情object
1. `Action` 是一个普通的 JavaScript 对象，它描述了一个事件或动作，用于**触发 state 变化**。

2. `Action` 包括一个 type 字段，表示动作的类型，以及一些可选的数据字段，用于传递数据给 reducer。

# store.dispatch()：告诉Redux store要改变哪些state
`store.dispatch()` 是一个函数，用于触发一个action，以便告诉Redux store要 **如何改变 state**。

每个action都是一个带有type属性的普通 JavaScript object，

==> 描述了要执行的操作类型。根据type属性，Redux store  会调用相应的 `reducer()` 来 **改变 state** (reducer 确定state发生了如何变化的地方)

#  Reducer(): state 进行改变的地方
1. `Reducer()` 是一个纯函数，

2. `Reducer()`接受两个参数，完成改变后，最后输出返回 新的 state。
   
   ==> state: 应用当前的state

   ==> action： 包含一个 type 属性，指示要执行的操作类型，以及其他一些数据，用于修改状态。

3. `Reducer` 根据 action 的类型来决定 **如何改变state**。每个 `reducer()` 只负责处理一个特定部分的状态。

# store.subscribe(): 监听器，在state改变结束之后，更新界面
`store.subscribe()` 是一个函数，用于向 Redux store 添加一个 listener监听器，以便在 state（也就是store中的数据）发生变化时执行特定的 callback回调函数。

==> 当应用中某个组件通过 `store.dispatch()` 改变了 Redux store 中的 数据时，

==> 所有通过 `store.subscribe()` 注册的监听器都会被触发，以便更新 UI 或 执行其他逻辑。

# 小结
· createStore  可以帮助创建 store

· store.dispatch 帮助派发 action , action 会传递给 store

· store.getState  这个方法可以帮助获取 store 里边所有的数据内容

· store.subscrible 方法订阅 store 的改变，只要 store 发生改变， store.subscrible 这个函数接收的这个回调函数就会被执行
