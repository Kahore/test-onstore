<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-lg-7">
        <img 
          :src="item.url"
          class="img-fluid"
          alt="goods image">
      </div>
      <div class="col-lg-5 col-md-12 col-sm-12 col-12">
        <h3>{{ item.title }}</h3>
        <br>
        <h3>
          <GoodsPrice :itemPrice="item.price"/>
        </h3>
        <br>
        <div class="row">
          <div class="col-lg-8 col-md-5 col-sm-6 col-7">
            <GoodsToShopcart :item="item"/>
          </div>
        </div>
        <!-- .row -->
      </div>
    </div>
    <!-- .row -->
    <br>
    <div class="row">
      <div class="col-12">
        <h3>Описание</h3>
        <div>{{ item.description }}</div>
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
  name: 'GoodsDetails',
  components: {
      GoodsToShopcart,
      GoodsPrice
  },
  computed: {
    item () {
      return this.$store.getters.GET_ITEM;
    }
  },
  created() {
    this.$store.dispatch( 'LOAD_ITEM', this.$route.params.id );
    // console.log( 'TCL: created ->  this.$route.params.id',   this.$route.params.id );
  }
};
</script>
