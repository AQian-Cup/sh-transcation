import { axios } from "../utils/axios";

export function show() {
  return axios({
    url: "test",
    method: "post",
  });
}