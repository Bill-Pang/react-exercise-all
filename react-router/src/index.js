import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

class Bar extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return <div>Bar</div>;
  }
}

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { idx: 1 };
  }

  handleClick = () => {
    this.setState((state) => ({ idx: state.idx + 1 }));
  };

  render() {
    return (
      <div>
        <div>
          {this.state.idx}
          <button onClick={this.handleClick}>add</button>
        </div>
        <div>
          <BrowserRouter>
            {/* 
component={组件} 组件直接挂载到router下面，
component = {()=>{组件}} 等于 每次都会去调用组件下的生命周期
render={()=>{组件}}本身就是个组件，
组件内部在引用你定义的组件，相当于又加了一层； */}
            <Route
              path="/"
              exact
              component={() => <Bar idx={this.state.idx} />}
            />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
