import { axios } from "../utils/axios";

export function comment(data) {
  return axios({
    url: "",
    method: "post",
    data,
  });
}
