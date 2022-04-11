import { axios } from "../utils/axios";

export function imageRes(data){
  return axios({
    url:"/invimg2.do",
    method:"post",
    responseType:"arraybuffer",
    data
  })
}