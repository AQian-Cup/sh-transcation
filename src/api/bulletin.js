import { axios } from "../utils/axios";

export function bulletin() {
  return axios({
    url: "",
    method: "post",
  });
}