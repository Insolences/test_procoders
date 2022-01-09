import { newsTypes } from "./types";
import notificationActions from "./notificationActions";
import { newsAPI } from "../../api/news";

const initNews = (payload) => {
  return { type: newsTypes.GET_NEWS, payload };
};

const getNews = () => {
  const api = newsAPI();

  return async (dispatch) => {
    const { status, message, data } = await api.getNews();

    if (status === "err") {
      return dispatch(
        notificationActions.error({ status, statusText: message })
      );
    }

    dispatch(initNews({ status, data }));
  };
};

const newsActions = {
  initNews,
  getNews,
};

export default newsActions;
