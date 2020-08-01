import React, { Component } from "react";
import { push } from "connected-react-router";
import store from "./store/index";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        你好?
        <button onClick={this.goRouter.bind(this)}>点我调整</button>
      </div>
    );
  }
  goRouter() {
    store.dispatch(push("/sss"));
  }
}

export default App;
