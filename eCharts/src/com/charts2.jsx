import React, { Component } from "react";
const echarts = require("echarts");
class Charts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: {
        title: {
          text: "ECharts 入门示例",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    };
  }
  componentDidMount() {
    // 基于准备好的dom，初始化echarts实例
    const MyChart = echarts.init(document.getElementById("main")); // 绘制图表
    let option = {
      title: {
        text: "ECharts 入门示例",
      },
      tooltip: {},
      legend: {
        data: ["销量"],
      },
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    MyChart.setOption(option);
  }
  render() {
    return (
      <div>
            <div id="main" style={{ width: 400, height: 400 }}></div>
      </div>
    );
  }
}

export default Charts;
