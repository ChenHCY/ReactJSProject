# Provider in React.js Redux
`Provider` 是 React Redux 库中的一个核心组件，用于将 Redux store 与 React App应用程序连接起来。

==> 通过 "Provider"，Redux store 将在整个应用程序中可用，允许我们在组件中访问和修改全局状态

==> Redux 是一种用于管理 React 应用状态的状态管理库

==> `Provider` 则是一种用于在整个应用程序中提供 Redux 存储的方式

==> 下面将解释如何使用 `Provider` 来连接 Redux 到 React

# 安装 react-redux
使用 npm 安装 react-redux，例如 `npm install react-redux`

# 创建 Redux 存储
首先要创建 Redux 存储。这通常涉及到定义 reducers、创建 Redux store、可能还有中间件的设置等
```JavaScript
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;
```

# 使用 "Provider" 包装你的应用：
在你的应用程序的顶层组件中，通常是在 index.js 文件中

==> 使用 "Provider" 组件将 Redux 存储提供给整个应用程序。

这可以通过以下方式完成：
```JavaScript
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // 引入之前创建的 Redux 存储
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

在上面的代码中，我们首先导入 "Provider" 组件和之前创建的 Redux 存储 (store)

==> 然后将其包装在应用程序的根组件 <App /> 外部。

这样，整个应用程序都 **可以访问 Redux 存储中的状态和操作**

# 使用 Redux 中的state and action
你可以在任何 React 组件中使用 Redux 中的状态和操作。

为了做到这一点，可以使用 connect 函数来将组件连接到 Redux 存储，或者使用 useSelector 和 useDispatch 钩子来访问状态和分发操作。

==> **允许在app componment 中获取和修改 Redux 中的数据**

使用 connect 函数连接组件到 Redux 存储

```JavaScript
import { connect } from 'react-redux';

// 创建一个 React 组件
const MyComponent = ({ someData, dispatchSomeAction }) => {
  // 在组件中使用 Redux 状态和操作
  return (
    <div>
      <p>{someData}</p>
      <button onClick={() => dispatchSomeAction()}>Dispatch Action</button>
    </div>
  );
};

// 使用 connect 函数连接组件到 Redux 存储
const mapStateToProps = (state) => ({
  someData: state.someData,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSomeAction: () => {
    // 这里可以分发一个 Redux action
    dispatch(someAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
```
