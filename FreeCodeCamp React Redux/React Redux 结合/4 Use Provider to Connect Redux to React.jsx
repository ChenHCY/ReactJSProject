/* Use Provider to Connect Redux to React

In the last challenge, you created a Redux store to handle the messages array and created an action for adding new messages. 

The next step is to provide React access to the Redux store and the actions it needs to dispatch updates. React Redux provides 
its react-redux package to help accomplish these tasks.

React Redux provides a small API with two key features: Provider and connect. Another challenge covers connect. 
The Provider is a wrapper component from React Redux that wraps your React app. This wrapper then allows you to access 
the Redux store and dispatch functions throughout your component tree. Provider takes two props, the Redux store and the 
child components of your app. Defining the Provider for an App component might look like this:

<Provider store={store}>
  <App/>
</Provider>

The code editor now shows all your Redux and React code from the past several challenges. It includes the Redux 
store, actions, and the DisplayMessages component. The only new piece is the AppWrapper component at the bottom. 
Use this top level component to render the Provider from ReactRedux, and pass the Redux store as a prop. Then render 
the DisplayMessages component as a child. Once you are finished, you should see your React component rendered to the page.

Note: React Redux is available as a global variable here, so you can access the Provider with dot notation. The code 
in the editor takes advantage of this and sets it to a constant Provider for you to use in the AppWrapper render method.
*/

// Redux: ****************************************************************************************
//action const
const ADD = 'ADD';

//action creater => tell the store type
const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

//action reducer => change the state
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
//decleare the redux store 申明
const store = Redux.createStore(messageReducer);

// React: **********************************************************************************
class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        
        <button 
          onClick={this.submitMessage}
          >Submit</button>
        
        <ul>
          {this.state.messages.map(
            (message, idx) => {
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


//使用 "Provider" 包装, 将 Redux store 提供给整个应用程序。 **********************************************************************************
//整个应用程序都 可以访问 Redux 存储中的状态和操作
//在你的应用程序的顶层组件中，通常是在 index.js 文件中
const Provider = ReactRedux.Provider;
class AppWrapper extends React.Component {
  // Render the Provider below this line
  render(){
    return (
     <Provider store = {store}>
        <DisplayMessages/>
      </Provider>)
  }
  // Change code above this line
};
