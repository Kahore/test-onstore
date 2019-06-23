<template>
  <div class="input-group">
  <div class="pull-left quantity mr-1">
    <input
      type="number"
      class="form-control"
      placeholder="Quantity"
      min="1">
  </div>
    <template v-if="isItemInShopcart(item)">
      <button 
        value="добавить"
        class="btn btn-info"
        @click="deleteFromShopcart(item.id)">убрать из <i class="fa fa-shopping-cart"/>
      </button>
    </template>
    <template v-else>
      <button 
        value="добавить"
        class="btn btn-info"
        @click="addToShopcart(item)">добавить в <i class="fa fa-shopping-cart"/>
      </button>
     </template>

  </div>
</template>

<script>
  export default {
    props: {
      item: {
        type: Object,
        default: {}
      }
    },
    name:'GoodsToShopcart',
    methods:{
      addToShopcart (item) {
        this.$store.dispatch( 'MUTATE_SHOPCART_ITEM_ADD', item);
      },
      deleteFromShopcart (itemID) {
         this.$store.dispatch( 'MUTATE_SHOPCART_ITEM_DELETE', itemID);
      },
      isItemInShopcart(item) {
        const shopcartData = this.$store.getters.GET_SHOPCART;
        let index = shopcartData.findIndex( function( block ) {
          return block.id === item.id;
        } );
        if (index === -1 ) {
         return false
        } else {
           return true;
        }
      }
    }
  };
</script>