/* Manage State Locally First

Here you'll finish creating the DisplayMessages component.

First, in the render() method, have the component render an input element, button element, 
and ul element. When the input element changes, it should trigger a handleChange() method. 

Also, the input element should render the value of input that's in the component's state. 
The button element should trigger a submitMessage() method when it's clicked.

Second, write these two methods. The handleChange() method should update the input with what the user is typing. 
The submitMessage() method should concatenate the current message (stored in input) to the messages array in local state, and clear the value of the input.

Finally, use the ul to map over the array of messages and render it to the screen as a list of li elements.
*/

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: []
    }
  }
  // Add handleChange() and submitMessage() methods here
  handleChange = (e) => {
    this.setState({
      input: e.target.value,
    }) //把输入的string 赋值 给 input
  }

  submitMessage = () => {
    const {input, messages} = this.state;
    const newList = [
      ...messages,
      input
    ]
    //把新的list 赋值回给 messages array
    this.setState({input: "", messages: newList});
  }

  render() {
    const {input} = this.state;

    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input 
          type = "text"
          onChange = {this.handleChange}
          value = {input} 
        ></input>

        <button 
        onClick = {this.submitMessage} 
        style = {{margin: "10px"}}
        >submit</button>

        <ul>
        {this.state.messages.map((item) => (
          <li> {item} </li>
        ))}
        </ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};
