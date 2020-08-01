import React, { Component, Fragment } from "react";
class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Fragment>
        {this.props.moodList.map((item, index) => (
          <p key={index} onClick={this.deal.bind(this, index)}>
            {index}:{item.say}
          </p>
        ))}
      </Fragment>
    );
  }
  deal(index) {
    this.props.delList(index);
  }
}

export default List;

// function List(props) {
//   function deal(index) {
//     props.moodList.splice(index, 1);
//     console.log(props.moodList);
//   }
//   return props.moodList.map((item, index) => (
//     <p key={index} onClick={deal.bind(this, index)}>
//       {index}:{item.say}
//     </p>
//   ));
// }

// export default List;
