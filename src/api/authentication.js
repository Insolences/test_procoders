import api from "../api/api";

const URL = "/validate";

export const authenticationAPI = () => {
  const signIn = (formData) => {
    return api
      .post(`${URL}`, formData)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        return [];
      });
  };

  return {
    signIn,
  };
};
