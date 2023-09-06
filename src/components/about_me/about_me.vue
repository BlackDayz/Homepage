<template>
    <div class="about_me_left white left">
        <div>
            <img :src="require('@/assets/img/icons/hello-48.png')" width="42" />
            <p>
                Hey, my name is obviously Mittelblut9 I'm 20 years old and a
                <span class="red">Junior</span> Web Developer living in Germany
            </p>
        </div>
        <br />
        <div>
            <img :src="require('@/assets/img/icons/icons8-prize-48.png')" width="42" />
            <p>
                Official trained
                <strong>technical design assistant</strong>
            </p>
        </div>
        <br />
        <div>
            <img :src="require('@/assets/img/icons/degree-42.png')" width="42" />
            <p>
                At the moment I am completing my training as a
                <strong>IT specialist for application development</strong>
            </p>
        </div>
        <br />
        <div>
            <img :src="require('@/assets/img/icons/cloud-48.png')" width="42" />
            <p>
                Most of the days i'm working on projects like websites or my own Discord Bot.. or
                uhm.. just playing games :)
            </p>
        </div>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'AboutMe',
};
</script>

<style src="@/assets/css/about_me/aboutme.css" />
