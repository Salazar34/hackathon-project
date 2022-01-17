<template>
  <h1 class="text-3xl pb-10">{{ header }}</h1>
  <img
    class="lg:w-6/12 md:w-full"
    :src="`./src/assets/${imgPath}`"
    alt=""
    width="250"
  />
  <p class="security-goal">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "Column",
  props: {
    header: String,
    imgPath: String,
    text: String,
  },
};
</script>

<style scoped>
p.security-goal {
  @apply py-10 text-justify lg:w-96 w-9/12 leading-relaxed;
  font-size: 17px;
}
</style>
