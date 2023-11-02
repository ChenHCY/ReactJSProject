import {createContext} from "react";

//Context给所有的子组件提供一个储存和拿state的地方
const CountContext = createContext(null);

export default CountContext;
