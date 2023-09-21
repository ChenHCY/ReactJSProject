/* Combine Multiple Reducers

当我们在App中需要使用的的state 开始变得更加复杂时，可能很容易将state 分成多个部分。

==> 但 Redux 的首要原则：App的 所有 state 都保存在 store 的 单个state object中。

==> Redux 提供了 combineReducers()：可以组合多个reducer来作为 复杂state情况 的解决方案 

我们可以正常定义多个reducer() 来处理 App state 的不同部分，然后将这些 reducer 组合成一个root reducer。

*****combineReducers()方法: *****

此方法接受一个 object 作为参数，==> 对象的 属性名 对应于 state 的不同部分 (reducer的名字）

可以在其中定义将键关联到特定化简器函数的属性。Redux 将使用您为key键指定的名称作为关联状态的名称。

*/

/*
There are counterReducer() and authReducer() functions provided in the code editor, 
along with a Redux store. Finish writing the rootReducer() function using the Redux.

combineReducers() method. Assign counterReducer to a key called count and authReducer to a key called auth.
*/

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

// Define the root reducer here
// 所有app state 都保存在 store 中的单个state对象中
// 所以需要使用 combineReducers(): 组合多个reducer ==> 来管理不同部分的state改变
const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});

const store = Redux.createStore(rootReducer);
