<template>
  <div class="container mt-2">
    <div class="row">
      <div class="col-lg-2">
          <GoodsFilter :FilterType='"LOAD_GOODS"'/>
          <div class="alert alert-danger" role="alert">
            Данные только во vuex...
          </div>
      </div>
      <div class="row col-md-7">
        <div 
          v-for="item in shopcartList"
          :key="item.id"
          class="row bg-light p-2 mb-3 col-md-12">
            <div class="col-md-4 col-lg-3">
              <img 
                :src="item.thumbnailUrl"
                alt="goods image">
            </div>
            <div class="col-md-6 col-lg-8">
              <h5 v-text="item.title"/>
              <p class="goods-card_price">
                {{ item.price }}  <i
                  class="fa fa-rub"
                  aria-hidden="true"/>
              </p>

            </div>
            <div class="col-md-1 col-lg-1">
              <button class="btn" @click="deleteFromShopcart(item.id)">
                <i class="fa fa-trash" aria-hidden="true"></i>
              </button>

            </div>
            <div class="pull-left quantity offset-lg-11">
              <input
                type="number"
                class="form-control"
                placeholder="Quantity"
                v-model= "item.quantity"
                @click = "updateQuantity(item)"
                min="1">
            </div>
        </div>
      </div>
      
      <div class="ml-2 col-md-3">
        <form action="" method="post" >
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button
            type="submit"
            class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../EventBus'
import GoodsFilter from './Shared/GoodsFilter';
export default {
  name: 'Shopcart',
  components: {
    GoodsFilter
  },
  computed: {
    shopcartList () {
      return this.$store.getters.GET_SHOPCART;
    }
  },
  methods: {
    deleteFromShopcart( itemID ) {
       this.$store.dispatch( 'MUTATE_SHOPCART_ITEM_DELETE', itemID );
       EventBus.$emit ( 'change_quantity' );
    },
    updateQuantity ( item ) {
      // Anyway, in real app price shoul be return from server 
      const calcPrice = item.price * item.quantity;
      let data = Object.assign( {}, item, { quantity: item.quantity, calculatedPrice: calcPrice } );
      this.$store.dispatch( 'MUTATE_SHOPCART_ITEM_QUANTITY', data );
      EventBus.$emit ( 'change_quantity' );
    }
  }
};
</script>
