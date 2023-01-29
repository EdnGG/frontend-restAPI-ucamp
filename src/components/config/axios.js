import axios from "axios";
const isLocal = false;

const clientAxios = axios.create({
  baseURL: isLocal
    ? process.env.REACT_APP_LOCAL_URL
    : process.env.REACT_APP_CLOUD_URL_RENDER,
});

export default clientAxios;
