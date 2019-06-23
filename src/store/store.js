import Vue from 'vue';
import Vuex from 'vuex';
import main from './modules/main';
Vue.use( Vuex );

export const store = new Vuex.Store( {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { main },
} );
