<template>
  <div class="container mt-2">
    <div class="row">
      <div class="col-lg-2">
        <!-- eslint-disable-next-line -->
        <GoodsFilter :filter-type='"LOAD_GOODS"'/>
        <div 
          class="alert alert-danger" 
          role="alert">
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
              {{ item.price }}
              <i
                class="fa fa-rub"
                aria-hidden="true"/>
            </p>
          </div>
          <div class="col-md-1 col-lg-1">
            <button 
              class="btn" 
              @click="deleteFromShopcart(item.id)">
              <i 
                class="fa fa-trash" 
                aria-hidden="true"/>
            </button>

          </div>
          <div class="pull-left quantity offset-lg-11">
            <input
              v-model= "item.quantity"
              type="number"
              class="form-control"
              placeholder="Quantity"
              min="1"
              @click = "updateQuantity(item)"
            >
          </div>
        </div>
      </div>
      
      <div class="ml-2 col-md-3">
        <form 
          action=""
          method="post" >
          <div class="form-group">
            <label for="lastName">Фамилия</label>
            <input
              id="lastName"
              type="text"
              class="form-control"
              placeholder="Введите фамилию"
              required>
          </div>
          <div class="form-group">
            <label for="firstName">Имя</label>
            <input
              id="firstName"
              type="email"
              class="form-control"
              placeholder="Введите имя"
              required>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              id="email"
              type="email"
              class="form-control"
              placeholder="Введите email"
              required>
          </div>
          <div class="form-group">
            <label for="phone">Телефон</label>
            <input
              id="phone"
              type="tel"
              class="form-control"
              value="+7"
              placeholder="Введите телефон"
              required>
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
import EventBus from '../EventBus';
import GoodsFilter from './Shared/GoodsFilter';
import Inputmask from 'inputmask';

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
  mounted() {
    let tel = new Inputmask( '+7 (999)-999-99-99' );
    tel.mask( document.getElementById( 'phone' ) );
    
    let mail = new Inputmask( '*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]' );
    mail.mask( document.getElementById( 'email' ) );
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
