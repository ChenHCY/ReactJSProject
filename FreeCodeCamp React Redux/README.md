# React Redux 的 使用

React Redux 是一个用于管理 React state 的 libary。==> redux就是一个实现上述集中管理的容器

# redux 遵循三大基本原则：
· 单一数据源
· state 是只读的 ==> 通过view()显示
· 使用纯函数来执行修改

==> 通常与 React 结合使用，以便更容易地管理和共享应用程序的状态。

# Action(): 一个用来描述发生了什么事情对象
1. Action 是一个普通的 JavaScript 对象，它描述了一个事件或动作，用于触发 state 变化。

2. Action 包括一个 type 字段，表示动作的类型，以及一些可选的数据字段，用于传递数据给 reducer。

# Reducer(): 确定state发生了如何变化的地方
1. Reducer 是一个纯函数，它接收先前的状态和一个 action，然后返回新的状态。

2. Reducer 根据 action 的类型来决定如何更新状态。每个 reducer 只负责处理一个特定部分的状态。

# 小结
· createStore  可以帮助创建 store

· store.dispatch 帮助派发 action , action 会传递给 store

· store.getState  这个方法可以帮助获取 store 里边所有的数据内容

· store.subscrible 方法订阅 store 的改变，只要 store 发生改变， store.subscrible 这个函数接收的这个回调函数就会被执行
