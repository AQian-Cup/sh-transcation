import { axios } from "../utils/axios";

export function releaseImg(data){
  return axios({
    url: "/releaseImg.do",
    method: "post",
    data,
  });
}