import { axios } from "../utils/axios";

export function login(data){
  return axios({
    url: "http://101.43.159.58:8080/hdtest03/mostView",
    method: "post",
    data,
  });
}