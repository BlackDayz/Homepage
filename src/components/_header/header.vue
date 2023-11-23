<template>
    <nav class="nav position-sticky top-0 bg-white z-1 invisible">
        <router-link to="/">
            <img src="@/assets/img/logo.png" alt="BlackDayz Logo" class="mx-5 object-fit-cover" width="100" />
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

            if (window.scrollY > 300) {
                nav.classList.add('visible');
                nav.classList.remove('invisible');
            } else {
                nav.classList.add('invisible');
                nav.classList.remove('visible');
            }
        },
    },
};
</script>
