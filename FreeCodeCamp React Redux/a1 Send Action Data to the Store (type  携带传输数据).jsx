/* Send Action Data to the Store

但到目前为止，这些action 尚未任何数据 包含除type. 您还可以随您的action 一起发送特定数据。

事实上，这种情况很常见，因为操作通常源自某些用户交互，并且往往会携带一些数据。Redux 存储通常需要了解这些数据。


There's a basic notesReducer() and an addNoteText() action creator defined in the code editor. 
Finish the body of the addNoteText() function so that it returns an action object. The object should include a type property 
with a value of ADD_NOTE, and also a text property set to the note data that's passed into the action creator. 
When you call the action creator, you'll pass in specific note information that you can access for the object.

Next, finish writing the switch statement in the notesReducer(). You need to add a case that handles the addNoteText() actions. 
This case should be triggered whenever there is an action of type ADD_NOTE and it should return the text property on the incoming action as the new state.

The action is dispatched at the bottom of the code. Once you're finished, run the code and watch the console. 
That's all it takes to send action-specific data to the store and use it when you update store state.

*/


const ADD_NOTE = 'ADD_NOTE';

//reducer(): state发生改变的地方
//当action type对上之后，改变state 成为 之前action的数据
const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

//action： 包含一个 type 和 需要 传输的数据
const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note
  };
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
