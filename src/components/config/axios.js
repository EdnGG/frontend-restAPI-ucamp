import axios from "axios";
// const isLocal = true;

// const clientAxios = axios.create({
//   baseURL: isLocal
//     ? process.env.REACT_APP_LOCAL_URL
//     : process.env.REACT_APP_CLOUD_URL_RENDER,
// });

const clientAxios = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: process.env.REACT_APP_CLOUD_URL_RENDER,
});

export default clientAxios;
