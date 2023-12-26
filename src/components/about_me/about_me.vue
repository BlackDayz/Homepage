<template>
    <ul class="list-unstyled fs-4 mb-5 mb-md-0">
        <li class="m-3 m-md-5 me-0">
            <div class="d-flex align-items-center">
                <img :src="require('@/assets/img/icons/hello-48.png')" width="42" />
                <span class="ms-3" v-html="text.aboutText"></span>
            </div>
        </li>
        <li class="m-3 m-md-5 me-0">
            <div class="d-flex align-items-center">
                <img :src="require('@/assets/img/icons/icons8-prize-48.png')" width="42" />
                <span class="ms-3" v-html="text.title"></span>
            </div>
        </li>
        <li class="m-3 m-md-5 me-0">
            <div class="d-flex align-items-center">
                <img :src="require('@/assets/img/icons/degree-42.png')" width="42" />
                <span class="ms-3" v-html="text.current"></span>
            </div>
        </li>
        <li class="m-3 m-md-5 me-0">
            <div class="d-flex align-items-center">
                <img :src="require('@/assets/img/icons/cloud-48.png')" width="42" />
                <span class="ms-3" v-html="text.whatamidoing"></span>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'AboutMe',
    data() {
        return {
            text: {
                aboutText:
                    'Hey, my name is obviously Mittelblut9 I\'m 20 years old and a <span class="text-green">Junior</span> Web Developer living in Germany',
                title: 'Official trained <span class="fw-bold">technical design assistant</span>',
                current:
                    'At the moment I am completing my training as a <span class="fw-bold">IT specialist for application development</span>',
                whatamidoing:
                    "Most of the days i'm working on projects like websites or my own Discord Bot.. or uhm.. just playing games :)",
            },
        };
    },
};
</script>
