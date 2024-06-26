<template>
  <div
    class="fadediv absolute w-screen h-screen bg-[#f59794] bg-opacity-40 z-10"
  ></div>
  <div
    class="element flex flex-col justify-center items-center gap-2 opacity-0 scale-90"
  >
    <!-- IMG -->
    <div
      class="flex flex-col sm:flex-row justify-center items-center gap-5 border-b-2 border-[#FF0000] border-opacity-10"
    >
      <div class="flex gap-3">
        <NuxtImg
          src="/avatar.png"
          width="130px"
          class="place-self-center hover:-rotate-6 hover:scale-105 transition duration-200"
        />
        <!-- NAME -->
        <div class="flex items-center gap-10">
          <div class="flex flex-col text-2xl">
            <div class="relative">
              <div class="space-x-1 fadetext">
                <span>sonya</span>
                <span class="text-[#D79FAE]">♡‧₊˚</span>
              </div>
              <span class="text-gradient text-xl absolute top-6">(@wwsou)</span>
            </div>
            <div class="flex flex-col text-lg text-[#857377] mt-6">
              <span>๑ creating keycaps</span>
              <span>๑ streaming sometimes</span>
              <span class="text-[#857377] hover:text-[#D79FAE]">
                ๑
                <a
                  href="https://hipolink.me/wwsou"
                  target="_blank"
                  class="underline cursor-pointer transition"
                >
                  hipolink
                </a>
              </span>
              <div class="flex gap-1 text-xl text-[#D79FAE] ml-1 mt-2">
                <a href="https://www.instagram.com/wwsou/" target="_blank">
                  <Icon name="fe:instagram" class="links" />
                </a>
                <a href="https://vk.com/wwsou" target="_blank">
                  <Icon name="tabler:brand-vk" class="links" />
                </a>
                <a href="https://t.me/wwsou" target="_blank">
                  <Icon name="mingcute:telegram-fill" class="links" />
                </a>
                <a href="https://www.twitch.tv/netnesonya" target="_blank">
                  <Icon name="ph:twitch-logo-bold" class="links" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ImageWidget class="bottom-4 left-2" />
    </div>

    <!-- Accordion -->
    <Accordion />
  </div>
</template>

<script setup>
const { $gsap } = useNuxtApp();
onMounted(() => {
  $gsap.to(".element", { opacity: 1, delay: 0.3, duration: 1 });
  $gsap.to(".element", { scale: 1, delay: 0.3, duration: 1 });
  $gsap.to(".fadediv", { opacity: 0, duration: 2 });
  $gsap.to(".fadediv", { zIndex: 0, duration: 2 });
});
</script>

<style scoped>
.element {
  font-family: Cabin;
  position: absolute;
  inset: 0px;
  max-width: 100vw;
  max-height: 100dvh;
  margin: auto;
}

@keyframes colorChange {
  0%,
  100% {
    color: #96787f;
  }
  50% {
    color: #d79fae;
  }
}

.text-gradient {
  @apply animate-color-change;
}

.animate-color-change {
  animation: colorChange 4s ease infinite;
}

.links {
  @apply cursor-pointer hover:text-[#ECD4DF] hover:-translate-y-1 duration-300 transition;
}

.fadetext {
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
