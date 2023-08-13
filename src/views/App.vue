<template>
    <BlackDayzHeader />
    <router-view />
    <BlackDayzFooter />
</template>

<style>
@import url('@/assets/css/style.css');
@import url('@/assets/css/media.css');
@import url('@/assets/font/style.css');
</style>

<script>
import BlackDayzHeader from '@/components/_header/header.vue';
import BlackDayzFooter from '@/components/_footer/footer.vue';

export default {
    name: 'App',
    components: {
        BlackDayzFooter,
        BlackDayzHeader,
    }
};
</script>
