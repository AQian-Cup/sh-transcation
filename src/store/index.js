import Vue from "vue";
import Vuex from "vuex";
import api from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    account: "",
    username: "",
    userPhoto: "",
    error:"",
    homePosts: [],
    searchPosts: [],
    replyUser: "",
  },
  mutations: {
    USERLOGIN(state, data) {
      if (data.Token) {
        window.localStorage.setItem("token", data.Token);
      }else {
        state.error = data.Result
      }
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
        state.userPhoto = data.Photo_name;
      } else {
        state.account = "";
        state.username = "";
        state.userPhoto = "";
      }
    },
    REPLY(state, data) {
      state.replyUser = data;
    },
    CLEAR(state){
      state.error = ""
    }
  },
  actions: {
    async userlogin({ commit }, data) {
      let res = await api.choose.login(data);
      commit("USERLOGIN", res.data);
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
    reply({ commit }, data) {
      commit("REPLY", data);
    },
    clear({commit}){
      commit("CLEAR")
    }
  },
});
