<template>
  <div class="relative w-48 h-48">
    <NuxtImg
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      alt="Images"
      class="absolute rounded-xl inset-0 w-48 h-48 object-cover transition-opacity duration-1000 ease-in-out shadow-2xl"
      :class="{ 'opacity-0': currentIndex !== index }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: ["/fifth.jpg", "/second.jpg", "/third.jpg", "/first.jpg"],
      currentIndex: 0,
    };
  },
  mounted() {
    this.startFade();
  },
  methods: {
    startFade() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 4000);
    },
  },
};
</script>
