<template>
  <Navbar />
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Button from "../components/Button.vue";

export default {
  name: "Credits",
  components: {
    Navbar,
    Footer,
    Button,
  },
};
</script>

<style scoped></style>
