/* Use Middleware to Handle Asynchronous Actions

有时需要在 Redux 应用程序中调用异步端点，那么如何处理这些类型的请求呢？

Redux 提供了专门为此目的设计的中间件，称为 Redux Thunk middlware 中间件。以下是如何将其与 Redux 结合使用的简要说明。

==> 1. 请将其作为参数传递给 Redux.applyMiddleware(). 然后将该语句作为  第二个可选参数  提供 给函数createStore()
const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

要创建异步操作，您可以在操作创建器中返回一个函数作为 dispatch参数。在此函数中，您可以分派操作并执行异步请求。

=> 2. 在此题中，通过调用模拟异步请求setTimeout()。

    ==> 在启动任何异步行为之前调度一个操作是很常见的，以便您的应用程序状态知道正在请求某些数据（例如，此状态可以显示加载图标）。
    
    ==> 一旦收到数据，调度另一个操作，该操作携带 **数据** 作为有效负载以及操作已完成的信息。

我们将dispatch作为参数传递给此特殊操作创建器。这就是您将用来调度操作的内容，您只需将操作直接传递给调度，中间件就会处理其余的事情。
*/

/*
Write both dispatches in the handleAsync() action creator. Dispatch requestingData() before the setTimeout() (the simulated API call). 
Then, after you receive the (pretend) data, dispatch the receivedData() action, passing in this data. Now you know how to handle 
asynchronous actions in Redux. Everything else continues to behave as before.

*/

const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

//two actions
const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

// thunk: dispath() and getState()
// 允许执行异步操作，然后根据操作结果派发相应的 action。 
const handleAsync = () => {
  return function(dispatch) {
   
    store.dispatch(requestingData());  // Dispatch request action here

    // 使用setTimeout模拟 异步async调用
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      
      store.dispatch(receivedData(data)); // Dispatch received data action here
    
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};


// 创建 Redux store 时, 应用 Redux Thunk 中间件：
const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
