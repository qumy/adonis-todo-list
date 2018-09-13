import createPersistedState from 'vuex-persistedstate';
import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './authentication';
import projects from './projects';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrl: '/api',
  },
  modules: {
    authentication,
    projects,
  },
  actions: {

  },
  plugins: [
    createPersistedState(),
  ],
});
