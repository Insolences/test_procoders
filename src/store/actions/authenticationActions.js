import { authenticationTypes } from "./types";
import { authenticationAPI } from "../../api/authentication";
import notificationActions from "./notificationActions";

const singIn = () => {
  return { type: authenticationTypes.SING_IN };
};

const singInSuccess = (payload) => {
  return { type: authenticationTypes.SING_IN_SUCCESS, payload };
};

const singInFail = () => {
  return { type: authenticationTypes.SING_IN_FAIL };
};

const singOut = () => {
  return { type: authenticationTypes.SING_OUT };
};

const requestSignIn = (formData) => {
  const api = authenticationAPI();

  return async (dispatch) => {
    const { status, message, data } = await api.singIn(formData);

    if (status === "err") {
      dispatch(singInFail());
      return dispatch(notificationActions.error(message));
    }

    dispatch(notificationActions.success("Login success!"));
    dispatch(singInSuccess({ status, data }));
  };
};

const authenticationActions = {
  singIn,
  singOut,
  requestSignIn,
  singInSuccess,
  singInFail,
};

export default authenticationActions;
