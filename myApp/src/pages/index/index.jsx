import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Taro from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import * as indexActions from './store/widgets';
import './index.less'

class Index extends Component {

  constructor(props) {
    super(props);
    const {
      dispatch
     } = props;
    // action集合
    this.actions = bindActionCreators(indexActions, dispatch);
  }

  componentWillMount() {
    console.log('初始化componentWillMount');
  }

  componentDidShow () {
    console.log('程序启动，或从后台进入前台显示时触发');
  }

  componentDidMount() {
    console.log('首次componentDidMount');
  }

  componentDidHide () {
     console.log('从前台切后台时触发');
  }

  componentDidNotFound() {
    console.log('程序要打开的页面不存在时触发');
  }

  componentDidCatchError() {
    console.log('监听报错');
  }

  componentWillUnmount () {
    console.log('程序卸载');
  }
  // 还有一些特定小程序的事件就不一一列举了， 有兴趣可以自己看看
  handleClick = () => {
    const {
      data,
      indexData
    } = this.props;
    const {
      updateData,
      updateIndexData
    } = this.actions;
    updateData(data + 1);
    updateIndexData(indexData + 1);
  }

  render () {
    const {
      data,
      indexData
    } = this.props;
    return (
      <View className='index'>
        <Text className='index-text'>
          {`首页点击${indexData}次`}
        </Text>
        <Text className='index-text'>
          {`所有页面点击共${data}次`}
        </Text>
        <Button onClick={this.handleClick}>
          增加主页点击次数
        </Button>
      </View>
    )
  }
}

// 将store上的state同步到props上
const mapStateToProps = state => {
  const {
    data,
    indexData
  } = state.index;
  return {
    data,
    indexData,
  };
};

export default connect(mapStateToProps)(Index);
