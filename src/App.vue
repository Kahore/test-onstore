<template>
  <div id="app">
    <pageHeader/>
    <router-view/>
  </div>
</template>

<script>
import pageHeader from '../src/components/Shared/Header';
export default {
  name: 'App',
  components: {
    pageHeader
  }
};
</script>

<style>
@import 'bootstrap/dist/css/bootstrap.css';
@import '/style/custom.css';
@import '/style/font-awesome/css/font-awesome.min.css';

</style>
