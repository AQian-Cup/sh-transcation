import { axios } from "../utils/axios";

export function message(){
  return axios({
    url:"/mynew.do",
    method:"post"
  })
}