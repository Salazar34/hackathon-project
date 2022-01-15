<template>
  <button
    class="bg-sky-500 p-4 rounded-2xl text-lg transition ease-in-out duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/50"
  >
    <router-link :to="{ destination }">{{ text }}</router-link>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    destination: String,
  },
};
</script>

<style scoped></style>
