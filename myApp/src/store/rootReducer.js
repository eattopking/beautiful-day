import { combineReducers } from "redux";
import details from "../pages/details/store/widgets";
import index from "../pages/index/store/widgets";
// 整合reducer
export default combineReducers({ details, index });
