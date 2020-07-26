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
  rows: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ALL_DATA:
      return { ...state, rows: action.data };
    default:
      return state;
  }
};

/**
 * 给表格设置数据
 * @param rows 表格数据
 */
export const setAllData = rows => {
  return (dispatch) => {
    dispatch({
      type: ALL_DATA,
      data: rows
    });
  };
};
