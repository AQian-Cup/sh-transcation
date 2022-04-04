import { axios } from "../utils/axios";

export function show() {
  return axios({
    url: "http://82.157.131.115:8080/prepare_ZS/recommend.do",
    method: "post",
  });
}