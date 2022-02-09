// REDUCERS
import { combineReducers } from "redux";
import {  themeModeReducer, UserAuthReducer } from "./user-auth-reducer";

export default combineReducers({
  UserAuth: UserAuthReducer,
  themeMode: themeModeReducer,
});
