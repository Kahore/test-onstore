import Vue from 'vue';
import Vuex from 'vuex';
import main from './modules/main';
import details from './modules/details';
import shopcart from './modules/shopcart';
Vue.use( Vuex );

export const store = new Vuex.Store( {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { main, details, shopcart },
} );
