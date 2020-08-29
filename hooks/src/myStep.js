import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import BlockIcon from "@material-ui/icons/Block";
import LensIcon from "@material-ui/icons/Lens";
import PanoramaFishEyeIcon from "@material-ui/icons/PanoramaFishEye";

const styles = {
  content: {
    width: "800px",
    height: "50px",
    lineHeight: "50px",
    display: "flex",
    textAlign: "center",
    "& div": {
      cursor: "pointer",
      transition: "all 0.2s",
    },
    "& svg": {
      color: "#3398dc",
      position: "relative",
      top: "5px",
      left: "-5px",
    },
  },
  stepItem: {
    flex: "1",
    borderTop: "2px solid #e0e0e0",
  },
  stepItemPass: {
    flex: "1",
    borderTop: "2px solid #3398dc",
  },
};
const arr = [];
class myStep extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //status==0 ? ACTIVE
      //status==1 ? INACTIVE
      //status==2 ? APPROVED
      //status==3 ? ON_HOLDING
      // ACTIVE 当前节点激活状态
      // INACTIVE 待激活状态
      // APPROVED 节点审批通过，可流转至下一节点
      // ON_HOLDING 流程暂停
      stepsObj: [
        { stepName: "ShortList", stepStatus: 2 },
        { stepName: "HRPS", stepStatus: 2 },
        { stepName: "HMPS1", stepStatus: 3 },
        { stepName: "HMPS2", stepStatus: 2 },
        { stepName: "HMPS3", stepStatus: 1 },
        { stepName: "HMPS4", stepStatus: 0 },
        { stepName: "HMPS5", stepStatus: 1 },
        { stepName: "HMPS6", stepStatus: 1 },
      ],
    };
  }
  stepChange = (item, index) => {
    const { stepsObj } = this.state;

    // 禁止点击状态
    if (item.stepStatus === 2 || item.stepStatus === 3) {
      return;
    }

    // 先重置全部可点击状态
    for (let [indexs, items] of stepsObj.entries()) {
      if (items.stepStatus === 0 || items.stepStatus === 1) {
        items.stepStatus = 1;
      }
    }
    // 再设置当前点击step状态
    stepsObj[index].stepStatus = 0;
    this.setState({
      stepsObj,
    });
  };
  render() {
    const { classes } = this.props;
    const { stepsObj } = this.state;
    return (
      <div className={classes.content}>
        {stepsObj.map((item, index) => {
          return (
            <div
              key={index}
              // 根据状态渲染 顶部边框
              className={
                item.stepStatus === 0 || item.stepStatus === 2
                  ? classes.stepItemPass
                  : classes.stepItem
              }
              onClick={this.stepChange.bind(this, item, index)}
            >
              {/* 根据状态渲染 icon和name */}
              <div>
                {/* ACTIVE -- 当前节点激活状态 */}
                {item.stepStatus === 0 && <LensIcon />}
                {/* INACTIVE -- 待激活状态 */}
                {item.stepStatus === 1 && <PanoramaFishEyeIcon />}
                {/* APPROVED -- 节点审批通过，可流转至下一节点 */}
                {item.stepStatus === 2 && <CheckCircleOutlineIcon />}
                {/* ON_HOLDING -- 流程暂停 */}
                {item.stepStatus === 3 && <BlockIcon />}
                <span>{item.stepName}</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default withStyles(styles)(myStep);
