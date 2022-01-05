import api from "../api/api";

const URL = "/validate";

export const authenticationAPI = () => {
    const singIn = (formData) => {
        return api
            .post(`${URL}`, formData)
            .then(({data}) => {
                return data;
            })
            .catch((err) => {
                return [];
            });
    };

    return {
        singIn,
    }
};
