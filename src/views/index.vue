<template>
    <header class="top_page width-100">
        <div class="head_text center absolute">
            <h1 class="black text-transform-up">BlackDayz</h1>
            <div class="head_text_big">
                <div id="head_text_change">WEB</div>
                <div id="head_text_second_dev">Developer</div>
            </div>
        </div>

        <div class="head_arrows center absolute">
            <p>Grab some fresh news about me!</p>
            <a href="#me"
                ><img :src="require('@/assets/img/icons/double-down-arrow-24px.png')"
            /></a>
        </div>
    </header>
    <main>
        <div class="about_me" id="me">
            <about_me />

            <div class="about_me_right right">
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
            titles: ['WEB', 'BOT'],
            intervalTime: 5000,
            lastTitle: '',
        };
    },

    created() {
        document.title = 'BlackDayz - Developer';
    },

    mounted() {
        setInterval(() => {
            this.changeHeaderTitle();
        }, this.intervalTime);
    },

    methods: {
        changeHeaderTitle() {
            const div = document.getElementById('head_text_change');
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
            const div = document.getElementById('head_text_change');
            if (!div) return;

            div.classList.add('head_text_change_animation');
            setTimeout(() => {
                div.classList.remove('head_text_change_animation');
            }, 1000);
        },
    },
};
</script>
