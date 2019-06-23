<template>
  <p class="card-subtitle goods-card_price">{{  itemPrice }}
    <i
      class="fa fa-rub"
      aria-hidden="true"/>
  </p>
</template>

<script>
export default {
  props: {
    itemPrice: {
      type: Number,
      default: 0
    }
  },
  name: 'GoodsPrice',
    methods: {
  },
};
</script>
