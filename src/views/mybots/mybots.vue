<template>
    <div class="my-bots user-select-none">
        <header class="text-center">
            <h2 class="my-5">My Discord bot</h2>

            <div class="bot-showcase display-flex justify-content-center">
                <a :href="mittelbotURL" class="link">
                    <div class="bot">
                        <img
                            :src="require('@/assets/img/projects/bots/bot_mittelbot.png')"
                            alt="Mittelbot Logo"
                        />
                        <h3>Mittelbot</h3>
                    </div>
                </a>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'mybots',
    data() {
        return {
            mittelbotURL: 'https://mittelbot.xyz',
        };
    },
};
</script>
