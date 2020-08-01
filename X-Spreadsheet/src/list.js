import React, { Component, Fragment } from "react";
import Eexl from "./components/exel";
import Echarts from "./components/echarts";
import Spreadsheet from "x-data-spreadsheet";
import XLSX from "xlsx";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExel: false,
      SpreadsheetObj: null,
      exsxData: null,
    };
  }
  render() {
    return (
      <Fragment>
        <button onClick={this.addExel.bind(this)}>
          {this.state.showExel ? "隐藏表格" : "显示表格"}
        </button>
        <button onClick={this.SaveExel.bind(this)}>生成exeal</button>
        <Eexl></Eexl>
        <Echarts></Echarts>
      </Fragment>
    );
  }
  addExel() {
    this.setState({
      showExel: !this.state.showExel,
    });
    let SpreadsheetObj;
    const options = {
      mode: "edit", // edit | read
      showToolbar: true,
      showGrid: true,
      showContextmenu: true,
    };
    console.log(this.state.showExel);
    // 先进行实例化
    if (this.state.showExel) {
      // this.state.SpreadsheetObj.addSheet("test");
      // this.state.SpreadsheetObj.sheet.toolbar = false;
      console.log(this.state.SpreadsheetObj.sheet);
      console.log(this.state.SpreadsheetObj.getData());
    } else {
      SpreadsheetObj = new Spreadsheet(
        document.querySelector("#spreadsheetDom"),
        options
      );
      this.setState({
        SpreadsheetObj: SpreadsheetObj,
      });
      SpreadsheetObj.change((val) => {
        let obj = val;
        console.log(obj);
      });
    }
  }
  setExeal() {
    let dataList = {
      cols: [
        { name: "A", key: 0 },
        { name: "B", key: 1 },
        { name: "C", key: 2 },
      ],
      data: [
        ["id", "name", "value"],
        [1, "sheetjs", 7262],
        [2, "js-xlsx", 6969],
      ],
    };
    // console.log(XLSX);
    let url = "./testFile.xlsx";
    let req = new XMLHttpRequest();
    let workbook = null;
    req.open("GET", url, true);
    req.responseType = "arraybuffer";
    req.onload = (e) => {
      let data = new Uint8Array(e.response);
      workbook = XLSX.read(data, { type: "array" });
      this.setState({
        exsxData: workbook,
      });
    };
    req.send();
    // let worksheet = XLSX.utils.aoa_to_sheet(dataList);
    // let new_workbook = XLSX.utils.book_new();
    // XLSX.utils.book_append_sheet(new_workbook, worksheet, "SheetJS");

    // XLSX.writeFile(dataList, "out.xlsx");
  }
  SaveExel() {
    XLSX.writeFile(this.state.exsxData, "out.xlsx");
    console.log(this.state);
  }

  componentDidMount() {
    this.setExeal();
  }
}

export default List;
