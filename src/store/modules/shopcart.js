const state = () => ( {
  shopcart: [
    {
      id: 1,
      category: 'A',
      title: 'accusamus beatae ad facilis cum similique qui sunt',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem magnam, reprehenderit dolorem error ullam illum maiores dolorum! Dolorem hic iusto veniam, impedit soluta magni esse praesentium. Accusantium minima reprehenderit illo?',
      price: 1000,
      url: 'https://via.placeholder.com/600/92c952',
      thumbnailUrl: 'https://via.placeholder.com/150/92c952',
      quantity: 2,
      calculatedPrice: 2000,
    },
    {
      id: 2,
      category: 'B',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magnam ut praesentium cupiditate, ratione, voluptates facere corrupti earum iure est sed. Sunt voluptatum autem dolores rerum molestias voluptatibus aspernatur omnis.',
      price: 1010,
      title: 'reprehenderit est deserunt velit ipsam',
      url: 'https://via.placeholder.com/600/771796',
      thumbnailUrl: 'https://via.placeholder.com/150/771796',
      quantity: 1,
      calculatedPrice: 1010,
    },
    {
      id: 3,
      category: 'C',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque quis suscipit quod omnis officiis aspernatur labore, ut, veniam non perferendis blanditiis, nisi inventore eaque sequi quas tenetur esse? Voluptatem?',
      price: 1010,
      title: 'officia porro iure quia iusto qui ipsa ut modi',
      url: 'https://via.placeholder.com/600/24f355',
      thumbnailUrl: 'https://via.placeholder.com/150/24f355',
      quantity: 4,
      calculatedPrice: 4010,
    },
  ],
} );

const getters = {
  GET_SHOPCART: state => {
    return state.shopcart;
  },
  GET_SHOPCART_QUANTITY: state => {
    return state.shopcart.length;
  },
};

const mutations = {
  LOAD_SHOPCART: ( state, payload ) => {
    state.shopcart = payload;
  },
  MUTATE_SHOPCART_ITEM_ADD: ( state, payload ) => {
    state.shopcart.push( payload );
  },
  MUTATE_SHOPCART_ITEM_DELETE: ( state, payload ) => {
    let index = state.shopcart.findIndex( function( block ) {
      return block.id === payload;
    } );
    state.shopcart.splice( index, 1 );
  },
  MUTATE_SHOPCART_ITEM_QUANTITY: ( state, payload ) => {
    let index = state.shopcart.findIndex( function( block ) {
      return block.id === payload.id;
    } );
    state.shopcart[index] = JSON.parse( JSON.stringify( payload ) );
  }
};


const actions = {
  LOAD_SHOPCART( { commit } ) {
    commit( 'LOAD_SHOPCART' );
  },
  MUTATE_SHOPCART_ITEM_ADD( { commit, state }, payload ) {
    let index = state.shopcart.findIndex( function( block ) {
      return block.id === payload.id;
    } );
    if ( index === -1 ) {
      commit( 'MUTATE_SHOPCART_ITEM_ADD', payload );
    }
  },
  MUTATE_SHOPCART_ITEM_DELETE( { commit }, payload ) {
    commit( 'MUTATE_SHOPCART_ITEM_DELETE', payload );
  },
  MUTATE_SHOPCART_ITEM_QUANTITY( { commit }, payload ) {
    commit( 'MUTATE_SHOPCART_ITEM_QUANTITY', payload );
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
