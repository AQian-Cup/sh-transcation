import { axios } from "../utils/axios";

export function register(data) {
  return axios({
    url: "http://82.157.131.115:8080/prepare_ZS/register.do",
    method: "post",
    data,
  });
}
