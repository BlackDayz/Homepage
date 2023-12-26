<template>
    <div class="card-container d-flex">
        <div class="card d-block my-0 mx-auto w-75 rounded-2">
            <div class="card-header p-0">
                <div
                    :style="{ backgroundImage: `url(${require('@/assets/gif/banner.gif')})` }"
                    class="banner-image w-100"
                ></div>
                <div class="infos px-3 position-relative">
                    <div class="profil-logo position-absolute bg-black rounded-circle">
                        <img :src="require('@/assets/img/logo.png')" class="rounded-circle" />
                    </div>
                    <div
                        class="badges-container position-absolute end-0 d-flex justify-content-end me-3"
                    >
                        <div class="badge-item position-relative ms-2">
                            <img
                                :src="require('@/assets/img/badges/hypesquad.webp')"
                                alt="hypesquad"
                                class="h-100"
                            />
                        </div>
                        <div class="badge-item position-relative ms-2">
                            <img
                                :src="require('@/assets/img/badges/moderator.webp')"
                                alt="Discord Moderator"
                                class="h-100"
                            />
                        </div>
                        <div class="badge-item position-relative ms-2">
                            <img
                                :src="require('@/assets/img/badges/nitro.webp')"
                                alt="Discord Nitro"
                                class="h-100"
                            />
                        </div>
                        <div class="badge-item position-relative ms-2">
                            <img
                                :src="require('@/assets/img/badges/boost.webp')"
                                alt="Discord boost"
                                class="h-100"
                            />
                        </div>
                    </div>
                    <div class="username text-white mt-5 fw-bold fs-4">{{ text.username }}</div>
                    <hr class="border-1 border-white" />
                </div>
            </div>
            <div class="card-content px-3">
                <div class="about-me mb-2">
                    <div class="category-title fw-bold text-uppercase mb-2">{{ text.aboutMe }}</div>
                    <p class="text-white">
                        🧑‍💻<strong>Web Dev</strong> - <i>vue3, nodejs, php</i><br />
                        🛠️ <strong>Moderator</strong> <br />
                        🛡️
                        <i
                            ><a
                                href="https://www.yaeow.com/"
                                class="text-white"
                                target="_blank"
                                rel="nofollow"
                                >yaeow</a
                            >,
                            <a
                                href="https://biglink.to/chilledsad"
                                class="text-white"
                                target="_blank"
                                rel="nofollow"
                                >chilledsad</a
                            >,
                            <a
                                href="https://www.youtube.com/c/nostalgicmusic"
                                class="text-white"
                                target="_blank"
                                rel="nofollow"
                                >nostalgic</a
                            >,
                            <a
                                href="https://www.youtube.com/channel/UCz-rxehhsrMAyBEJdf4NG2w"
                                class="text-white"
                                target="_blank"
                                rel="nofollow"
                                >thegoodvibe</a
                            ></i
                        ><br />
                        🧑‍💻 <strong>Bot Developer</strong><br />
                        🤖 Mittelbot <strong>BETA</strong>
                    </p>
                </div>
                <div class="roles mb-3">
                    <div class="category-title fw-bold text-uppercase mb-2">{{ text.roles }}</div>
                    <div class="roles-list d-flex flex-wrap">
                        <div
                            class="role rounded-1 text-white fw-light py-1 px-2 me-1 mt-1 d-flex align-items-center flex-row"
                            v-for="skill in skills"
                            :key="skill"
                        >
                            <div class="color rounded-circle me-1"></div>
                            {{ skill }}
                        </div>
                    </div>
                </div>
                <div class="note mb-2">
                    <div class="category-title fw-bold text-uppercase mb-2">{{ text.note }}</div>
                    <textarea
                        placeholder="Click for add a note"
                        id="dc_profile_note"
                        class="border-0 w-100 text-white rounded-2 p-2"
                    ></textarea>
                </div>
            </div>
            <div class="card-footer p-3 pt-0">
                <input
                    type="text"
                    placeholder="Send a message to @Mittelblut9"
                    class="border-0 w-100 rounded-1 text-white"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dc_profile',
    data() {
        return {
            text: {
                username: 'Mittelblut9',
                aboutMe: 'About Me',
                roles: 'Roles (Skills)',
                note: 'Note',
            },
            skills: [
                'CSS3',
                'JavaScript',
                'Node.js',
                'Vue.js',
                'PHP',
                'Yii2',
                'Shopware',
                'Symfony',
                'Discord.js',
                'Docker',
                'Sequelize',
            ],
        };
    },
};
</script>
