import { axios } from "../utils/axios";

export function person(data){
  return axios({
    url:"/setting.do",
    method:"post",
    data
  })
}