<template>
    <div class="card-container">
        <div class="card">
            <div class="card-header">
                <div
                    :style="{ backgroundImage: `url(${require('@/assets/gif/banner.gif')})` }"
                    class="banner-image"></div>
                <div class="infos">
                    <div class="profil-logo">
                        <img :src="require('@/assets/img/logo.png')" />
                    </div>
                    <div class="badges-container">
                        <!-- <div class="badge-item">
                        <img src="img/badges/team.webp" alt="" />
                        <div class="tooltip tooltip-up"></div>
                    </div>
                    <div class="badge-item">
                        <img src="img/badges/partner.webp" alt="" />
                        <div class="tooltip tooltip-up">Tooltip</div>
                    </div>
                    <div class="badge-item">
                        <img src="img/badges/megabughunter.webp" alt="" />
                        <div class="tooltip tooltip-up">Tooltip</div>
                    </div>
                    <div class="badge-item">
                        <img src="img/badges/eventcreator.webp" alt="" />
                        <div class="tooltip tooltip-up">Tooltip</div>
                    </div> -->
                        <div class="badge-item">
                            <img :src="require('@/assets/img/badges/hypesquad.webp')" alt="" />
                            <div class="tooltip tooltip-up">HypeSquad Balance</div>
                        </div>
                        <div class="badge-item">
                            <img :src="require('@/assets/img/badges/moderator.webp')" alt="" />
                            <div class="tooltip tooltip-up">Non-verified Discord Moderator</div>
                        </div>
                        <!-- <div class="badge-item">
                        <img src="img/badges/firsttimenitro.webp" alt="" />
                        <div class="tooltip tooltip-up"></div>
                    </div> -->
                        <div class="badge-item">
                            <img :src="require('@/assets/img/badges/nitro.webp')" alt="" />
                            <div class="tooltip tooltip-up">Discord Nitro user</div>
                        </div>
                        <div class="badge-item">
                            <img :src="require('@/assets/img/badges/boost.webp')" alt="" />
                            <div class="tooltip tooltip-up">Website boosting since 2019</div>
                        </div>
                    </div>
                    <div class="username">Mittelblut9<span>#1974</span></div>
                    <hr />
                </div>
            </div>
            <div class="card-content">
                <div class="about-me">
                    <div class="category-title">About Me</div>
                    <p>
                        🧑‍💻<strong>Web Dev</strong> - <i>vue3, nodejs, php</i><br />
                        🛠️ <strong>Moderator</strong> <br />
                        🛡️
                        <i
                            ><a
                                href="https://www.yaeow.com/"
                                class="link white"
                                target="_blank"
                                rel="nofollow"
                                >yaeow</a
                            >,
                            <a
                                href="https://biglink.to/chilledsad"
                                class="link white"
                                target="_blank"
                                rel="nofollow"
                                >chilledsad</a
                            >,
                            <a
                                href="https://www.youtube.com/c/nostalgicmusic"
                                class="link white"
                                target="_blank"
                                rel="nofollow"
                                >nostalgic</a
                            >,
                            <a
                                href="https://www.youtube.com/channel/UCz-rxehhsrMAyBEJdf4NG2w"
                                class="link white"
                                target="_blank"
                                rel="nofollow"
                                >thegoodvibe</a
                            ></i
                        ><br />
                        🧑‍💻 <strong>Bot Developer</strong><br />
                        🤖 Mittelbot <strong>BETA</strong>
                    </p>
                </div>
                <div class="roles">
                    <div class="category-title">Roles (Skills)</div>
                    <div class="roles-list">
                        <div class="role">
                            <div class="color"></div>
                            HTML5
                        </div>
                        <div class="role">
                            <div class="color"></div>
                            CSS3
                        </div>
                        <div class="role">
                            <div class="color"></div>
                            JavaScript
                        </div>
                        <div class="role">
                            <div class="color"></div>
                            Node.js
                        </div>
                        <div class="role">
                            <div class="color"></div>
                            Vue.js
                        </div>
                        <div class="role">
                            <div class="color"></div>
                            PHP
                        </div>
                        <div class="role">
                            <div class="color"></div>
                            Yii2
                        </div>
                    </div>
                </div>
                <div class="note">
                    <div class="category-title">Note</div>
                    <textarea placeholder="Click for add a note" id="dc_profile_note"></textarea>
                </div>
            </div>
            <div class="card-footer">
                <input type="text" placeholder="Send a message to @Mittelblut9" />
            </div>
        </div>
    </div>
</template>

<script>
import main from '@/assets/js/main.js';

export default {
    name: 'dc_profile',
};
</script>

<style scoped>
@import url('@/assets/css/dc_profile/dc_profile.css');
</style>
