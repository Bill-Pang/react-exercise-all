import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  NavLink,
  Prompt,
} from "react-router-dom";
import Echarts from "./components/echarts";
import Exel from "./components/exel";
import NoMatch from "./components/noMatch";
import RedirectRoute from "./components/redirectRoute";
import navLinkDom from "./components/navLink";
import Child from "./components/child";
import Word from "./components/word";
import "./router.css";

class RouteDom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendVal: "传递的值",
    };
    // console.log(this);
    // 编程式路由重定向（用于复杂场景）
    // this.props.history.push("/redirectRoute");
  }

  render() {
    return (
      <Router>
        {/* <Word></Word> */}
        <Child sendVal={this.state.sendVal}></Child>
        {/* 每次切换路由时 进行提示 MemoryRouter路由模式，<Prompt>不起作用。 */}
        {/* <Prompt message="残忍离开？" /> */}
        {/* Redirect路由重定向 */}
        {/* <Redirect from="/" to="/redirectRoute" /> */}
        <ul>
          {/* Link 为路由的跳转 类似于a标签 */}
          <li>
            <Link to="/index">Echarts</Link>
          </li>

          <li>
            <Link to="/exel">X-Spreadsheet</Link>
          </li>
          <li>
            <NavLink to="/navLink" activeClassName="blue">
              Jspanga
            </NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/redirectRoute" component={RedirectRoute}></Route>
          <Route path="/index" component={Echarts} />
          <Route path="/exel" component={Exel}></Route>
          <Route path="/navLink" component={navLinkDom}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </Router>
    );
  }
}

export default RouteDom;
