<template>
  <div class="container">
    <div class="row">
      <div 
        v-for="item in goods"
        :key="item.id"
        class="goods-card">
        <div 
          class="card m-1"
        >
          <router-link
            :to="{path:'GoodsDetails/'+item.id}"
            class="goods-card_link"
          >
            <img 
              :src="item.thumbnailUrl"
              class="card-img-top"
              alt="goods image">
            <div class="card-body">
              <p class="card-subtitle goods-card_price">{{ calcPrice( item.price, 4 ) }}
                <i
                  class="fa fa-rub"
                  aria-hidden="true"/>
              </p>
              <p
                class="card-text goods-card_desc"
              >{{ item.title }} / {{ item.category }}</p>
              <GoodsToShopcart/>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <!-- .row -->
  </div>
  <!-- .container -->
</template>

<script>
import GoodsToShopcart from './Shared/GoodsToShopcart';
export default {
  name: 'Main',
  components: {
    GoodsToShopcart
  },
  computed: {
    goods () {
      return this.$store.getters.GET_GOODS;
    }
  },
  created () {
    this.$store.dispatch( 'LOAD_GOODS' );
  },
  methods: {
    calcPrice ( price, quantity ) {
      return price * quantity;
    }
  }
};
</script>
