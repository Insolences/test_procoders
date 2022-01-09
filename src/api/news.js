import api from "../api/api";

const URL = "/news";

export const newsAPI = () => {
  const getNews = () => {
    return api
      .get(`${URL}`)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return [];
      });
  };

  return {
    getNews,
  };
};
