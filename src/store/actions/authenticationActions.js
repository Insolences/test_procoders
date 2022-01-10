import { authenticationTypes } from "./types";
import { authenticationAPI } from "../../api/authentication";
import notificationActions from "./notificationActions";

const signIn = () => {
  return { type: authenticationTypes.SIGN_IN };
};

const signInSuccess = (payload) => {
  return { type: authenticationTypes.SIGN_IN_SUCCESS, payload };
};

const signInFail = () => {
  return { type: authenticationTypes.SIGN_IN_FAIL };
};

const signOut = () => {
  return { type: authenticationTypes.SIGN_OUT };
};

const requestSignIn = (formData) => {
  const api = authenticationAPI();

  return async (dispatch) => {
    const { status, message, data } = await api.signIn(formData);

    if (status === "err") {
      dispatch(signInFail());
      return dispatch(notificationActions.error(message));
    }

    dispatch(notificationActions.success("Login success!"));
    dispatch(signInSuccess({ status, data }));
  };
};

const authenticationActions = {
  signIn,
  signOut,
  requestSignIn,
  signInSuccess,
  signInFail,
};

export default authenticationActions;
