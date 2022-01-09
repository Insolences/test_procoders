import { userTypes } from "./types";
import notificationActions from "./notificationActions";
import { userAPI } from "../../api/user";

const initUser = (payload) => {
  return { type: userTypes.GET_USER, payload };
};

const getUser = (id) => {
  const api = userAPI();

  return async (dispatch) => {
    const { status, message, data } = await api.getUserInfo(id);

    if (status === "err") {
      return dispatch(
        notificationActions.error({ status, statusText: message })
      );
    }

    dispatch(initUser({ status, data }));
  };
};

const userActions = {
  initUser,
  getUser,
};

export default userActions;
