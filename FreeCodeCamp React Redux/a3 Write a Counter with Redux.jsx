/* Write a Counter with Redux ==> 使用Redux 完成一个 计数器

In this lesson, you'll implement a simple counter with Redux from scratch. The basics are provided in the code editor, 
but you'll have to fill in the details! Use the names that are provided and define incAction and decAction action creators, 
the counterReducer(), INCREMENT and DECREMENT action types, and finally the Redux store. 

Once you're finished you should be able to dispatch INCREMENT or DECREMENT actions to increment or decrement the state held 
in the store. Good luck building your first Redux app!
*/

// Define a constant for increment and decrement action type
// 定义 action的type 两个常量
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT'; 

// Define the counter reducer which will increment or decrement the state based on the action it receives
// 定义 reducer()：判断action的type类型，然后进行store 里面 对应的 state的改变
const counterReducer = (state = 0, action)=> {
  switch(action.type) {
    case INCREMENT:
      return (state += 1);
    
    case DECREMENT:
      return (state -= 1);

    default:
      return state;
  }
}; 

// Define an action creator for incrementing and decrmenting
// 定义递增和递减的动作创建者
const incAction = () => {
  return {
    type: INCREMENT
  };
}; 

const decAction = () => {
  return {
    type: DECREMENT
  };
};

// Define the Redux store here, passing in your reducers
// 创建 Redux store, 传入reducer() 到 Redux
const store = Redux.createStore(counterReducer); 
