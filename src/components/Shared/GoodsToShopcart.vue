<template>
  <div class="input-group">
  
    <template v-if="isItemInShopcart(item)">
      <button 
        class="btn btn-info"
        value="добавить"
        @click="deleteFromShopcart(item.id)">убрать из <i class="fa fa-shopping-cart"/>
      </button>
    </template>
    <template v-else>
      <div class="pull-left quantity mr-1">
        <input
          v-model= "quantity"
          type="number"
          class="form-control"
          placeholder="Quantity"
          min="1">
      </div>
      <button 
        class="btn btn-info"
        value="добавить"
        @click="addToShopcart(item, quantity)">добавить в <i class="fa fa-shopping-cart"/>
      </button>
    </template>
  </div>
</template>

<script>
import EventBus from '../../EventBus';
  export default {
    name:'GoodsToShopcart',
    props: {
      item: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        quantity: 1
      };
    },
    methods:{
      addToShopcart ( item, quantity ) {
        if ( quantity > 0 ) {
          const calcPrice = item.price * quantity;
          let data = Object.assign( {}, item, { quantity:quantity, calculatedPrice: calcPrice} );
          this.$store.dispatch( 'MUTATE_SHOPCART_ITEM_ADD', data );
          EventBus.$emit ( 'change_quantity' );
        }
      },
      deleteFromShopcart ( itemID ) {
         this.$store.dispatch( 'MUTATE_SHOPCART_ITEM_DELETE', itemID );
         EventBus.$emit ( 'change_quantity' );
      },
      isItemInShopcart( item ) {
        const shopcartData = this.$store.getters.GET_SHOPCART;
         let index =  shopcartData.findIndex( function( block ) {
          return block.id === item.id;
        } );
       // let index = this._searchIndex( item.id );
        if ( index === -1 ) {
         return false;
        } else {
          return true;
        }
      },
      ShouldIAddQuantity ( item, quantity ) {
        const shopcartData = this.$store.getters.GET_SHOPCART;
         let index =  shopcartData.findIndex( function( block ) {
          return block.id === item.id;
        } );
       // let index = this._searchIndex( item.id );
        if ( index !== -1 ) { 
          if ( quantity < item.quantity ) {
            return false;
          } else {
            return true;
          }
        }
      },
      _searchIndex ( itemID ) {
        let shopcartData = this.$store.getters.GET_SHOPCART;
        shopcartData.findIndex( function( block ) {
          return block.id === itemID;
        } );
      },

    }
  };
</script>