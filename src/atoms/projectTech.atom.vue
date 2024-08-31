<template>
    <img
        src="https://img.icons8.com/windows/48/000000/html.png"
        title="html"
        v-if="tecstackProps.isHTML"
        class="me-2"
    />
    <img
        src="https://img.icons8.com/color/48/vue-js.png"
        title="vue.js"
        v-if="tecstackProps.isVue"
        class="me-2"
    />
    <img
        src="https://img.icons8.com/color/48/000000/nodejs.png"
        title="node.js"
        v-if="tecstackProps.isNode"
        class="me-2"
    />
    <img
        :src="require('@/assets/img/icons/axios_logo.png')"
        title="axios.js"
        width="48"
        v-if="tecstackProps.isAxios"
        class="me-2"
    />
    <img
        src="https://img.icons8.com/ios-filled/48/000000/jquery.png"
        title="jquery"
        v-if="tecstackProps.isJQuery"
        class="me-2"
    />
    <img
        src="https://img.icons8.com/color/48/000000/javascript--v1.png"
        title="javascript"
        v-if="tecstackProps.isJavascript"
        class="me-2"
    />
    <img
        src="https://img.icons8.com/officel/48/null/php-logo.png"
        title="php"
        v-if="tecstackProps.isPHP"
        class="me-2"
    />
    <img
        src="https://img.icons8.com/color/48/000000/css3.png"
        title="css"
        v-if="tecstackProps.isCSS"
        class="me-2"
    />
    <img
        src="https://img.icons8.com/ios-filled/48/null/yii-framework.png"
        title="yii"
        v-if="tecstackProps.isYii"
        class="me-2"
    />
    <img
        src="https://img.icons8.com/color/48/shopify.png"
        title="shopify"
        v-if="tecstackProps.isShopfiy"
        class="me-2"
    />
    <img
        src="https://img.icons8.com/ios/48/shopify.png"
        title="liquid"
        v-if="tecstackProps.isLiquid"
        class="me-2"
    />
    <img
        src="https://img.icons8.com/color/48/nuxt-jc.png"
        title="nuxt.js"
        v-if="tecstackProps.isNuxt"
        class="me-2"
    />
    <img
        src="https://img.icons8.com/color/48/typescript.png"
        title="typescript"
        v-if="tecstackProps.isTypescript"
        class="me-2"
    />
    <img
        src="https://img.icons8.com/fluency/48/supabase.png"
        title="supabase"
        v-if="tecstackProps.isSupabase"
        class="me-2"
    />
    <img
        src="https://img.icons8.com/color/48/azure-relay-hybrid-connection.png"
        title="websocket"
        v-if="tecstackProps.isWebsocket"
        class="me-2"
    />
</template>

<script>
export default {
    name: 'ProjectTechAtom',
    data() {
        return {
            tecstackProps: {
                isHTML: false,
                isVue: false,
                isNode: false,
                isAxios: false,
                isJQuery: false,
                isJavascript: false,
                isPHP: false,
                isCSS: false,
                isYii: false,
                isShopfiy: false,
                isLiquid: false,
                isNuxt: false,
                isTypescript: false,
                isSupabase: false,
                isWebsocket: false,
            },
        };
    },

    props: {
        techstack: {
            type: Object,
            required: true,
        },
    },
    beforeMount() {
        const techNames = [
            'html',
            'javascript',
            'vue',
            'node',
            'axios',
            'jquery',
            'php',
            'css',
            'yii',
            'shopify',
            'liquid',
            'nuxt',
            'typescript',
            'supabase',
            'websocket',
        ];

        techNames.forEach((tech) => {
            this.tecstackProps[`is${tech.charAt(0).toUpperCase() + tech.slice(1)}`] =
                this.techstack.includes(tech);
        });
    },
};
</script>
