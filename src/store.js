import Vue from "vue";
import Vuex from "vuex";

import keycloak from "./keycloak-module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { keycloak },
  state: {},
  mutations: {},
  actions: {}
});
