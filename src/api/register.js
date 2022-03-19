import { axios } from "../utils/axios";

export function register(data) {
  return axios({
    url: "",
    method: "post",
    data,
  });
}
