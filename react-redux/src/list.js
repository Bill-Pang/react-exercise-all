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
  }
  render() {
    console.log(this.props);
    // 进行解构 优化代码
    let { iptVal, reduceList } = this.props;
    return (
      <Fragment>
        <h1>
          {this.state.initName}：{this.props.myName}
        </h1>
        <input
          type="输入内容"
          onChange={this.iptChange.bind(this)}
          placeholder={iptVal}
        />
        <button onClick={this.props.addList.bind(this)}>添加</button>
        <div>
          {this.props.list.map((item, index) => {
            return (
              <p key={index} onClick={reduceList.bind(this, index)}>
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
// 总的来说就是 把store的state和action添加到当前的组件的props中，并直接调用，先用哪个调哪个 比较灵活
export default connect(stateToProps, actionToProps)(List);
