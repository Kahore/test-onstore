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
    <button 
      value="добавить"
      class="btn btn-info">добавить в <i class="fa fa-shopping-cart"/></button>
  </div>
</template>

<script>
  export default {
    name:'GoodsToShopcart'
  };
</script>