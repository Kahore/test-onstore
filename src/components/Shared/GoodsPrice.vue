<template>
  <p class="card-subtitle goods-card_price">{{ itemPrice }}
    <i
      class="fa fa-rub"
      aria-hidden="true"/>
  </p>
</template>

<script>
export default {
  name: 'GoodsPrice',
  props: {
    itemPrice: {
      type: Number,
      default: 0
    }
  },
    methods: {
  },
};
</script>
