<template>
    <header class="top_page width-100 h-100">
        <div class="head_text text-center mb-5">
            <h1 class="fw-bold">BlackDayz</h1>
            <div class="head_text_big d-grid text-left">
                <span class="h1 head_text_change m-0">{{ defaultTitle }}</span>
                <span class="h1 head_text_second_dev m-0">Developer</span>
            </div>
        </div>

        <div class="head_arrows text-center m-5 pt-5">
            <p class="m-0">Grab some fresh news about me!</p>
            <a href="#me"
                ><img :src="require('@/assets/img/icons/double-down-arrow-24px.png')" class="m-0"
            /></a>
        </div>
    </header>
    <main>
        <div class="row bg-white py-5 align-items-center">
            <div class="col-12 col-lg-6">
                <about_me />
            </div>
            <div class="col-12 col-lg-6 d-flex justify-content-center">
                <dc_profile />
            </div>
        </div>

        <mybots />
        <work />
        <contribution />
    </main>
</template>

<script>
import mybots from '@/views/mybots/mybots.vue';
import dc_profile from '@/components/_dc_profile/dc_profile.vue';
import work from '@/components/work/work.vue';
import about_me from '@/components/about_me/about_me.vue';
import contribution from '@/components/contribution/contribution.vue';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Homepage',
    components: {
        mybots,
        dc_profile,
        work,
        about_me,
        contribution,
    },
    data() {
        return {
            titles: ['WEB', 'BOT', 'JUNIOR'],
            intervalTime: 3000,
            lastTitle: '',
            defaultTitle: 'WEB',
        };
    },

    created() {
        document.title = 'BlackDayz - Developer';
    },

    mounted() {
        this.lastTitle = this.defaultTitle;
        setInterval(() => {
            this.changeHeaderTitle();
        }, this.intervalTime);
    },

    methods: {
        changeHeaderTitle() {
            const div = document.querySelector('.head_text_change');
            if (!div) return;

            const title = this.getTitle();

            if (!this.lastTitle) {
                this.lastTitle = title;
            }

            if (title !== this.lastTitle) {
                this.triggerAnimation();

                setTimeout(() => {
                    div.innerHTML = title;
                    this.lastTitle = title;
                }, 500);
            } else {
                this.changeHeaderTitle();
            }
        },

        getTitle() {
            return this.titles[Math.floor(Math.random() * this.titles.length)];
        },

        triggerAnimation() {
            const div = document.querySelector('.head_text_change');
            if (!div) return;

            div.classList.add('head_text_change_animation');
            setTimeout(() => {
                div.classList.remove('head_text_change_animation');
            }, 1000);
        },
    },
};
</script>
