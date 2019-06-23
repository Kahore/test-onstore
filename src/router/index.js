import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import GoodsDetails from '@/components/GoodsDetails';

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
      name: 'Main',
      component: GoodsDetails,
    },
  ],
} );
