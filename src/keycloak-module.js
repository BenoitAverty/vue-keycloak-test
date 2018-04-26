import Keycloak from "keycloak-js";

const keycloak = Keycloak({
  "url": "http://localhost:8080/auth",
  "realm": "master",
  "clientId": "account"
});

const keycloakModule = {
  namespaced: true,
  state: {
    working: false,
    initialized: false,
    authenticated: false,
    error: "",
    username: "",
    token: ""
  },
  mutations: {
    workStarted(state) {
      state.working = true;
    },
    authenticated(state, userinfo) {
      state.working = false;
      state.authenticated = true;
      state.username = userinfo.name;
      state.token = userinfo.token;
    },
    initialized(state) {
      state.initialized = true;
    },
    error(state, msg) {
      state.error = msg;
    }
  },
  actions: {
    initialize({ commit }) {
      return keycloak
        .init()
        .success(authenticated => {
          commit("initialized");
          console.log('init')
          if (authenticated) {
            console.log('plouf')
            commit("authenticated", { name: "toto", token: "plouf" });
          }
        })
        .error(() => commit("error", "Init failed"));
    },
    async login({ commit, state, dispatch }) {
      commit("workStarted");
      if (!state.initialized) {
        await dispatch("initialize");
      }

      // console.log(keycloak.createLoginUrl())
      if (!state.authenticated) {
        keycloak.login({
          prompt: "login",
          redirectUri: "http://localhost:8080/"
        })
      }




      return;
    }
  }
};

export default keycloakModule;
