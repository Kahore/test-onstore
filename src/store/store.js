import Vue from 'vue';
import Vuex from 'vuex';
import main from './modules/main';
import details from './modules/details';
Vue.use( Vuex );

export const store = new Vuex.Store( {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { main, details },
} );
