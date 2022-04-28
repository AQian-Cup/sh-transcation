import { axios } from "../utils/axios";

export function login(data) {
  return axios({
    url: "login.do",
    method: "post",
    data,
  });
}

export function register(data) {
  return axios({
    url: "/register.do",
    method: "post",
    data,
  });
}
