import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import * as indexActions from './store/widgets';
import './index.less'

class Index extends Component {

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

  render () {
    return (
      <View className='index'>
        <Text onClick={() => {
          Taro.navigateTo({ url: '/pages/details/details' })
        }}>Hello world!</Text>
      </View>
    )
  }
}

// 将store上的state同步到props上
const mapStateToProps = state => {
  return {
    rows: state.index.rows,
  };
};

export default connect(mapStateToProps)(Index);
