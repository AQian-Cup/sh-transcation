import { axios } from "../utils/axios";

export function image(data){
  return axios({
    url:"/invimg2.do",
    method:"post",
    responseType:"arraybuffer",
    data
  })
}