<template>
  <h1 class="text-3xl pb-10">{{ header }}</h1>
  <img :src="`./src/assets/${imgPath}`" alt="" width="250" />
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
  @apply text-lg py-10 text-justify w-96;
}
</style>
