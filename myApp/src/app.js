import React, { Component } from "react";
import { Provider } from "react-redux";
import { getStore } from "./store";
import "./app.less";

const store = getStore();

class App extends Component {
  // this.props.children 是将要会渲染的页面
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}

export default App;
