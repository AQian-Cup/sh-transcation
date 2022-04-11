import { axios } from "../utils/axios";

export function imageReq(data){
  return axios({
    url:"/invimg.do",
    method:"post",
    data
  })
}