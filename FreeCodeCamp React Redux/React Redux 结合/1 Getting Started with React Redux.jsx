/* Getting Started with React Redux

Start with a DisplayMessages component. Add a constructor to this component and initialize it with a state that 
has two properties: input, that's set to an empty string, and messages, that's set to an empty array.

1. The DisplayMessages component should render an empty div element.

2. The DisplayMessages constructor should be called properly with super, passing in props.

3. The DisplayMessages component should have an initial state equal to {input: "", messages: []}.
*/

class DisplayMessages extends React.Component {
  // Change code below this line
  constructor(props){
    super(props);
    this.state = {
      input: "",
      messages: []
    }
  }

  // Change code above this line
  render() {
    return <div />
  }
};
