import { axios } from "../utils/axios";

export function login(data){
  return axios({
    url: "login.do",
    method: "post",
    data,
  });
}