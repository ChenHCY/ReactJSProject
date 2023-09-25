/* Moving Forward From Here

Congratulations! You finished the lessons on React and Redux. 
There's one last item worth pointing out before you move on. Typically, you won't write React apps in a code editor like this. 

This challenge gives you a glimpse of what the syntax looks like if you're working with a file system on your own machine. 
The code should look similar, except for the use of import statements (these pull in all of the dependencies that have 
been provided for you in the challenges).

Finally, writing React and Redux code generally requires some configuration. This can get complicated quickly. 
If you are interested in experimenting on your own machine, the Create React App comes configured and ready to go.

Alternatively, you can enable Babel as a JavaScript Preprocessor in CodePen, add React and ReactDOM as external 
JavaScript resources, and work there as well.
*/

/*
//==> React class componment
import React from 'react' 
import ReactDOM from 'react-dom' 

//==> React Redux 两个链接的function
import { Provider, connect } from 'react-redux' 

//==> React Redux store的function
//creatStore: 创建一个Redux store,  combineReducers: 合并多个reducer
//applyMiddleware: Redux的中间件申明
import { createStore, combineReducers, applyMiddleware } from 'redux'

//==> middlware中的thunk申明
import thunk from 'redux-thunk'

//==> Reudx 的 Reducer文件
import rootReducer from './redux/reducers'

//==> React componment 文件
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
*/

// Only change code below this line
console.log('Now I know React and Redux!');
