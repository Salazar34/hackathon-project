<template>
  <h1 class="text-3xl pb-10">{{ header }}</h1>
  <img
    :class="'column-image lg:w-6/12 md:w-full' + ' ' + (additionalClass || '')"
    :src="image.image"
    alt=""
    width="250"
  />
  <p class="column-text">
    {{ text }}
  </p>
</template>

<script>
export default {
  name: "Column",
  props: {
    header: String,
    imgPath: String,
    additionalClass: String,
    text: String,
    image: Object,
  },
};
</script>

<style scoped>
p.column-text {
  @apply py-10 text-justify lg:w-96 w-9/12 leading-relaxed;
  font-size: 17px;
}
</style>
