import React, { Component, Fragment } from "react";
// connect:连接
import { connect } from "react-redux";
import * as actionMethods from "./store/actionMethods";
class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initName: "随意",
      inputVal: "",
    };
    console.log(this.state);
  }
  render() {
    return (
      <Fragment>
        <h1>
          {this.state.initName}：{this.props.myName}
        </h1>
        <input
          type="输入内容"
          onChange={this.iptChange.bind(this)}
          placeholder={this.props.iptVal}
        />
        <button onClick={this.props.addList.bind(this)}>添加</button>
        <div>
          {this.props.list.map((item, index) => {
            return (
              <p key={index} onClick={this.props.reduceList.bind(this, index)}>
                {index}:{item}
              </p>
            );
          })}
        </div>
      </Fragment>
    );
  }
  iptChange(e) {
    this.setState({
      inputVal: e.target.value,
    });
  }
}

// 映射关系函数(state)
const stateToProps = (state) => {
  // 这里的state是store里面的数据
  // console.log(state);
  // return的对象是当前组件的this.props.xx
  return {
    iptVal: state.iptVal,
    list: state.list,
    myName: "庞彪",
  };
};
// 映射关系函数(action)
const actionToProps = (dispatch) => {
  return {
    // return的方法可以在当前组件中 通过this.props.xxx 进行调用
    addList() {
      let AddValue = this.state.inputVal;
      let action = actionMethods.AddAction(AddValue);
      dispatch(action);
    },
    reduceList(index) {
      let action = actionMethods.RuduceAction(index);
      dispatch(action);
    },
  };
};
export default connect(stateToProps, actionToProps)(List);
