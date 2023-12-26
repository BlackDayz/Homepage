<template>
    <hr class="contr-hr my-4 mx-auto" />
    <h2 class="text-center fw-bolder mt-5">{{ text.title }}</h2>
    <div class="row contribution">
        <div
            class="col-12 col-md-4 my-3 my-md-5 px-5"
            v-for="item in contribution"
            :key="item.title"
        >
            <h3 class="fw-bold">{{ item.title }}</h3>
            <p>{{ item.description }}</p>
            <github-button
                :href="item.link"
                data-icon="octicon-star"
                aria-label="Star buttons/github-buttons on GitHub"
                data-show-count="true"
                >Star Project</github-button
            >
        </div>
    </div>
</template>

<script>
import GithubButton from 'vue-github-button';

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Contribution',
    components: {
        GithubButton,
    },
    data() {
        return {
            text: {
                title: "Contributions",
            },
            contribution: [
                {
                    title: 'Guardian',
                    description:
                        'The semi-most semi-advanced public moderation Discord bot w/ a web-dashboard. I helped by reducing code from commands and added prettier to the project.',
                    link: 'https://github.com/Guardians-Stuff/Guardian',
                },
                {
                    title: '"Heckerbot"',
                    description:
                        'A Discord bot that is used for moderation and fun. I helped by adding prettier and suggesting code changes to the project.',
                    link: 'https://github.com/aduud21/heckerbot/',
                },
                {
                    title: 'VLCOneKey',
                    description:
                        'The most secure and effective way of verifying VLC students on Discord. I helped by adding a tooltip element.',
                    link: 'https://github.com/VLCCommunity/VLCOneKey',
                },
                {
                    title: 'Dumpus Landing - Website',
                    description:
                        '[Rewrite with Vue.js] Simple static website for details, screenshots, etc. about the Dumpus app ',
                    link: 'https://github.com/dumpus-app/dumpus-landing',
                },
                {
                    title: 'Dumpus - German Translator',
                    description: 'Get detailed insights and stats for your Discord account ',
                    link: 'https://github.com/dumpus-app/dumpus-app',
                },
                {
                    title: 'Canvacord',
                    description:
                        'Easily generate images on-the-fly with node.js using wide range of templates.',
                    link: 'https://github.com/neplextech/canvacord',
                },
                {
                    title: 'StreamAwards Feedback',
                    description:
                        'A feedback github repository for the StreamAwards. I helped by adding advanced issue templates.',
                    link: 'https://github.com/dieserRobin/streamawards-feedback',
                },
            ],
        };
    },
};
</script>
