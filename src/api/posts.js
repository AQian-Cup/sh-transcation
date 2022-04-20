import { axios } from "../utils/axios";

export function posts(data){
  return axios({
    url:"/fullInv.do",
    method:"post",
    data
  })
}