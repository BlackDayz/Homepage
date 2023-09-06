<template>
    <nav class="nav">
        <router-link to="/">
            <img src="@/assets/img/logo.png" alt="BlackDayz Logo" />
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'BlackDayzHeader',

    mounted() {
        document.addEventListener('scroll', this.handleScroll);
    },

    methods: {
        handleScroll() {
            const nav = document.querySelector('.nav');
            const topPage = document.querySelector('.top_page');
            const scroll = window.scrollY;

            if (scroll > 700) {
                nav.style.visibility = 'visible';
            } else {
                nav.style.visibility = 'hidden';
            }
        },
    },
};
</script>

<style src="@/assets/css/header/header.css" />
