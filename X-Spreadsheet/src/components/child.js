import React, { Component } from "react";
import propTypes from "prop-types";
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>{this.props.sendVal}</div>;
  }
}
Child.propTypes = {
  sendVal: propTypes.string,
};

export default Child;
