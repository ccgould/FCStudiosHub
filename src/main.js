import Vue from "vue";
import "./plugins/axios";
import "./plugins/base";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created() {
    // Prevent blank screen in Electron builds
    this.$router.push("/");
  }
}).$mount("#app");
