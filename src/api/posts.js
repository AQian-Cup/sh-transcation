import { axios } from "../utils/axios";

export function posts(data) {
  return axios({
    url: "/post.do",
    method: "post",
    data,
  });
}

export function commentGet(data) {
  return axios({
    url: "/gettingReview.do",
    method: "post",
    data,
  });
}

export function comment(data) {
  return axios({
    url: "/comment.do",
    method: "post",
    data,
  });
}
