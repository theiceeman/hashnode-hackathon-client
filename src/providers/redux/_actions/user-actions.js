import { setLocalStorage } from "lib/general/helper-functions";
import {
  UserAuthConstants,
  themeModeConstants,
} from "../_constants/user-auth-constants";

const { LIGHT_MODE, DARK_MODE } = themeModeConstants;

const {
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
} = UserAuthConstants;

export const authenticateUser = (data) => async (dispatch) => {
  console.log("authenticating user..");
  dispatch({ type: USER_AUTH_REQUEST });

  dispatch({ type: USER_AUTH_SUCCESS, payload: data });
  console.log("_actions", data);
};

export const setThemeMode = (data) => async (dispatch) => {
  console.log("setting theme mode..");
  data === "light"
    ? dispatch({ type: LIGHT_MODE })
    : dispatch({ type: DARK_MODE });
  setLocalStorage('user_theme', data);
};
