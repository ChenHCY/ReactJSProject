/* Use the Spread Operator on Arrays

ES6 中帮助强制 Redux 中状态不变性的一种解决方案是扩展运算符：...。
扩展运算符有多种应用，其中之一非常适合之前从现有数组生成新数组的挑战。

这是相对较新但常用的语法。例如，如果您有一个数组myArray并写入：
let newArray = [...myArray];

newArray现在是 的 clone myArray。两个数组都单独存在于内存中。

如果执行类似的newArray.push(5)，myArray则不会改变。`...`有效地将值分散到一个myArray新数组中。

要克隆数组但在新数组中添加其他值，您可以编写[...myArray, 'new value']. 

==> 这将返回一个由 myArray当中的所有值，和新字符串加入到最后一位 组成的新数组。

==> new value 扩展语法可以在像这样的数组组合中多次使用，但需要注意的是，它仅制作数组的浅表副本。也就是说，它只提供一维数组的不可变数组操作。

*/

/*
Use the spread operator to return a new copy of state when a to-do is added.
*/

const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    
    case 'ADD_TO_DO':  
      // Don't mutate state here or the tests will fail
      // 合并state数组 和 todo数组，输出返回一个新的state
      return [...state, action.todo];
    
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
