import { axios } from "../utils/axios";

export function show() {
  return axios({
    url: "/recommend.do",
    method: "post",
  });
}