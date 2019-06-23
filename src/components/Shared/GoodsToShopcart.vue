<template>
  <div class="input-group">
    <span class="input-group-btn">
      <button 
        type="button"
        class="btn btn-default">
        <span class="fa fa-minus"/>
      </button>
    </span>
    <input 
      type="text"
      class="form-control input-number"
      value="1"
      min="1">
    <span class="input-group-btn">
      <button
        type="button"
        class="btn btn-default">
        <span class="fa fa-plus"/>
      </button>
    </span>
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