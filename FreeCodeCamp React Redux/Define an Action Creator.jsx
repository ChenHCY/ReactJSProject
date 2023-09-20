/* Define an Action Creator

创建操作后，下一步是将操作发送到 Redux 存储，以便它可以更新其state。

在 Redux 中，您可以 action creators 创建者来完成此任务。

action creators 只是一个返回动作的 JavaScript 函数。换句话说，action creators  创建代表 action events的 objects。

Define a function named actionCreator() that returns the action object when called.
*/

const action = {
  type: 'LOGIN'
}

// Define an action creator here:
const actionCreator = () => {
  return action;
}
