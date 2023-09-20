/* Get State from the Redux Store

store.getState() function 从store 里面 获取state

For example, you can retrieve the current state held in the Redux store object with the getState() method.

The code from the previous challenge is re-written more concisely in the code editor. 

Use store.getState() to retrieve the state from the store, and assign this to a new variable currentState.
*/

const store = Redux.createStore(
  (state = 5) => state
);

const currentState = store.getState();
console.log(currentState);
