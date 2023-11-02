# createContext()
createContext(): 创建一个上下文对象，能让所有子组件 无论层级多深，都能直接使用父组件的state值

<Context.Provider value={}>: 为被它包裹的子组件提供Context的值。 value={} 表示要传入子组件的值，如果是多个值，写成 object的形式

useContext(Context名字): 订阅和获取 指定 context里面的数据

<Context.Consumer>：很少会用到的备选方案，它用于读取上下文的值。

# useReducer()
React 中的一个 hook，用于管理和更新组件的状态（state）。 接受的两个参数：

**Reducer function（Reducer 函数）**：这是一个纯函数，接受当前 state 和 一个 action (操作)，

==> 然后返回一个新的state。

**Initial state（初始状态）**：这是state的初始值，通常是一个 object 对象 或者 任何数据类型。

==> 它表示组件初始时的状态
