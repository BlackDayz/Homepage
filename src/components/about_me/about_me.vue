<template>
    <div class="about_me_left white left">
        <p>
            <img :src="require('@/assets/img/icons/hello-48.png')" width="42" /> Hey, my name is
            obviously Mittelblut9 I'm 20 years old and a <span class="red">Junior</span> Web
            Developer living in Germany
        </p>
        <br />
        <p>
            <img :src="require('@/assets/img/icons/icons8-prize-48.png')" width="42" />Official
            trained
            <strong>technical design assistant</strong>
        </p>
        <br />
        <p>
            <img :src="require('@/assets/img/icons/degree-42.png')" width="42" />At the moment I am
            completing my training as a <strong>IT specialist for application development</strong>
        </p>
        <br />
        <p>
            <img :src="require('@/assets/img/icons/cloud-48.png')" width="42" />Most of the days i'm
            working on projects like websites or my own Discord Bot.. or uhm.. just playing games :)
        </p>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'AboutMe',
};
</script>
