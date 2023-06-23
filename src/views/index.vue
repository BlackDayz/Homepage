<template>
    <header class="top_page width-100">
        <div class="head_text center absolute">
            <h1 class="black text-transform-up">BlackDayz</h1>
            <p>
                <span class="red">Junior</span> Web Developer,
                <span class="red">Junior</span> Discord Bot Developer, Discord Moderator
            </p>
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
};
</script>
