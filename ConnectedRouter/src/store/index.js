import thunk from "redux-thunk";
import { createBrowserHistory } from "history";

import { createStore, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";

import reducers from "./reducers";

export const history = createBrowserHistory(); // 浏览器端应用可以使用createBrowserHistory来创建history对象
const initialState = {};

const store = createStore(
  connectRouter(history)(reducers), // 使用connectRouter包裹 root reducer 并且提供我们创建的history对象，获得新的 root reducer
  initialState,
  applyMiddleware(thunk, routerMiddleware(history)) // 使用routerMiddleware(history)实现使用 dispatch history actions，这样就可以使用push('/path/to/somewhere')去改变路由（这里的 push 是来自 connected-react-router 的）
);

export default store;
