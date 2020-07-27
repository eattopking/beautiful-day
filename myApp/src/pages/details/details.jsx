import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Text, Button } from "@tarojs/components";
import * as detailsActions from "./store/widgets";
import "./index.less";

class Details extends Component {
  constructor(props) {
    super(props);
    const { dispatch } = props;
    // action集合
    this.actions = bindActionCreators(detailsActions, dispatch);
  }

  componentWillMount() {
    console.log("初始化componentWillMount");
  }

  componentDidMount() {
    console.log("首次componentDidMount");
  }

  componentDidShow() {
    console.log(" componentDidShow 程序启动，或从后台进入前台显示时触发");
  }

  onReady() {
    console.log("onReady 小程序的生命周期， 程序启动页面渲染完毕");
  }

  componentDidHide() {
    console.log("componentDidHide 从前台切后台时触发");
  }

  componentDidNotFound() {
    console.log(" componentDidNotFound 程序要打开的页面不存在时触发");
  }

  componentDidCatchError() {
    console.log("监听报错");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount 程序卸载");
  }
  // 还有一些特定小程序的事件就不一一列举了， 有兴趣可以自己看看

  // 还有一些特定小程序的事件就不一一列举了， 有兴趣可以自己看看
  handleClick = () => {
    const {
      data
    } = this.props;
    this.actions.updateData(data + 1);
  }

  render() {
    const {
      data
    } = this.props;
    return (
      <View className="details">
        <Text className="details-text">{`详情点击${data}次`}</Text>
        <Button onClick={this.handleClick}>增加详情点击次数</Button>
      </View>
    );
  }
}

// 将store上的state同步到props上
const mapStateToProps = (state) => {
  return {
    data: state.details.data,
  };
};

export default connect(mapStateToProps)(Details);
