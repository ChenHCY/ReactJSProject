const CountReducer = (state, action) => {
//Reducer是按照逻辑来修改各种state的值
    switch (action.type){
        case 'counter/increment':
            return state + 1;
        case 'counter/decrement':
            return state - 1;
        default:
            return state;
    }
}

export default CountReducer;