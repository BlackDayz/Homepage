<template>
    <div class="my-bots user-select-none">
        <header class="center">
            <h2>My Discord bots</h2>

            <div class="bots_gif_top display-flex justify-content-center">
                <img :src="require('@/assets/gif/gif-logo-discord.gif')" id="dc_funny_gif" />
            </div>

            <div class="bot-showcase display-flex justify-content-center">
                <router-link to="/mittelbot" class="link">
                    <div class="bot">
                        <img
                            :src="require('@/assets/img/projects/bots/bot_mittelbot.png')"
                            alt="Mittelbot Logo" />
                        <h3>Mittelbot</h3>
                    </div>
                </router-link>
                <router-link to="/mido" class="link">
                    <div class="bot">
                        <img
                            :src="require('@/assets/img/projects/bots/bot_mido.png')"
                            alt="Mittelbot Logo" />
                        <h3>Mido</h3>
                    </div>
                </router-link>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'mybots',
};
</script>
