import axios from "axios";
import configs from "../config";
import { store } from "../store";
import authenticationActions from "../store/actions/authenticationActions";
const { apiRootUrl } = configs;

export const api = axios.create({
  baseURL: apiRootUrl,
});

api.interceptors.response.use(
  (res) => res.data,
  (error) => {
    if (error.response?.status === 401) {
      store.dispatch(authenticationActions.singOut());
    }

    return Promise.reject(error);
  }
);

export default api;
