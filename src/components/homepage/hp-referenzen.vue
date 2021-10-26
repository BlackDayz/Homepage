<template>
  <div class="hp-ref">
    <div class="hp-ref-nav white bold">
      <div class="hp-ref-web ref-selected" id="hp-ref-web" @click="updateweb()">
        <span>Web-Development</span>
      </div>
      <div class="hp-ref-video" id="hp-ref-video" @click="updatevideo()">
        <span>Film</span>
      </div>
    </div>
    <div class="hp-ref-line"></div>
    <div class="hp-ref-body" id="hp-ref-body">
      <span v-if="refdata !== ''">{{ refdata }}</span>
      <div class="hp-ref-ctn">
        <p class="hp-ref-name"></p>
        <button class="hp-ref-btn"></button>
      </div>
    </div>
  </div>
</template>

<script>
import { isWebReferenz } from "../../assets/js/main";

export default {
  data: () => {
    return {
      refdata: [],
    };
  },
  methods: {
    updatevideo() {
      if (document.getElementById("hp-ref-web").classList.contains("ref-selected")) {
        document.getElementById("hp-ref-video").classList.add("ref-selected");
        document.getElementById("hp-ref-web").classList.remove("ref-selected");

        isWebReferenz(0, async (response) => {
          this.refdata = response;
        });
      }
      return;
    },
    updateweb(x) {
      if(x) {
        isWebReferenz(1, (response) => {
          this.refdata = response;
        });
      }
      if (document.getElementById("hp-ref-video").classList.contains("ref-selected") && x == undefined) {
        document.getElementById("hp-ref-web").classList.add("ref-selected");
        document.getElementById("hp-ref-video").classList.remove("ref-selected");

        isWebReferenz(1, (response) => {
          this.refdata = response;
        });
      }
      return;
    },
  },
  async mounted() {
    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true) {
          setTimeout(() => {
            document.querySelector(".hp-ref-line").style.width = "800px";
          }, 300);
        }
      },
      { threshold: [1] }
    );

    observer.observe(document.querySelector(".hp-ref-line"));

    await this.updateweb(1);
  },
};
</script>

<style scoped>
@import url("../../assets/css/hp-referenzen/hp-referenzen.css");
</style>