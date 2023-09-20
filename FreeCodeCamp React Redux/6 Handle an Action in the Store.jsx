/* Handle an Action in the Store

创建并分派 action 后，Redux 存储 需要知道如何响应该操作。这是reducer的工作。

Redux 中的 Reducers 负责响应 action 而发生的 state的 修改。

reducer 将 state 和 action 作为参数，并且它总是返回一个新的state。

==> 这是 reducer的唯一作用。reducer() 只是一个纯函数，它接受 state 和 action，然后返回 new state。

==> Redux 中的另一个关键原则是 state read only。

*/

/*
The code editor has the previous example as well as the start of a reducer function for you. Fill in the body of the 
reducer function so that if it receives an action of type 'LOGIN' it returns a state object with login set to true. 

Otherwise, it returns the current state. Note that the current state and the dispatched action are passed to the reducer, 
so you can access the action's type directly with action.type.
*/

const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // Change code below this line

  //if the action type is login
  if(action.type == 'LOGIN'){
    return {
      login: true
    }
  }
  return state; //if the action type is not login
  //return the curr state

  // Change code above this line
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
