import { axios } from "../utils/axios";

export function user(data){
  return axios({
    url:"addinvitaion.do",
    method:"get",
    data
  })
}