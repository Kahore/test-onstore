import Vue from 'vue';
import Vuex from 'vuex';
import main from './modules/main';
import details from './modules/details';
import shopcart from './modules/shopcart';
import filter from './modules/filter';
Vue.use( Vuex );

export const store = new Vuex.Store( {
  modules: { main, details, shopcart, filter },
} );
