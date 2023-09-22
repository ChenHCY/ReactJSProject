/* Remove an Item from an Array

Time to practice removing items from an array. The spread operator can be used here as well. Other useful JavaScript methods include slice() and concat().

The reducer and action creator were modified to remove an item from an array based on the index of the item. 
Finish writing the reducer so a new state array is returned with the item at the specific index removed.

*/

//使用slice 达到删除原有state array中一个item的效果
//redux不能修改原有的state, 只能生成一个新的输出，所以要用到slice()
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      return [
        //左闭右开区间，取不到右边界的值
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)
      ];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
