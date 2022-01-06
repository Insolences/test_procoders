import api from "../api/api";

const URL = "/user-info";

export const userAPI = () => {
  const getUserInfo = (id) => {
    return api
      .get(`${URL}/${id}`)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return [];
      });
  };

  return {
    getUserInfo,
  };
};
