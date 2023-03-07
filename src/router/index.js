import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/index.vue'),
    },
    {
        path: '/projects',
        name: 'projects',
        component: () => import('../views/projects/_projects.vue'),
    },
    {
        path: '/impressum',
        name: 'impressum',
        component: () => import('../views/legal/impressum.vue'),
    },
    {
        path: '/datenschutz',
        name: 'datenschutz',
        component: () => import('../views/legal/datenschutz.vue'),
    },
    {
        name: 'mittelbot',
        path: '/mittelbot',
        beforeEnter: () => {
            location.href = 'https://mittelbot.blackdayz.de';
        },
    },
    {
        name: 'mido',
        path: '/mido',
        beforeEnter: () => {
            location.href = 'https://mido.blackdayz.de';
        },
    },
    {
        path: '/fiver',
        name: 'fiver',
        beforeEnter: () => {
            location.href = 'https://www.fiverr.com/blackdayzz';
        },
    },
    {
        path: '/img/logo',
        name: 'BlackDayz Logo',
        beforeEnter: () => {
            location.href =
                'https://raw.githubusercontent.com/BlackDayz/BlackDayz-Homepage/main/src/assets/img/logo/BlackDayzLogo.png';
        },
    },
    {
        path: '/js/changerjs',
        name: 'ChangerJS',
        beforeEnter: () => {
            location.href =
                'https://raw.githubusercontent.com/Mittelblut9/ChangerJs/main/lib/changer.js';
        },
    },
    {
        path: '/css/blackcss',
        name: 'BlackCSS',
        beforeEnter: () => {
            location.href =
                'https://raw.githubusercontent.com/BlackDayz/BlackCSS/v0.0.1/lib/BlackCSS.css';
        },
    },
    {
        path: '/img/pg_logo',
        name: 'PhenixGames Logo',
        beforeEnter: () => {
            location.href =
                'https://raw.githubusercontent.com/PhenixGames/PhenixGames-Homepage/development/src/assets/img/logo/PhenixGames_Logo_no_text_transparent.png';
        },
    },
    {
        path: '/img/mittelbot_logo',
        name: 'Mittelbot',
        beforeEnter: () => {
            location.href =
                'https://raw.githubusercontent.com/Mittelbots/Mittelbot/dev/.github/logo.png';
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
