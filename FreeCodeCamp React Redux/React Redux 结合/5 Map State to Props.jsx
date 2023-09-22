/* Map State to Props

Provider 组件允许您向 React 组件提供 state 和dispatch，但您必须准确指定所需的state和action。 

这样，您可以确保每个组件只能访问其所需的state。 

==> 通过创建两个函数来实现此目的：mapStateToProps() 和mapDispatchToProps()。

在这些函数中，可以声明您想要访问哪些state 以及您需要能够调度哪些action creator。 

==> 一旦这些函数就位，您将在另一个挑战中看到  **如何使用 React Redux 连接方法** 将它们连接到您的组件。

注意：在幕后，React Redux 使用 store.subscribe() 方法来实现 mapStateToProps()。

Create a function mapStateToProps(). This function should take state as an argument, then return an 
object which maps that state to specific property names. These properties will become accessible to 
your component via props. Since this example keeps the entire state of the app in a single array, 
you can pass that entire state to your component. Create a property messages in the object 
that's being returned, and set it to state.
*/

const state = [];

// Change code below this line
// 把state传输给props, 然后在传到redux store
const mapStateToProps = (state) => {
  return{
    messages: state
  }
}
