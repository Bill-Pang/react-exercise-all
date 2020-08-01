import React, { Component } from "react";
// const s = new Spreadsheet("#x-spreadsheet-demo", options);
// s.cellText(0, 1, "你好阿彪").cellText(1, 0, "再见阿彪").reRender();
// s.change((data) => {
//   console.log(this);
//   console.log(data);
// });
class Exel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div id="spreadsheetDom">
        <h1>I am spreadsheet</h1>
      </div>
    );
  }
}

export default Exel;
