import React, { useState } from "react";
import Taro, { 
	navigateBack
 } from "@tarojs/taro";
import {
	View,
	Text,
	Button
} from "@tarojs/components";
import "./index.less";

function Index() {
	const [
		status, 
		setStatus
	] = useState(false);

	return (
		<View className="page-index">
			<Text className="page-index-text">
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
					navigateBack({
						delta: 1
					});
				}}
			>
				navigateBack回到到page详情
      </Button>
		</View>
	);
}

export default Index;
