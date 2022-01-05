import { newsTypes } from "./types";
import notificationActions from "./notificationActions";
import { newsAPI } from "../../api/news";

const getNews = (payload) => {
    return { type: newsTypes.GET_NEWS, payload };
};

const requestNews = () => {
    const api  = newsAPI()

    return async (dispatch) => {
        const {status, message, data} = await api.getNews();
        console.log('message: ',await api.getNews())
        if (status==='err') {
            return dispatch(
                notificationActions.error({status, statusText:message}),
            );
        }

        dispatch(getNews({status, data}));
    };
};

const newsActions = {
    getNews,
    requestNews
};

export default newsActions;