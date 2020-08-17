export default {
  pages: [
    "pages/PageDetails/index", 
    "pages/PageIndex/index",  
    "pages/index/index", 
    "pages/details/details"
  ],
  tabBar: {
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
      },
      {
        pagePath: "pages/details/details",
        text: "详情",
      },
    ],
    color: "#000",
    selectedColor: "#56abe4",
    backgroundColor: "#fff",
    borderStyle: "white",
  },
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
};
