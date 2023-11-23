<template>
    <ul class="list-unstyled">
        <li class="m-5 me-0">
            <div class="d-flex align-items-center">
                <img :src="require('@/assets/img/icons/hello-48.png')" width="42" />
                <span>
                    Hey, my name is obviously Mittelblut9 I'm 20 years old and a
                    <span class="text-green">Junior</span> Web Developer living in Germany
                </span>
            </div>
        </li>
        <li class="m-5 me-0">
            <div class="d-flex align-items-center">
                <img :src="require('@/assets/img/icons/icons8-prize-48.png')" width="42" />
                <span>
                    Official trained
                    <span class="fw-bold">technical design assistant</span>
                </span>
            </div>
        </li>
        <li class="m-5 me-0">
            <div class="d-flex align-items-center">
                <img :src="require('@/assets/img/icons/degree-42.png')" width="42" />
                <span>
                    At the moment I am completing my training as a
                    <span class="fw-bold">IT specialist for application development</span>
                </span>
            </div>
        </li>
        <li class="m-5 me-0">
            <div class="d-flex align-items-center">
                <img :src="require('@/assets/img/icons/cloud-48.png')" width="42" />
                <span>
                    Most of the days i'm working on projects like websites or my own Discord Bot.. or
                    uhm.. just playing games :)
                </span>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'AboutMe',
};
</script>
