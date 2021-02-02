import React, { PureComponent } from "react";

import ReactEcharts from "echarts-for-react";

let sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let mouthObj = {
  "01": "一月份",
  "02": "二月份",
  "03": "三月份",
  "04": "四月份",
  "05": "五月份",
  "06": "六月份",
  "07": "七月份",
  "08": "八月份",
  "09": "九月份",
  10: "十月份",
  11: "十一月份",
  12: "十二月份",
};

// 2020
let data1 = [
  { value: 1111, year: 2020, type: "Onboard" },
  { value: 423, year: 2020, type: "Onboard" },
  { value: 301, year: 2020, type: "Onboard" },
  { value: 434, year: 2020, type: "Onboard" },
  { value: 990, year: 2020, type: "Onboard" },
  { value: 830, year: 2020, type: "Onboard" },
  { value: 511, year: 2020, type: "Onboard" },
  { value: 200, year: 2020, type: "Onboard" },
  { value: 764, year: 2020, type: "Onboard" },
  { value: 929, year: 2020, type: "Onboard" },
  { value: 423, year: 2020, type: "Onboard" },
  { value: 993, year: 2020, type: "Onboard" },
];
let data2 = [
  { value: 620, year: 2020, type: "Offer Accepted" },
  { value: 732, year: 2020, type: "Offer Accepted" },
  { value: 701, year: 2020, type: "Offer Accepted" },
  { value: 734, year: 2020, type: "Offer Accepted" },
  { value: 1090, year: 2020, type: "Offer Accepted" },
  { value: 1130, year: 2020, type: "Offer Accepted" },
  { value: 999, year: 2020, type: "Offer Accepted" },
  { value: 329, year: 2020, type: "Offer Accepted" },
  { value: 423, year: 2020, type: "Offer Accepted" },
  { value: 701, year: 2020, type: "Offer Accepted" },
  { value: 203, year: 2020, type: "Offer Accepted" },
  { value: 720, year: 2020, type: "Offer Accepted" },
];

// 2021
let data3 = [
  { value: 620, year: 2021, type: "Onboard" },
  { value: 732, year: 2021, type: "Onboard" },
  { value: 701, year: 2021, type: "Onboard" },
  { value: 734, year: 2021, type: "Onboard" },
  { value: 1090, year: 2021, type: "Onboard" },
  { value: 1130, year: 2021, type: "Onboard" },
  { value: 622, year: 2021, type: "Onboard" },
  { value: 200, year: 2021, type: "Onboard" },
  { value: 999, year: 2021, type: "Onboard" },
  { value: 329, year: 2021, type: "Onboard" },
  { value: 293, year: 2021, type: "Onboard" },
  { value: 423, year: 2021, type: "Onboard" },
];
let data4 = [
  { value: 203, year: 2021, type: "Offer Accepted" },
  { value: 555, year: 2021, type: "Offer Accepted" },
  { value: 271, year: 2021, type: "Offer Accepted" },
  { value: 634, year: 2021, type: "Offer Accepted" },
  { value: 190, year: 2021, type: "Offer Accepted" },
  { value: 320, year: 2021, type: "Offer Accepted" },
  { value: 311, year: 2021, type: "Offer Accepted" },
  { value: 902, year: 2021, type: "Offer Accepted" },
  { value: 992, year: 2021, type: "Offer Accepted" },
  { value: 329, year: 2021, type: "Offer Accepted" },
  { value: 423, year: 2021, type: "Offer Accepted" },
  { value: 271, year: 2021, type: "Offer Accepted" },
];

// 2022
let data5 = [
  { value: 420, year: 2022, type: "Onboard" },
  { value: 932, year: 2022, type: "Onboard" },
  { value: 601, year: 2022, type: "Onboard" },
  { value: 434, year: 2022, type: "Onboard" },
  { value: 690, year: 2022, type: "Onboard" },
  { value: 430, year: 2022, type: "Onboard" },
  { value: 911, year: 2022, type: "Onboard" },
  { value: 222, year: 2022, type: "Onboard" },
  { value: 799, year: 2022, type: "Onboard" },
  { value: 223, year: 2022, type: "Onboard" },
  { value: 429, year: 2022, type: "Onboard" },
  { value: 793, year: 2022, type: "Onboard" },
];
let data6 = [
  { value: 443, year: 2022, type: "Offer Accepted" },
  { value: 655, year: 2022, type: "Offer Accepted" },
  { value: 171, year: 2022, type: "Offer Accepted" },
  { value: 434, year: 2022, type: "Offer Accepted" },
  { value: 990, year: 2022, type: "Offer Accepted" },
  { value: 720, year: 2022, type: "Offer Accepted" },
  { value: 911, year: 2022, type: "Offer Accepted" },
  { value: 402, year: 2022, type: "Offer Accepted" },
  { value: 292, year: 2022, type: "Offer Accepted" },
  { value: 929, year: 2022, type: "Offer Accepted" },
  { value: 623, year: 2022, type: "Offer Accepted" },
  { value: 793, year: 2022, type: "Offer Accepted" },
];

export default class Simple extends PureComponent {
  getOption = () => {
    return {
      tooltip: {
        showDelay: 5, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },

        // 格式化toolTip的样式
        formatter: function (params) {
          // console.log(params);
          let showHtm = `<h3>${mouthObj[params[0].axisValue]}</h3>`;
          let year = "";
          let marker = "";
          let markerColor = "";
          let markerBorder = "";
          let Pheight = "";
          let nowYear = new Date().getFullYear();
          let lastYearGM = 0;
          let nowYearGM = 0;
          let YoY = 0;
          for (let i = 0; i < params.length; i++) {
            // 1.去年的总数怎么算？ 2.今年的总数怎么算？
            // 去年的;
            if (params[i].data.year === nowYear - 1) {
              // console.log(params[i].data.value);
              lastYearGM += params[i].data.value;
            }
            // 今年的
            if (params[i].data.year === nowYear) {
              nowYearGM += params[i].data.value;
            }

            if (i % 2 === 0) {
              year = params[i].data.year;
              Pheight = "10px";
            } else {
              year = "";
              Pheight = "20px";
            }
            markerColor =
              params[i]?.color === "white" ? "rgba(0,0,0,0)" : params[i].color;
            markerBorder =
              params[i]?.color === "white"
                ? `1px solid ${params[i - 1].color}`
                : `1px solid ${params[i].color}`;
            marker = `<span style="display:inline-block;margin-right:5px; width:20px;height:10px;background-color:${markerColor};border:${markerBorder}"></span>`;
            showHtm += `<p style="height:${Pheight}">
                          <span style="display:inline-block;width:45px">${year}</span>
                          ${marker}
                          ${params[i].data.type}：
                          ${params[i].data.value}
                        <p/> 
                       `;
          }

          // console.log(`去年的总GM:${lastYearGM}`);
          // console.log(`今年的总GM：${nowYearGM}`);

          if (lastYearGM > 0 && nowYearGM > 0) {
            YoY = ((nowYearGM - lastYearGM) / nowYearGM).toFixed(2);
            YoY = YoY > 0 ? "+" + YoY : YoY;
            // console.log(`同比为${YoY}`);
            showHtm += `<p>YoY ${YoY}% (今年对比去年)</p>`;
          }

          return showHtm;
        }.bind(this),
      },
      legend: {
        data: ["2020", "2021", "2022"],
        selected: {
          2020: false, //图例为‘2020’的一项默认置灰
          2021: true,
          2022: false,
        },
        // formatter: function (params) {
        //   console.log(params);
        //   return `<h1>1</h1>`;
        // },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
          ],
          splitLine: {
            show: false, //取消网格
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          splitLine: {
            show: false, //取消网格
          },
        },
      ],

      series: [
        // 2020
        {
          name: "2020",
          type: "bar",
          barWidth: 18,
          barCategoryGap: "100px",
          stack: "2020", //决定几根柱子叠在一起的key值 比如1和2两根 柱子 想叠在一起 就需要两根柱子的stack一致
          itemStyle: {
            normal: {
              color: "#83e39d", //柱子的颜色
              borderColor: "#83e39d", //柱子的边框
              // label: { // 柱子顶部的数据显示
              //   show: true, //开启显示
              //   position: "insideTop", //在上方显示
              //   textStyle: {]
              //     //数值样式
              //     color: "#aab1b8",
              //    fontSize: 9
              //   },
              // },
            },
          },
          emphasis: {
            focus: "series",
          },
          data: data1,
        },

        {
          name: "2020",
          type: "bar",
          barWidth: 18,
          stack: "2020",
          itemStyle: {
            normal: {
              color: "white",
              borderColor: "#83e39d",
              label: {
                show: true, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "#aab1b8",
                  fontSize: 9,
                },
                formatter: function (params) {
                  return (
                    data1[params.dataIndex].value +
                    data2[params.dataIndex].value
                  );
                },
              },
            },
          },
          emphasis: {
            focus: "series",
          },
          data: data2,
        },

        // 2021
        {
          name: "2021",
          type: "bar",
          barWidth: 18,
          stack: "2021",
          itemStyle: {
            normal: {
              color: "#669df6",
              borderColor: "#669df6",
            },
          },
          emphasis: {
            focus: "series",
          },
          data: data3,
        },
        {
          name: "2021",
          type: "bar",
          barWidth: 18,
          stack: "2021",
          itemStyle: {
            normal: {
              color: "white",
              borderColor: "#669df6",
              label: {
                show: true, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "#aab1b8",
                  fontSize: 9,
                },
                formatter: function (params) {
                  return (
                    data3[params.dataIndex].value +
                    data4[params.dataIndex].value
                  );
                },
              },
            },
          },
          emphasis: {
            focus: "series",
          },
          data: data4,
        },

        // 2022
        {
          name: "2022",
          type: "bar",
          barWidth: 18,
          stack: "2022",
          itemStyle: {
            normal: {
              color: "#fed949",
              borderColor: "#fed949",
            },
          },
          emphasis: {
            focus: "series",
          },
          data: data5,
        },
        {
          name: "2022",
          type: "bar",
          barWidth: 18,
          stack: "2022",
          itemStyle: {
            normal: {
              color: "white",
              borderColor: "#fed949",
              label: {
                show: true, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "#aab1b8",
                  fontSize: 9,
                },
                formatter: function (params) {
                  return (
                    data5[params.dataIndex].value +
                    data6[params.dataIndex].value
                  );
                },
              },
            },
          },
          emphasis: {
            focus: "series",
          },
          data: data6,
        },
      ],
    };
  };

  onEvents = {
    click: this.onChartClick,
  };

  onChartClick(e) {
    console.log(e);
  }

  componentDidMount() {
    let myCharts = this.refs.myCharts;
    console.log(myCharts);
    // myCharts.getZr().on("click", async (params) => {
    //   console.log(params);
    // });
  }

  render() {
    {
      console.log(this.getOption());
    }
    return (
      <div className="examples">
        <div className="parent">
          <ReactEcharts
            ref="myCharts"
            option={this.getOption()}
            style={{ height: "350px", width: "100%", marginTop: "200px" }}
            className="react_for_echarts"
            onEvents={this.onEvents}
          />
        </div>
      </div>
    );
  }
}
