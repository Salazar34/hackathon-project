<template>
  <Navbar />
  <div class="container mx-auto py-10">
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-4xl">BASSO - The future for all cities</h1>
      <img
        class="mt-10"
        src="../assets/Temp.png"
        alt="BASSO Logo"
        width="250"
      />
      <div class="grid grid-cols-3 gap-5">
        <!-- <Column v-for="column in columns" v-bind:key="column.id" /> -->
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Column from "../components/Column.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
    Column,
  },
  data: function () {
    return {
      columns: [
        {
          id: 1,
          header: "",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
