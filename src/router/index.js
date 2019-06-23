import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import GoodsDetails from '@/components/GoodsDetails';
import ShopMap from '@/components/Map';
import Shopcart from '@/components/Shopcart';

Vue.use( Router );

export default new Router( {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
    {
      path: '/GoodsDetails/:id',
      name: 'GoodsDetails',
      component: GoodsDetails,
    },
    {
      path: '/ShopMap/',
      name: 'ShopMap',
      component: ShopMap,
    },
    {
      path: '/Shopcart/',
      name: 'Shopcart',
      component: Shopcart,
    },
  ],
} );
