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
              <GoodsPrice :itemPrice="item.price"/>
              <p
                class="card-text goods-card_desc"
              >{{ item.title }} / {{ item.category }}</p>
            </div>
          </router-link>
          <div class="card-footer">
            <GoodsToShopcart :item="item"/>
          </div>
        </div>
      </div>
    </div>
    <!-- .row -->
  </div>
  <!-- .container -->
</template>

<script>
import GoodsToShopcart from './Shared/GoodsToShopcart';
import GoodsPrice from './Shared/GoodsPrice';
export default {
  name: 'Main',
  components: {
    GoodsToShopcart,
    GoodsPrice
  },
  computed: {
    goods () {
      return this.$store.getters.GET_GOODS;
    }
  },
  created () {
    this.$store.dispatch( 'LOAD_GOODS' );
  },

};
</script>
