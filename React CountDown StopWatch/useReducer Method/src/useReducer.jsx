// 使用 useReducer 来进行 state 的修改，从而减少重新渲染
const countDownReducer = (state, action) => {
    switch (action.type) {
        case 'START':  //当计时器运行时，需要变量seconds 一直变化，isActive保持为true
            return {seconds: state.seconds - 1, isActive: state.isActive};
        case 'TOGGLE': //当暂停or开始时，需要改变isActive, 变量seconds保持不变
            return {seconds: state.seconds, isActive: !state.isActive}; 
        case 'RESET': //重置计时器时，恢复两个变量为初始值
            return {seconds: 30, isActive: false};
        default:
            return state;
    }
}

export default countDownReducer;