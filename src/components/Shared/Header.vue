<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand">
      <i class="fa fa-tags"/>
    </a>
    <button 
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"/>
    </button>

    <div
      id="navbarSupportedContent"
      class="collapse navbar-collapse"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link
            class="nav-link"
            to="/">Главная
          </router-link>
        </li>
        <li class="nav-item">
          <router-link 
            class="nav-link"
            to="/ShopMap">Карта
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav mr-5">
        <li class="nav-item">
          <router-link 
            class="nav-link"
            to="/Shopcart">
            <i class="fa fa-shopping-cart"/>
            Корзина ({{ QuantityInShopcart }})
            на сумму {{ TotalCost }}
            <i
              class="fa fa-rub"
              aria-hidden="true"/>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'PageHeader',
    computed:{
      QuantityInShopcart () {
        return this.$store.getters.GET_SHOPCART_QUANTITY;
      },
      TotalCost () {
        let shopcartData = this.$store.getters.GET_SHOPCART;
        let totalCost = 0;
        for (let index = 0; index < shopcartData.length; index++) {
          totalCost = totalCost + shopcartData[index].calculatedPrice;
        }
        return totalCost
      }
    }
  };
</script>
