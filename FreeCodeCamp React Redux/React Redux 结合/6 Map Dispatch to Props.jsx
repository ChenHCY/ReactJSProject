/* Map Dispatch to Props

The mapDispatchToProps() function is used to provide specific action creators to your React components 
so they can dispatch actions against the Redux store. It's similar in structure to the mapStateToProps() 
function you wrote in the last challenge. It returns an object that maps dispatch actions to property names, 
which become component props. However, instead of returning a piece of state, each property returns a function 
that calls dispatch with an action creator and any relevant action data. You have access to this dispatch because 
it's passed in to mapDispatchToProps() as a parameter when you define the function, just like you passed state to 
mapStateToProps(). Behind the scenes, React Redux is using Redux's store.dispatch() to conduct these dispatches with 
mapDispatchToProps(). This is similar to how it uses store.subscribe() for components that are mapped to state.

有一个 loginUser() 操作创建器，它将用户名作为操作负载。从该动作创建者的 mapDispatchToProps() 返回的对象将类似于：
{
  submitLoginUser: function(username) {
    dispatch(loginUser(username));
  }
}
*/

/* 代码编辑器提供了一个名为 addMessage() 的操作创建器。编写函数mapDispatchToProps()，将dispatch 作为参数，然后返回一个对象。
该对象应该有一个设置为调度函数的属性submitNewMessage，该函数采用一个参数，以便在调度addMessage() 时添加新消息。
*/

const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

// Change code below this line
// mapDispatchToProps() 函数用于向 React 组件提供特定的操作创建者，以便它们可以针对 Redux 存储分派操作。
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
}
