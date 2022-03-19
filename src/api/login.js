import { axios } from "../utils/axios";

export function login(data){
  return axios({
    url: "",
    method: "post",
    data,
  });
}
