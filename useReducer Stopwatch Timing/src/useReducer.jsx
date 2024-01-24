// stopwatchReduce.jsx： useReducer 来管理 seconds 和 isActive
const stopwatchReducer = (state, action) => {
    switch (action.type) {
        case 'START':
            return {seconds: state.seconds + 1, isActive: state.isActive};
        case 'STOP':
            return {seconds: state.seconds, isActive: !state.isActive};
        case 'RESET':
            return {seconds: 0, isActive: false};
        default:
            return state;
    }
}

export default stopwatchReducer;