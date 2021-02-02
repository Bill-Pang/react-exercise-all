import React from "react";
import ReactDOM from "react-dom";

import Charts from "./com/charts";

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = { idx: 1 };
  }

  render() {
    return (
      <>
        <Charts />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
