import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    token: "",
  },
  mutations: {
    USERLOGIN(state, data) {
      state.username = data.username;
      state.token = data.token;
    },
  },
  actions: {
    userlogin({ commit }, data) {
      commit("USERLOGIN", data);
    },
  },
});
