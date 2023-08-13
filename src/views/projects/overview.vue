<template>
    <main id="work_wrapper">
        <div
            class="work"
            v-for="(project, index) in projects"
            :key="index"
            v-show="!project.titlepage">
            <a :href="'/projects?work=' + index">
                <img :src="require('@/assets/img/projects/' + project.img)" width="100%" />
            </a>
            <h1 class="work_name">{{ project.name }}</h1>
        </div>
        <!--To show all titlepage projects on the bottom to not show them twice-->
        <div
            class="work"
            v-for="(project, index) in projects"
            :key="index"
            v-show="project.titlepage">
            <a :href="'/projects?work=' + index">
                <img :src="require('@/assets/img/projects/' + project.img)" width="100%" />
            </a>
            <h1 class="work_name">{{ project.name }}</h1>
        </div>
    </main>
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

<style src="@/assets/css/work/work.css" />
