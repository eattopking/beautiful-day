import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

// 获取store的方法
export const getStore = defaultState => createStore(rootReducer, defaultState, applyMiddleware(thunk));

