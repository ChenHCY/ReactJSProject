/* Connect Redux to the Messages App

现在您已经了解了如何connect将 React 连接到 Redux，您可以将所学到的知识应用到处理消息的 React 组件中。


代码编辑器包含到目前为止您在本节中编写的所有代码。唯一的变化是 React 组件被重命名为Presentational. 

创建一个新组件，该组件保存在一个名为Container的常量中，Container用于connect将该组件连接Presentational到 Redux。

然后，在 中AppWrapper，渲染 React Redux  Provider组件。将 Provider Redux store作为 prop 传递并Container作为子项渲染。

一切设置完毕后，您将看到消息应用程序再次呈现到页面上。
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
// ==> 进行state改变的地方
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

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  submitMessage = () => {
    const {input, messages} = this.state;
    const newList = [
      ...messages,
      input
    ]

    //把新的list 赋值回给 messages array
    this.setState({
      input: "",
      messages: newList
    });
  }

  render() {
    const { input, messages } = this.state;

    return (
      <div>
        <h2>Type in a new Message:</h2>
        
        <input
          value={input}
          onChange={this.handleChange}/><br/>
        
        <button 
          onClick={this.submitMessage}
          > Submit </button>
        
        <ul> {
          messages.map(
            (message, idx) => {
              return (
                 <li key={idx}> {message} </li>
              )
            })
          }
        </ul> 
      </div>
    );
  }
};


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

//申明provider方法 和 connect 方法
//使用 ReactRedux.Provider 包装了根组件 Container，并将 Redux 的 store 传递给 Provider
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

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
