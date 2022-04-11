import Vue from "vue";
import Vuex from "vuex";
import api from "../api"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    account: "",
  },
  mutations: {
    USERLOGIN(state, data) {
      state.account = data.Account;
      window.localStorage.setItem("token", data.token);
    },
  },
  actions: {
    async userlogin({ commit }, data) {
      let res = await api.login.login(data)
      data.token = res.data.Token
      commit("USERLOGIN", data);
    },
  },
});
