<template>
    <div class="references user-select-none">
        <header class="center">
            <h2>My work</h2>

            <div class="ref_gif_top display-flex justify-content-center">
                <img :src="require('@/assets/gif/developer_funny.gif')" id="dev_funny_gif" />
            </div>
        </header>
        <main id="work_wrapper">
            <div
                class="work"
                v-for="(project, index) in projects"
                :key="index"
                v-show="project.titlepage">
                <router-link :to="'/projects?work=' + index">
                    <img :src="require('@/assets/img/projects/' + project.img)" width="100%" />
                </router-link>
                <h1 class="work_name">{{ project.name }}</h1>
            </div>
        </main>

        <div class="work_show_more">
            <router-link to="/overview"><span>Show more</span></router-link>
        </div>
    </div>
</template>

<script>
import projects from '@/assets/json/projects/projects.json';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Slider',

    data() {
        return {
            projects,
        };
    },
};
</script>

<style>
@import url('@/assets/css/work/work.css');
</style>
