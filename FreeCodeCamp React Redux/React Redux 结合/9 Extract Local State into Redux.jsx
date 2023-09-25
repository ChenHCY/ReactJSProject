/* Extract Local State into Redux

您编写了所有 Redux 代码，以便 Redux 可以控制 React 消息应用程序的state管理。 

现在 Redux 已连接，您需要将state管理从展示组件中提取出来并放入 Redux 中。 目前，您已连接 Redux，但您正在展示组件中本地处理状态。

n the Presentational component, first, remove the messages property in the local state. These messages will be managed by Redux. 

Next, modify the submitMessage() method so that it dispatches submitNewMessage() from this.props, and pass in the current message 
input from local state as an argument. Because you removed messages from local state, remove the messages property from the call to this.setState() 
here as well. Finally, modify the render() method so that it maps over the messages received from props rather than state.

*/

// Redux:
//action 常量
const ADD = 'ADD';

// action function, 通过store.dispatch(action), 
// ==> 告诉reducer要改变的state类型
const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

//reducer 接收参数：state 和 action, 根据action来改变state
// ==> 进行state改变的地方, 把action的数据加入到消息队列中
const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};
//redux store的申明
const store = Redux.createStore(messageReducer);

//申明provider方法 和 connect 方法
//使用 ReactRedux.Provider 包装了根组件 Container，并将 Redux 的 store 传递给 Provider
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  submitMessage = () => {
    const {input} = this.state;
    this.props.submitNewMessage(input);

    this.setState({
      input: ""
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        
        <input
          value={this.state.input}
          onChange={this.handleChange}/>
          
        <br/>
        
        <button 
          onClick={this.submitMessage}
        >Submit</button>
        
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
// Change code above this line

// React-Redux:
// 用于将 Redux store 中的 state 映射 到 React 组件中的属性。
// 在这个示例中，它将 Redux 的 state 映射为 messages 属性。
const mapStateToProps = (state) => {
  return { messages: state }
};

// mapDispatchToProps 方法 用于将 Redux 的 dispatch 方法映射为 React 组件的属性。
// 将 submitNewMessage 方法映射为一个属性，
// ==> 该方法会调用 dispatch(addMessage(newMessage))
// ==> 然后触发一个action, => 告诉 reducer 要改变的state类型  
// mapDispatchToProps() 函数用于向 React 组件提供特定的操作创建者，以便它们可以针对 Redux 存储分派 action。
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

// 创建了一个 Container 组件，通过 connect 函数将 mapStateToProps 和 mapDispatchToProps 连接到 React Componment组件 Presentationa上
// ==> 这样 Presentational 组件就能够获取到 Redux 的状态和操作了。
const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Complete the return statement:
    return (
      <Provider store = {store}> 
        <Container />
      </Provider>
    );
  }
};
