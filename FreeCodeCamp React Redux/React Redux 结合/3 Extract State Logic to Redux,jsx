/* Extract State Logic to Redux

需要将其在本地执行的逻辑移至stateRedux 中。这是将简单的 React 应用程序连接到 Redux 的第一步。
您的应用程序拥有的唯一功能是将用户的新消息添加到无序列表中。该示例很简单，旨在演示 React 和 Redux 如何协同工作。

First, define an action type ADD and set it to a const ADD. Next, define an action creator addMessage() which creates the action to add a message. 
You'll need to pass a message to this action creator and include the message in the returned action.

Then create a reducer called messageReducer() that handles the state for the messages. The initial state should equal an 
empty array. This reducer should add a message to the array of messages held in state, or return the current state. 

Finally, create your Redux store and pass it the reducer.
*/

/*
1. The const ADD should exist and hold a value equal to the string ADD
2. The action creator addMessage should return an object with type equal to ADD and message equal to the message that is passed in.
3. messageReducer should be a function.
4. The store should exist and have an initial state set to an empty array.
5. Dispatching addMessage against the store should immutably add a new message to the array of messages held in state.
6. The messageReducer should return the current state if called with any other actions.

*/

// Define ADD, addMessage(), messageReducer(), and store here:

//action 常量
const ADD = "ADD";

//action creator 
const addMessage = (msg) => {
  return {
    type: ADD,
    message: msg
  }
}

//reducer(): 接受一个state, action动作
const messageReducer = (state = [], action) => {
  switch(action.type){
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
}

//create the redux store
let store = Redux.createStore(messageReducer);
