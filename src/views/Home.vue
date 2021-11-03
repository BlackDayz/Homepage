<template>
  <div class="home">
    <img src="@/assets/img/homescreen/oldtvframe.png" class="oldtvframe" />
    <hpheader />
    <hpabout />
    <hpreferenzen />
  </div>
</template>

<style scoped>

</style>

<script>
import hpheader from '../components/homepage/hp-header.vue';
import hpabout from '../components/homepage/hp-about.vue';
import hpreferenzen from '../components/homepage/hp-referenzen.vue';

const routerconfig = require('../assets/js/config/getConfig').getConfig.router();

export default {
  name: routerconfig.homepage.name,
  components: {
    hpheader,
    hpabout,
    hpreferenzen
  }
}
</script>
