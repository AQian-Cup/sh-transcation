import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import store from "./store";
import router from "./router";
import VueLazyload from "vue-lazyload";

Vue.config.productionTip = false;

import api from "./api";
Vue.prototype.$API = api;

Vue.use(ElementUI);
Vue.use(VueLazyload,{
  error:require("./assets/error.png"),
  loading:require("./assets/loading.jpg")
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
