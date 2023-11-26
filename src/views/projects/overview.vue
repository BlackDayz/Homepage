<template>
    <div class="row">
        <div
            class="work col-12 col-md-6 m-0 p-0"
            v-for="(project, index) in projects"
            :key="index"
            v-show="!project.titlepage"
        >
            <router-link :to="'/projects?work=' + index">
                <img :src="require('@/assets/img/projects/' + project.img)" width="100%" class="w-100 h-100 object-fit-cover object-position-center opacity-50 z-n1"/>
            </router-link>
            <h1 class="work_name fw-bold z-1 text-center z-1">{{ project.name }}</h1>
        </div>
        <!--To show all titlepage projects on the bottom to not show them twice-->
        <div
            class="work col-12 col-md-6 m-0 p-0"
            v-for="(project, index) in projects"
            :key="index"
            v-show="project.titlepage"
        >
            <router-link :to="'/projects?work=' + index">
                <img :src="require('@/assets/img/projects/' + project.img)" width="100%" class="w-100 h-100 object-fit-cover object-position-center opacity-50 z-n1"/>
            </router-link>
            <h1 class="work_name fw-bold z-1 text-center z-1">{{ project.name }}</h1>
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
