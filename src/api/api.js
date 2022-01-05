import axios from "axios";
import configs from "../config";
const { apiRootUrl } = configs;

export const api = axios.create({
    baseURL: apiRootUrl,
});

export default api;
