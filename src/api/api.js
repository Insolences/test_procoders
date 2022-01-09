import axios from "axios";
import configs from "../config";
import { store } from "../store";
import authenticationActions from "../store/actions/authenticationActions";
import notificationActions from "../store/actions/notificationActions";
const { apiRootUrl } = configs;

export const api = axios.create({
  baseURL: apiRootUrl,
});

api.interceptors.response.use(
  (res) => res.data,
  (error) => {
    if (error.response?.status === 400) {
      store.dispatch(authenticationActions.singOut());
      store.dispatch(
        notificationActions.error({
          message: `${error.response.status} Something wrong`,
        })
      );
    }

    return Promise.reject(error);
  }
);

export default api;
