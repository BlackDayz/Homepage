<template>
  <div class="hp_header">
    <span id="programinstalled" style="white-space: pre"></span>
    <span id="installingprogress" style="white-space: pre"></span>
  </div>
</template>

<script>
import Typed from 'typed.js';
export default {
  mounted: () => {
    var typed = new Typed("#programinstalled", {
      strings: ['npm install <strong>www.blackdayz.de</strong> ^1300\n `<b>[200]</b> Source found...` ^1300\n `installing components...` ^1000\n `Fetching from source...` ^2000\n '],
      typeSpeed: 30,
      loop: false
    });
    setTimeout(() => {
      var typed2 = new Typed('#installingprogress',{
        strings: ['Installing... 0%', 'Installing... 10%'],
        typeSpeed: 0,
        backSpeed: 0,
        smartBackspace: true
      })
    }, 12000);
  },
};
</script>

<style scoped>
@import url("../../assets/css/hp-header/hp-header.css");
</style>