// import doAjax from '../shared.js';
import axios from 'axios';
const state = () => ( {
  item: {},
} );

const getters = {
  GET_ITEM: state => {
    return state.item;
  },
};

const mutations = {
  LOAD_ITEM: ( state, payload ) => {
    state.item = payload;
  },
};

const actions = {
  LOAD_ITEM( { commit }, payload ) {
    // const result = doAjax.doAjax( 'http://my-json-server.typicode.com/Kahore/test-onstore/goods' );
    // axios.get( 'http://my-json-server.typicode.com/Kahore/test-onstore/goods' ).then( response => {
    //   commit( 'LOAD_GOODS', response.data );
    // } );
    axios.get( 'http://localhost:3000/goods/' + payload ).then( response => {
      commit( 'LOAD_ITEM', response.data );
    } );
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
