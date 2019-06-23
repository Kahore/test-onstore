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
          <img 
            :src="item.thumbnailUrl"
            class="card-img-top"
            alt="goods image">
          <div class="card-body">
            <p class="card-subtitle">{{ calcPrice( item.price, 4 ) }}
              <i
                class="fa fa-rub"
                aria-hidden="true"/>
            </p>
            <p
              class="card-text goods-card_desc"
            >{{ item.title }} / {{ item.category }}</p>
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
              <button 
                value="добавить"
                class="btn btn-info">добавить в <i class="fa fa-shopping-cart"/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- .row -->
  </div>
  <!-- .container -->
</template>

<script>
export default {
  name: 'Main',
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
