/* Copy an Object with Object.assign
当状态为 时object，也有一些方法可以帮助强制状态不变性。处理对象的一个​​有用工具是实用Object.assign()程序。

Object.assign(): Object.assign是一种内置 JavaScript 方法，用于将所有可枚举属性的值从一个或多个源对象复制到目标对象中。它通常用于对象克隆和合并对象。

==> Object.assign(target, source1, source2, ...);
target: 属性将复制到的目标对象。该对象将被修改并返回。
source1：要将其属性复制到目标对象中的一个或多个源对象。

The Redux state and actions were modified to handle an object for the state. 
Edit the code to return a new state object for actions with type ONLINE, 
which set the status property to the string online. Try to use Object.assign() to complete the challenge.
*/


const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return Object.assign({}, state, {status:"online"})
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
