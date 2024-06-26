// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@hypernym/nuxt-gsap",
  ],
  gsap: {
    composables: true,
    provide: true,
    extraPlugins: {
      scrollTrigger: true,
    },
  },
});
