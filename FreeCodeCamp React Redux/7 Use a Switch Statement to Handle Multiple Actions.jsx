/* Use a Switch Statement to Handle Multiple Actions

可以告诉 Redux 存储如何处理多种操作类型。

假设您正在 Redux 存储中管理用户身份验证。

您希望获得 login用户登录 和 logout注销 时的状态表示。您可以使用具有 属性 的 单个状态对象来表示这一点 authenticated。


代码编辑器为您设置了 store、action 和 action creartor。

使用reducer函数处理多个身份验证操作。使用JavaScript的 switch 语句来 reducer 响应不同的动作事件。

*/

/* Note: At this point, don't worry about state immutability, since it is small and simple in this example. 

For each action, you can return a new object — for example, {authenticated: true}. Also, don't forget to write 
a default case in your switch statement that returns the current state. This is important because once your app 
has multiple reducers, they are all run any time an action dispatch is made, even when the action isn't related 
to that reducer. 

In such a case, you want to make sure that you return the current state.
*/

const defaultState = {
  authenticated: false
};


const authReducer = (state = defaultState, action) => {
  // Change code below this line
  // 使用JavaScript的 switch 语句来 reducer 响应不同的动作事件。
  switch(action.type){
    case 'LOGIN':
      return{
        authenticated: true
      };
    case 'LOGOUT':
      return{
        authenticated: false
      };
    default:
      return defaultState;
  }
  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
