// import doAjax from '../shared.js';
import axios from 'axios';
const state = () => ( {
  goods: [],
} );

const getters = {
  GET_GOODS: state => {
    return state.goods;
  },
};

const mutations = {
  LOAD_GOODS: ( state, payload ) => {
    state.goods = payload;
  },
};

const actions = {
  LOAD_GOODS( { commit } ) {
    // const result = doAjax.doAjax( 'http://my-json-server.typicode.com/Kahore/test-onstore/goods' );
    // axios.get( 'http://my-json-server.typicode.com/Kahore/test-onstore/goods' ).then( response => {
    //   commit( 'LOAD_GOODS', response.data );
    // } );
    axios.get( 'http://localhost:3000/goods' ).then( response => {
      commit( 'LOAD_GOODS', response.data );
    } );
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
