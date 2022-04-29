import Vue from "vue";
import Vuex from "vuex";
import api from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    account: "",
    username: "",
    userPhoto: "",
    homePosts: [],
    searchPosts: [],
    replyUser: "",
  },
  mutations: {
    USERLOGIN(state, data) {
      window.localStorage.setItem("token", data.Token);
    },
    SHOW(state, data) {
      state.homePosts = data;
    },
    SEARCH(state, data) {
      state.searchPosts = data;
    },
    VERIFY(state, data) {
      if (data) {
        state.account = data.Account;
        state.username = data.Username;
        state.userPhoto = data.Photo_name
      }else{
        state.account = "";
        state.username = "";
        state.userPhoto = "";
      }
    },
    REPLY(state,data){
      state.replyUser = data
    },
  },
  actions: {
    async userlogin({ commit }, data) {
      let res = await api.choose.login(data);
      if (res.data.Account) {
        commit("USERLOGIN", res.data);
        return true;
      } else {
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
    async verify({ commit }) {
      let res = await api.person.verify();
      commit("VERIFY", res.data);
    },
    reply({commit},data){
      commit("REPLY",data)
    },
  },
});
