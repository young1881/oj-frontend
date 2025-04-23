import { StoreOptions } from "vuex";

export default {
  namespaced: true,
  state: {
    loginUser: { userName: "未登录" },
  },
  getters: {},
  actions: {
    getLoginUser({ commit, state }, payload) {
      commit("updateUser", { userName: "wortox1881" });
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload;
    },
  },
} as StoreOptions<any>;
