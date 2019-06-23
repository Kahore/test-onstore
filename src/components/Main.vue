<template>
  <section>
    
    <div class="container">
      <div class="row">
        <div class="col-lg-2">
          <!-- eslint-disable-next-line -->
          <GoodsFilter :filter-type='"LOAD_GOODS"'/>
        </div>
        <div class="col-lg-10">
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
                  <GoodsPrice :item-price="item.price"/>
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
      </div>
      <!-- .row -->
    </div>
    <!-- .container -->
  </section>
</template>

<script>
import GoodsToShopcart from './Shared/GoodsToShopcart';
import GoodsPrice from './Shared/GoodsPrice';
import GoodsFilter from './Shared/GoodsFilter';
export default {
  name: 'Main',
  components: {
    GoodsToShopcart,
    GoodsPrice,
    GoodsFilter
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
