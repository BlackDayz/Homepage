<template>
    <router-view />
    <BlackDayzFooter />
</template>

<style src="@/assets/scss/base.scss" lang="scss"></style>

<script>
import BlackDayzFooter from '@/components/_footer/footer.vue';

export default {
    name: 'App',
    components: {
        BlackDayzFooter,
    },
};
</script>
