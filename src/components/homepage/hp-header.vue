<template>
  <div class="hp_header">
    <img src="../../assets/img/logo/BlackDayzLogo.png" alt="" class="hp_header_logo absolute left left-0"/>
    <div class="hp_header_txt white absolute">
      <h1>Frontend</h1>
      <h1>Backend</h1>
    </div>
    <div class="hp_header_nav absolute white textright">
      <p><router-link to="/">About</router-link></p>
      <p><router-link to="/">Referenzen</router-link></p>
    </div>
    <img src="../../assets/img/header/hp_header_img_bg.jpg" alt="" class="hp_header_img_bg absolute object-fit-cover" />
  </div>
</template>

<script>
  export default {
    mounted: () => {
      document.querySelector('.hp_header_txt').style.transform = "translateX(-100%)"
      document.querySelector('.hp_header_nav').style.transform = "translateX(300%)"
      setTimeout(() => {
        document.querySelector('.hp_header_nav').style.transform = "translateX(0)"
        document.querySelector('.hp_header_txt').style.transform = "translateX(0)"
      }, 500);
    }
  }
</script>

<style scoped>
@import url('../../assets/css/hp-header/hp-header.css');
</style>