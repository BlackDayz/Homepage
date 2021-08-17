<template>
  <div class="home">
    <hpheader />
  </div>
</template>

<style scoped>

</style>

<script>
import hpheader from '../components/homepage/hp-header.vue';
const routerconfig = require('../assets/js/config/getConfig').getConfig.router();
export default {
  name: routerconfig.homepage.name,
  components: {
    hpheader
  }
}
</script>
