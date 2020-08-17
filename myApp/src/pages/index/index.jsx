import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Taro, { 
  navigateTo
 } from '@tarojs/taro'
import {
  View,
  Text,
  Button
} from '@tarojs/components'
import * as indexActions from './store/widgets';
import './index.less';

class Index extends Component {

  constructor(props) {
    console.log(Taro.ENV_TYPE);
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
    console.log('componentDidShow程序启动，或从后台进入前台显示时触发');
  }

  componentDidMount() {
    console.log('首次componentDidMount', window);
  }

  componentDidHide () {
     console.log('componentDidHide从前台切后台时触发');
  }

  componentDidNotFound() {
    console.log('componentDidNotFound程序要打开的页面不存在时触发');
  }

  componentDidCatchError() {
    console.log('componentDidCatchError监听报错');
  }

  componentWillUnmount () {
    console.log('componentWillUnmount程序卸载');
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

  handleCreateCtn = () => {
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
          <Button onClick={() => {
            navigateTo({
              url: "../../pages/PageDetails/index"
            })
          }}>
            navigateTo跳到page详情
          </Button>
        </View>
      );
  }

  render () {
    return this.handleCreateCtn();
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
