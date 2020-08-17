import React, {
  useState,
  useEffect
 } from 'react'

 import axios from 'taro-axios';

import Taro, {
	navigateTo,
	redirectTo,
	switchTab
} from '@tarojs/taro'
import {
	View,
	Text,
	Button
} from '@tarojs/components'
import './index.less';

function Index() {
  const [status, setStatus] = useState(false);
  const [text, setText] = useState('');
  useEffect(() => {
    axios.get('http://127.0.0.1:9527/api/getInfo').then(function (response) {
      const {
        data: {
          name
        }
      } = response
      setText(name);
		});
  }, []);
	return (
		<View className="page-details">
			<Text className="page-details-text">
				{text} :
			</Text>
			<Text className="page-details-text">
				{status ? "显示" : "隐藏"}
			</Text>
			<Button
				onClick={() => {
					setStatus(!status);
				}}
			>
				切换
      </Button>
			<Button
				onClick={() => {
					navigateTo({
						url: "../../pages/PageIndex/index"
					});
				}}
			>
				navigateTo跳转到page首页
      </Button>
			<Button
				onClick={() => {
					redirectTo({
						url: "../../pages/PageIndex/index"
					});
				}}
			>
				redirectTo跳转到page首页
      </Button>
			<Button
				onClick={() => {
					switchTab({
						url: "../../pages/index/index"
					});
				}}
			>
				redirectTo跳转到tabbar首页
      </Button>
		</View>
	);
}

export default Index;
