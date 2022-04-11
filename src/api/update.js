import { axios } from "../utils/axios";

export function update(data) {
  return axios({
    url: "/addinvitation.do",
    method: "post",
    data,
  });
}
