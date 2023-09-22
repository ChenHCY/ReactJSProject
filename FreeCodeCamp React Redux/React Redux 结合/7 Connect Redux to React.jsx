/* Connect Redux to React

已经编写了 mapStateToProps() 和 mapDispatchToProps() 函数，可以使用它们来映射state并分派到您的 React 组件之一的 props。

React Redux 的 connect 方法可以处理这个任务。此方法采用两个可选参数：mapStateToProps() 和mapDispatchToProps()。
==> 它们是可选的，因为您可能有一个只需要访问state 但不需要分派任何action的 componment组件，反之亦然。

要使用此方法，请传入函数作为参数，并立即使用组件调用结果。这个语法有点不寻常，看起来像：

connect(mapStateToProps, mapDispatchToProps)(MyComponent) //如果要省略 connect 方法的参数之一，请传递 null 来代替它。

此题给予具有 mapStateToProps() 和 mapDispatchToProps()函数 以及一个名为 Presentational 的 新React componment。

使用 React Redux 全局对象的 connect 方法将此组件连接到 Redux，并立即在展示组件上调用它。

==> 将结果分配给一个名为 ConnectedComponent 的新常量，它表示连接的组件。
*/

const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message));
    }
  }
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>
  }
};

const connect = ReactRedux.connect;
// Change code below this line
//将结果分配给一个名为 ConnectedComponent 的新常量，它表示连接的组件。
const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Presentational)
