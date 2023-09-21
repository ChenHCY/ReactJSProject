/* Register a Store Listener  state变量的监听器

访问 Redux 存储对象的另一个方法是 store.subscribe()。 

这允许您向store 订阅 subscribe listener functions，

每当针对存储调度操作时都会调用这些函数。

==> store.subscribe 监听 store的变化

==> 此方法的一个简单用途是向您的store 订阅一个function，该函数只需在每次收到action 并更新 store 时记录。

Write a callback function that increments the global variable count every time the store receives an action, 
and pass this function in to the store.subscribe() method. You'll see that store.dispatch() is called three times 
in a row, each time directly passing in an action object. 

Watch the console output between the action dispatches to see the updates take place.
*/

const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0; /*不是一个asyn的异步过程 */

// Change code below this line
// 注册一个监听器，每次状态变化时都会触发
store.subscribe(() => {
  count += 1;
});

// Change code above this line

//store.dispatch() 是一个函数，用于触发一个action，以便告诉Redux store要如何改变状态。
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
