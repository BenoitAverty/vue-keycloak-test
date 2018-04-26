import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
  mounted() {
    setTimeout(() => this.$store.dispatch("keycloak/login"), 500);
  }
}).$mount("#app");
