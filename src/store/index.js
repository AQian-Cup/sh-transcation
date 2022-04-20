import Vue from "vue";
import Vuex from "vuex";
import api from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    account: "",
    homePosts: [],
  },
  mutations: {
    USERLOGIN(state, data) {
      state.account = data.Account;
      window.localStorage.setItem("token", data.token);
    },
    SHOW(state, data) {
      state.homePosts = data;
    },
    SEARCH(state, data) {
      state.homePosts = data;
    },
  },
  actions: {
    async userlogin({ commit }, data) {
      let res = await api.login.login(data);
      if (res.data.Mark == "登录成功") {
        data.token = res.data.Token;
        commit("USERLOGIN", data);
        return true;
      }
      if (res.data.Mark == "密码错误" || res.data.Mark == "账号不存在") {
        return false;
      }
    },
    async show({ commit }) {
      let res = await api.show.show();
      commit("SHOW", res.data);
    },
    async search({ commit }, data) {
      let res = await api.search.search(data);
      commit("SEARCH", res.data);
    },
  },
});
