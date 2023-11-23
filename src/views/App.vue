<template>
    <BlackDayzHeader />
    <router-view />
    <BlackDayzFooter />
</template>

<style src="@/assets/scss/base.scss" lang="scss"></style>

<script>
import BlackDayzHeader from '@/components/_header/header.vue';
import BlackDayzFooter from '@/components/_footer/footer.vue';

export default {
    name: 'App',
    components: {
        BlackDayzFooter,
        BlackDayzHeader,
    },
};
</script>
