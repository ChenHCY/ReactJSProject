/* Define a Redux Action

Writing a Redux action is as simple as declaring an object with a type property. Declare an object action and give it a property type set to the string 'LOGIN'.


由于Redux是一个状态管理框架，更新状态是其核心任务之一。在 Redux 中，所有状态更新都是通过调度操作触发的。
动作只是一个 JavaScript 对象，其中包含有关已发生的动作事件的信息。Redux 存储接收这些操作对象，然后相应地更新其状态。有时 Redux 操作也会携带一些数据。

例如，该操作在用户登录后携带用户名。虽然数据是可选的，但操作必须携带type指定发生的操作“类型”的属性。
*/

// Define an action here:
//Action 是一个普通的 JavaScript 对象，它描述了一个事件或动作，用于触发 state 变化
let action = {
  type: 'LOGIN'
}
