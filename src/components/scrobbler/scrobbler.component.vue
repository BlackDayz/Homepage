<template>
    <div class="text-white d-grid my-2 scrobbler">
        <span>{{ text.lastScrobbledSong }}</span>
        <span v-show="!lastScrobbledSong">Loading...</span>
        <span class="fw-bolder">{{ lastScrobbledSong }}</span>
    </div>
</template>

<script>
export default {
    name: 'ScrobblerComponent',
    data() {
        return {
            apiKey: process.env.VUE_APP_LASTFM_API_KEY,
            username: process.env.VUE_APP_LASTFM_USERNAME,
            lastScrobbledSong: null,
            text: {
                lastScrobbledSong: 'Last listened song',
            },
        };
    },
    mounted() {
        this.getLastScrobbler();
    },
    methods: {
        getLastScrobbler() {
            fetch(
                `http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${this.username}&api_key=${this.apiKey}&format=json`
            )
                .then((response) => response.json())
                .then((data) => {
                    this.lastScrobbledSong = data.recenttracks.track[0].name;
                })
                .catch((error) => console.error(error));
        },
    },
};
</script>

<style scoped lang="scss">
.scrobbler {
    span {
        font-size: 0.8rem;

        &:last-child {
            font-size: 0.9rem;
        }
    }
}
</style>
