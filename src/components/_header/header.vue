<template>
    <nav class="nav position-sticky top-0 bg-white z-1" :class="show ? 'visible' : 'invisible'">
        <router-link to="/">
            <img src="@/assets/img/logo.png" alt="BlackDayz Logo" class="mx-5 object-fit-cover" width="100" />
        </router-link>
    </nav>
</template>

<script>
export default {
    name: 'BlackDayzHeader',

    data() {
        return {
            show: false,
            scrollPosition: 300,
        };
    },

    mounted() {
        if(this.$router.currentRoute.value.path !== '/') {
            this.show = true;
            return;
        }

        document.addEventListener('scroll', this.handleScroll);
    },

    methods: {
        handleScroll() {
            this.show = window.scrollY > this.scrollPosition;
        },
    },
};
</script>
