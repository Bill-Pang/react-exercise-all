import React, { Component } from "react";
import "./App.css";
import store from "./store";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    store.subscribe(this.listenner.bind(this));
  }
  render() {
    return (
      <div className="App">
        <h1>Hello,combineReducer</h1>
        <hr />
        <div className="listReducer">
          listReducer:
          <button onClick={this.addList.bind(this)}>add</button>
          {this.state.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </div>
        <br />
        <div className="infoReducer">
          infoReducer:
          <button onClick={this.addObj.bind(this)}>add</button>
          <p>
            <strong>name：</strong>
            {this.state.info.name}
          </p>
          <p>
            <strong>six：</strong> {this.state.info.six}
          </p>
          <p>
            <strong>skills：</strong>
            {this.state.info.skill.map((item, index) => {
              return <span key={index}>{item}、</span>;
            })}
          </p>
          {this.state.info.lover && (
            <p>
              <strong>lover:</strong>
              {this.state.info.lover}
            </p>
          )}
        </div>
      </div>
    );
  }
  addList() {
    const action = {
      type: "add",
      value: Math.floor(Math.random() * 10),
    };
    store.dispatch(action);
  }
  addObj() {
    const action = {
      type: "addObj",
    };
    store.dispatch(action);
  }
  listenner() {
    this.setState(store.getState());
  }
}

export default App;
