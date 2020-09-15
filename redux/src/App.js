import React, { Component, Fragment } from "react";
import "./App.css";
import List from "./view/list";
import Addlist from "./view/addlist";
import store from "./store";
import axios from "axios";
import * as actionMethods from "./store/actionMethods";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.storeChange.bind(this));
    this.state = {
      moodList: [],
    };
  }
  render() {
    return (
      <Fragment>
        <h1>{this.state.inputVal}</h1>
        <Addlist addList={this.addList}></Addlist>
        <List moodList={this.state.moodList} delList={this.dealList}></List>
      </Fragment>
    );
  }
  getMoodFromRudex() {
    axios.get("http://biaoblog.run:3000/blogData/mood").then((res) => {
      const action = actionMethods.GetMood(res.data.message);
      store.dispatch(action);
    });
  }
  storeChange() {
    this.setState(store.getState());
  }
  dealList(index) {
    let action = actionMethods.DealList(index);
    store.dispatch(action);
  }
  addList(value) {
    let action = actionMethods.AddList(value);
    store.dispatch(action);
  }
  componentDidMount() {
    // 通过dispatch 把 thunk的GetMoodThunk方法传递过去并调用
    // react-thunk的使用体验：
    // 可以把一些数据请求和处理都放入redux中进行处理
    // 算是一种规范，对于自动化测试也比较友好（暂时还没搞明白）。
    // 以前的action是对象，现在的action可以是函数

    // 之前：
    store.dispatch(actionMethods.GetMoodThunk());
    // 之后：
    store.dispatch(actionMethods.GetMoodThunk());
  }
}

export default App;
