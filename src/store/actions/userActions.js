import { userTypes } from "./types";
import notificationActions from "./notificationActions";
import { userAPI } from "../../api/user";

const getUser = (payload) => {
  console.log(payload);
  return { type: userTypes.GET_USER, payload };
};

const requestUserInfo = (id) => {
  const api = userAPI();

  return async (dispatch) => {
    const { status, message, data } = await api.getUserInfo(id);
    console.log("CHECK: ", status, data);
    if (status === "err") {
      return dispatch(
        notificationActions.error({ status, statusText: message })
      );
    }

    dispatch(getUser({ status, data }));
  };
};

const userActions = {
  getUser,
  requestUserInfo,
};

export default userActions;
