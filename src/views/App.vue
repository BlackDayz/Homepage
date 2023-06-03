<template>
    <router-view />
    <Footer />
</template>

<style>
@import url('@/assets/css/style.css');
@import url('@/assets/css/media.css');
@import url('@/assets/font/style.css');
</style>

<script>
import Footer from '@/components/_footer/footer.vue';

export default {
    name: 'App',
    components: {
        Footer,
    },
};
</script>
