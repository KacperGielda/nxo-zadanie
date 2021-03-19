import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  getters: {
    users(state) {
      return state.users;
    },
  },
  mutations: {},
  actions: {
    async fetchUsers({ state }) {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!data) return;
      state.users = data;
      return state.users;
    },
  },
  modules: {},
});
