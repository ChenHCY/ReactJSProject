// stopwatchReduce.jsx： useReducer 来管理 seconds 和 isActive
const stopwatchReducer = (state, action) => {
    switch (action.type) {
        case 'START': //当变量seconds 一直变化，计时器isActive保持为不变为true
            return {seconds: state.seconds + 1, isActive: state.isActive};
        case 'TOGGLE': //当isActive改变的时候，变量seconds不发生改变
            return {seconds: state.seconds, isActive: !state.isActive};
        case 'RESET':  //当重置时，变量 seconds变为0，isActive保持为false
            return {seconds: 0, isActive: false};
        default:
            return state;
    }
}

export default stopwatchReducer;
