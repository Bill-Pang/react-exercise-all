import React from "react";
import store from "./store";
import List from "./list";
import { Provider } from "react-redux";
import "./App.css";
import "handsontable/dist/handsontable.full.css";
// import "./i18n.js";
const App = () => (
  // Provider:提供者 对要使用store的组件进行包裹，通过store={store} 把仓库传递就进去 结构清晰
  // 是react-redux的中间件
  <Provider store={store}>
    <List></List>
  </Provider>
);

export default App;
