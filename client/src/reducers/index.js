import { combineReducers } from "redux";

import authReducer from "./AuthReducer";
import postReducer from "./postReducer";
import chatReducer from "./ChatUserReducer";

export const reducers = combineReducers({authReducer,postReducer, chatReducer})