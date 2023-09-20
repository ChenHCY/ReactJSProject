/* Dispatch an Action Event

Dispatch method 是 用来将 action 分派到 Redux 存储的方法。

==> 调用 store.dispatch() 并 传递 从 action creator 返回的值会将操作发送回存储。


1. The Redux store in the code editor has an initialized state that's an object containing a login property currently set to false. 

2. There's also an action creator called loginAction() which returns an action of type LOGIN. 

3. Dispatch the LOGIN action to the Redux store by calling the dispatch method, and pass in the action created by loginAction().
*/

//1. The Redux store in the code editor has an initialized state that's an object containing a login property currently set to false. 
const store = Redux.createStore(
  (state = {login: false}) => state
);

//2. There's also an action creator called loginAction() which returns an action of type LOGIN. 
const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
// store.dispath() 帮助派发 action , action 会传递给 store
// store.dispatch() 方法应该用于调度 LOGIN 类型的操作。

store.dispatch(loginAction()); //3. Dispatch the LOGIN action to the Redux store by calling the dispatch method, and pass in the action created by loginAction().

