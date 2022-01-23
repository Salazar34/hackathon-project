<template>
  <div
    class="card container flex flex-col items-center justify-center pt-20 pb-20"
  >
    <a :href="`${link}`">
      <img
        :class="`${imgClass || 'py-5'}`"
        :src="`../src/assets/${imgName}`"
        :alt="`${imgAlt}`"
        width="100"
      />
    </a>
    <p class="lg:w-full lg:w-3/5 lg:leading-relaxed w-3/4">{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    link: String,
    imgClass: String,
    imgName: String,
    imgAlt: String,
    text: String,
    image: Object,
  },
};
</script>

<style scoped></style>
