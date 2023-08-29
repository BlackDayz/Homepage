<template>
    <nav class="nav" @click="returnToHome">
        <img src="@/assets/img/logo.png" alt="BlackDayz Logo" />
    </nav>
</template>

<script>
export default {
    name: 'BlackDayzHeader',
    methods: {
        returnToHome() {
            window.location.href = '/';
        },
    },
};
</script>

<style src="@/assets/css/header/header.css" />
