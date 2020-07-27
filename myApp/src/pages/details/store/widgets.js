/**
 * 这里使用redux的ducks模式将reducer和actions还有常量放到一起,避免了,多个
 * 文件自改起来的麻烦,和繁琐
 */

/**
 * 常量
 * 全部次数
 */
const ALL_DATA = "ALL_DATA";
// 详情点击次数
const DETAILS_DATA = "DETAILS_DATA";

/**
 * reducer
 * 这个模式下reducer 使用export default 唯一暴露
 */
const defaultState = {
  data: 0,
  detailsData: 0
};

export default (state = defaultState, action) => {
  const {
    type,
    data,
    detailsData
  } = action;
  switch (type) {
    case ALL_DATA:
      return { ...state, data };
    case DETAILS_DATA:
      return { ...state, detailsData };
    default:
      return state;
  }
};

/**
 * 全部页面更新数据
 * @param data 更新的数据
 */
export const updateData = data => {
  return (dispatch) => {
    dispatch({
      type: ALL_DATA,
      data
    });
  };
};

/**
 * 更新数据
 * @param detailsData 更新的数据
 */
export const updateDetailsData = detailsData => {
  return (dispatch) => {
    dispatch({
      type: DETAILS_DATA,
      detailsData
    });
  };
};
