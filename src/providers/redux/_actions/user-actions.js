import { UserAuthConstants } from "../_constants/user-auth-constants";

const {
  USER_AUTH_REQUEST,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAILURE,
  FETCH_USER_DATA_REQUEST,
  FETCH_USER_DATA_SUCCESS,
  FETCH_USER_DATA_FAILURE,
} = UserAuthConstants;

export const authenticateUser = (data) => async (dispatch) => {
  console.log("authenticating user..");
  dispatch({ type: USER_AUTH_REQUEST });

  dispatch({ type: USER_AUTH_SUCCESS, payload:data });
  // console.log(data)
};
