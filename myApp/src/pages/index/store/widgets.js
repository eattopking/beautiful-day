/**
 * 这里使用redux的ducks模式将reducer和actions还有常量放到一起,避免了,多个
 * 文件自改起来的麻烦,和繁琐
 */

/**
 * 常量
 * 全部数据
 */
const ALL_DATA = "ALL_DATA";

// 首页点击次数
const INDEX_DATA = "INDEX_DATA";

/**
 * reducer
 * 这个模式下reducer 使用export default 唯一暴露
 */
const defaultState = {
  data: 0,
  indexData: 0
};

export default (state = defaultState, action) => {
  const {
    type,
    data,
    indexData
  } = action;
  switch (type) {
    case ALL_DATA:
      return { ...state, data };
    case INDEX_DATA:
      return { ...state, indexData };
    default:
      return state;
  }
};

/**
 * 更新数据
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
 * @param indexData 更新的数据
 */
export const updateIndexData = indexData => {
  return (dispatch) => {
    dispatch({
      type: INDEX_DATA,
      indexData
    });
  };
};
