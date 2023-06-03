<template>
    <footer class="display-grid justify-content-center">
        <p>
            <a href="/impressum" class="link black">Impressum</a> |
            <a href="/datenschutz" class="link black">privacy</a> |
            <strong>BlackDayz &copy;{{ year }}</strong>
        </p>
        <span class="display-flex justify-content-center">
            <a rel="me" href="https://mastodon.green/@mittelblut9">Mastodon</a>
            <a title="BlackDayz Instagram" href="https://www.instagram.com/blackdayz_de/"
                ><img :src="require('@/assets/svg/social_media/icons8-instagram.svg')"
            /></a>
            <a
                title="Mittelblut9 Youtube"
                href="https://www.youtube.com/channel/UCVXebEQVI5N6-CV7Pnj7J8w"
                ><img :src="require('@/assets/svg/social_media/icons8-youtube.svg')"
            /></a>
            <a
                title="Mitteblut9 Discord name"
                href="https://discord.com/users/395923095472570368"
                class="cursor-pointer"
                ><img :src="require('@/assets/svg/social_media/icons8-discord.svg')"
            /></a>
            <a title="BlackDayz GitHub" href="https://github.com/Mittelblut9"
                ><img :src="require('@/assets/svg/social_media/icons8-github.svg')"
            /></a>
            <a title="Page Source Code" href="https://github.com/BlackDayz/BlackDayz-Homepage"
                ><img :src="require('@/assets/svg/social_media/source_code.svg')" width="24"
            /></a>
        </span>
    </footer>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Footer',
    data() {
        return {
            year: new Date().getFullYear(),
        };
    },
};
</script>
