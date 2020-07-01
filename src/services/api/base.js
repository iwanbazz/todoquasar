import axios from "axios";

export default () => {
  return axios.create({
    baseURL: `https://quasar-5d950.et.r.appspot.com/todo`,
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
};
