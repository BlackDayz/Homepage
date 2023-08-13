<template>
    <div class="p_detail">
        <a :href="backLink" id="back">home</a>
        <header>
            <h1 class="absolute">{{ work_name }}</h1>
            <p class="absolute">
                <img
                    src="https://img.icons8.com/windows/48/000000/html.png"
                    title="html"
                    v-if="tecstack.isHTML" />
                <img
                    src="https://img.icons8.com/windows/48/000000/vuejs.png"
                    title="vue.js"
                    v-if="tecstack.isVue" />
                <img
                    src="https://img.icons8.com/color/48/000000/nodejs.png"
                    title="node.js"
                    v-if="tecstack.isNode" />
                <span v-if="tecstack.isAxios">Axios</span>
                <img
                    src="https://img.icons8.com/ios-filled/50/000000/jquery.png"
                    title="jquery"
                    v-if="tecstack.isJQuery" />
                <img
                    src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                    title="javascript"
                    v-if="tecstack.isJavascript" />
                <img
                    src="https://img.icons8.com/officel/48/null/php-logo.png"
                    title="php"
                    v-if="tecstack.isPHP" />
                <img
                    src="https://img.icons8.com/color/48/000000/css3.png"
                    title="css"
                    v-if="tecstack.isCSS" />
                <img
                    src="https://img.icons8.com/ios-filled/48/null/yii-framework.png"
                    title="yii"
                    v-if="tecstack.isYii" />
                <img
                    src="https://img.icons8.com/color/48/shopify.png"
                    title="shopify"
                    v-if="tecstack.isShopfiy" />
                <img
                    src="https://img.icons8.com/ios/50/shopify.png"
                    title="liquid"
                    v-if="tecstack.isLiquid" />
            </p>
        </header>
        <main class="p_info">
            <h4>Die Grundidee ...</h4>
            <p>
                {{ info_text }}
            </p>
            <div class="p_links">
                <div v-for="link in links" :key="link.name">
                    <img :src="link.icon" />
                    <h5>
                        <a :href="link.link">{{ link.name }}</a>
                    </h5>
                </div>
            </div>
        </main>
        <footer class="p_img">
            <span v-for="item in footer" :key="item.src">
                <video autoplay muted loop v-if="item.isVideo">
                    <source :src="require('@/assets' + item.src)" />
                </video>
                <img :src="require('@/assets' + item.src)" v-if="item.isImg" />

                <iframe :src="item.src" v-if="item.isIframe"></iframe>
            </span>
        </footer>
    </div>
</template>

<script>
import projects from '@/assets/json/projects/projects.json';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'projects',
    data() {
        return {
            backLink: window.location.origin,
            work_name: '',
            tecstack: {
                isHTML: false,
                isJavascript: false,
                isVue: false,
                isNode: false,
                isAxios: false,
                isJQuery: false,
                isPHP: false,
                isCSS: false,
                isYii: false,
                isShopfiy: false,
                isLiquid: false,
            },
            info_text: '',
            links: [],
            footer: [],
        };
    },
    mounted() {
        const urlParams = new URLSearchParams(window.location.search);
        const work = urlParams.get('work');

        const selectedWork = projects[work];
        this.work_name = selectedWork.name;
        this.info_text = selectedWork.description;
        this.links = selectedWork.links;
        this.footer = selectedWork.footer;

        this.tecstack.isHTML = selectedWork.tecstack.includes('html');
        this.tecstack.isJavascript = selectedWork.tecstack.includes('javascript');
        this.tecstack.isVue = selectedWork.tecstack.includes('vue');
        this.tecstack.isNode = selectedWork.tecstack.includes('node');
        this.tecstack.isAxios = selectedWork.tecstack.includes('axios');
        this.tecstack.isJQuery = selectedWork.tecstack.includes('jquery');
        this.tecstack.isPHP = selectedWork.tecstack.includes('php');
        this.tecstack.isCSS = selectedWork.tecstack.includes('css');
        this.tecstack.isYii = selectedWork.tecstack.includes('yii');
        this.tecstack.isShopfiy = selectedWork.tecstack.includes('shopify');
        this.tecstack.isLiquid = selectedWork.tecstack.includes('liquid');
    },
};
</script>
