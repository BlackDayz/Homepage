<template>
    <div class="references user-select-none">
        <header class="center">
            <h2>My work</h2>

            <div class="ref_gif_top display-flex justify-content-center">
                <img :src="require('@/assets/gif/developer_funny.gif')" id="dev_funny_gif" />
            </div>
        </header>
        <main id="work_wrapper">
            <div class="work">
                <a href="/projects?work=prodbydaz"
                    ><img :src="require('@/assets/img/projects/prodbydaz.png')"
                /></a>
                <h1 class="work_name">Prodbydaz (Shop)</h1>
            </div>
            <div class="work">
                <a href="/projects?work=nobadvibes"
                    ><img :src="require('@/assets/img/projects/nobadvibes.png')"
                /></a>
                <h1 class="work_name">nobadVIBES (Fake-Shop, Showcase)</h1>
            </div>
            <div class="work">
                <a href="/projects?work=changerjs"
                    ><img :src="require('@/assets/img/projects/changerjs.png')"
                /></a>
                <h1 class="work_name">Changer.js (Mini-Library)</h1>
            </div>
            <div class="work">
                <a href="/projects?work=phenixgameshomepage">
                    <img :src="require('@/assets/img/projects/phenixgames.png')"
                /></a>
                <h1 class="work_name">PhenixGames Homepage</h1>
            </div>
            <div class="work">
                <a href="/projects?work=phenixgamesteam">
                    <img :src="require('@/assets/img/projects/pg_teambereich_dark.png')"
                /></a>
                <h1 class="work_name">PhenixGames Teambereich</h1>
            </div>
            <div class="work">
                <a href="/projects?work=subscriptor">
                    <img :src="require('@/assets/img/projects/subscriptor_startseite.png')"
                /></a>
                <h1 class="work_name">Subscriptor - Abonnement Verwaltung</h1>
            </div>
            <div class="work">
                <a href="/projects?work=easylogindesign"
                    ><img :src="require('@/assets/img/projects/easylogin.png')"
                /></a>
                <h1 class="work_name">Easy Login Design</h1>
            </div>
            <div class="work">
                <a href="/projects?work=redesign"
                    ><img :src="require('@/assets/img/projects/redesign.png')"
                /></a>
                <h1 class="work_name">Redesign (Schulprojekt)</h1>
            </div>
            <div class="work">
                <a href="/projects?work=mittelbot"
                    ><img :src="require('@/assets/img/projects/mittelbot.png')" width="100%"
                /></a>
                <h1 class="work_name">Mittelbot - Discord Bot</h1>
            </div>
            <div class="work">
                <a href="/projects?work=lacampana"
                    ><img
                        :src="require('@/assets/img/projects/la_campana_design.png')"
                        width="100%"
                /></a>
                <h1 class="work_name">La Campana Website Design (unofficial)</h1>
            </div>
            <div class="work">
                <a href="/projects?work=calculator"
                    ><img
                        :src="require('@/assets/img/projects/veryeasycalculator.png')"
                        width="100%"
                /></a>
                <h1 class="work_name">Very Easy Calculator</h1>
            </div>
            <div class="work">
                <a href="/projects?work=cookieclicker"
                    ><img :src="require('@/assets/img/projects/cookieclicker.png')" width="100%"
                /></a>
                <h1 class="work_name">Cookie Clicker</h1>
            </div>
            <div class="work">
                <a href="/projects?work=derduemmstefliegt"
                    ><img
                        :src="require('@/assets/img/projects/der_duemmste_fliegt_waitroom.png')"
                        width="100%"
                /></a>
                <h1 class="work_name">Der D&uuml;mmste fliegt</h1>
            </div>
            <div class="work">
                <a href="/projects?work=nounfollowtwitch"
                    ><img
                        :src="require('@/assets/img/projects/no_unfollow_twitch.jpg')"
                        width="100%"
                /></a>
                <h1 class="work_name">No unfollow Twitch</h1>
            </div>
            <div class="work">
                <a href="/projects?work=voteplus"
                    ><img :src="require('@/assets/img/projects/shopware_logo.png')" width="100%"
                /></a>
                <h1 class="work_name">VotePlus Shopware 5</h1>
            </div>
            <div class="work">
                <a href="/projects?work=phenixgamesv3"
                    ><img
                        :src="
                            require('@/assets/img/projects/PhenixGames_Logo_no_text_transparent.png')
                        "
                        width="100%"
                /></a>
                <h1 class="work_name">PhenixGames RageMP Server</h1>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Slider',
};
</script>

<style>
@import url('@/assets/css/work/work.css');
</style>
