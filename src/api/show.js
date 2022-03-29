import { axios } from "../utils/axios";

export function show() {
  return axios({
    url: "123",
    method: "post",
  });
}