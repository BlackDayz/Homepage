<template>
    <footer class="text-center my-3">
        <p>
            <router-link to="/impressum" class="link black">Impressum</router-link> |
            <router-link to="/datenschutz" class="link black">privacy</router-link> |
            <strong>BlackDayz &copy;{{ year }}</strong>
        </p>
        <span class="display-flex justify-content-center">
            <a title="BlackDayz Instagram" href="https://www.instagram.com/blackdayz_de/"
                ><img :src="require('@/assets/svg/social_media/icons8-instagram.svg')" class="mx-2"
            /></a>
            <a
                title="Mittelblut9 Youtube"
                href="https://www.youtube.com/channel/UCVXebEQVI5N6-CV7Pnj7J8w"
                ><img :src="require('@/assets/svg/social_media/icons8-youtube.svg')" class="mx-2"
            /></a>
            <a
                title="Mitteblut9 Discord name"
                href="https://discord.com/users/395923095472570368"
                class="cursor-pointer"
                ><img :src="require('@/assets/svg/social_media/icons8-discord.svg')" class="mx-2"
            /></a>
            <a title="BlackDayz GitHub" href="https://github.com/Mittelblut9"
                ><img :src="require('@/assets/svg/social_media/icons8-github.svg')" class="mx-2"
            /></a>
            <a title="Page Source Code" href="https://github.com/BlackDayz/BlackDayz-Homepage"
                ><img :src="require('@/assets/svg/social_media/source_code.svg')" width="24" class="mx-2"
            /></a>
        </span>
    </footer>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'BlackDayzFooter',
    data() {
        return {
            year: new Date().getFullYear(),
        };
    },
};
</script>
