/**
 * 这里使用redux的ducks模式将reducer和actions还有常量放到一起,避免了,多个
 * 文件自改起来的麻烦,和繁琐
 */

/**
 * 常量
 * 增行
 */
const ALL_DATA = "ALL_DATA";

/**
 * reducer
 * 这个模式下reducer 使用export default 唯一暴露
 */
const defaultState = {
  data: 0
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ALL_DATA:
      return { ...state, data: action.data };
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
