import { axios } from "../utils/axios";

export function verify() {
  return axios({
    url: "verify.do",
    method: "post",
  });
}

export function getting() {
  return axios({
    url: "gettingInf.do",
    method: "post",
  });
}

export function setting(data) {
  return axios({
    url: "/setting.do",
    method: "post",
    data,
  });
}
