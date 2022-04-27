import { axios } from "../utils/axios";

export function release(data) {
  return axios({
    url: "/release.do",
    method: "post",
    data,
  });
}
