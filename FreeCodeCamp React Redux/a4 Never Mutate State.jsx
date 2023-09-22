/* Never Mutate State

 Redux 中实施state不变性关键原则的几种方法。==>  React 中的 state 是只读的
 
 所以 永远 不会直接修改 state，而是新的state。

此题 有一个 store 和 reducer用于管理待办事项。

在reducer() 中完成案例写入ADD_TO_DO，将新的待办事项附加到状态中。

有几种方法可以使用标准 JavaScript 或 ES6 来实现此目的。看看是否可以找到一种方法来返回一个新数组，并将项目从action.todo附加到末尾。 ==> 不改变原有的todos array
*/

//action const
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
// const state
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

//reducer
const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return todos.concat(action.todo);
    default:
      return state;
  }
};

//action creater
const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
