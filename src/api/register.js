import { axios } from "../utils/axios";

export function register(data) {
  return axios({
    url: "/register.do",
    method: "post",
    data,
  });
}
