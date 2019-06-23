<template>
  <div>
    <span>Категории</span>
    <select
      v-model="categ"
      multiple
      class="form-control"
    >
      <option 
        v-for="(item, index) in category"
        :key="index"
      >{{ item.name }}</option>
    </select>
    <button 
      class="btn btn-outline-info my-2 my-sm-0"
      type="submit"
      @click="filterData(categ, FilterType)">Поиск</button>
  </div>
</template>

<script>
export default {
    name: 'GoodsFilter',
    props: {
      FilterType: {
        type: String,
        default: 'LOAD_GOODS',
        required: true
      }
    },
  data (){
    return {
      categ: []
    };
  },
  computed: {
    category() {
      return this.$store.getters.GET_CATEGORY;
    }
  },
  created() {
    this.$store.dispatch( 'LOAD_CATEGORY' );
  },
  methods:{
    filterData( categ, ft ) {
      const params = new URLSearchParams();
      for ( let index = 0; index < categ.length; index++ ) {
        params.append( 'category', categ[index] );
      }
      this.$store.dispatch( ft, params );
    }
  }
};
</script>
