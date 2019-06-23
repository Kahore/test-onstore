// import doAjax from '../shared.js';
import axios from 'axios';
const state = () => ( {
    category: [],
} );

const getters = {
  GET_CATEGORY: state => {
    return state.category;
  },
};

const mutations = {
    LOAD_CATEGORY: ( state, payload ) => {
    state.category = payload;
  },
};

const actions = {
  LOAD_CATEGORY( { commit } ) {
    axios.get( 'http://localhost:3000/category' ).then( response => {
      commit( 'LOAD_CATEGORY', response.data );
    } );
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};