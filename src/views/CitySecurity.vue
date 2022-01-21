<template>
  <Navbar />
  <div class="container mx-auto flex flex-col items-center main-content pb-10">
    <h1 class="text-5xl lg:text-center text-center">
      Our <b>Cities Security</b>
    </h1>
    <img class="py-10" src="../assets/city-security.png" alt="" width="250" />
    <p
      class="lg:text-lg lg:w-1/2 w-9/12 leading-relaxed text-justify leading-relaxed"
    >
      The security of cities is a subject of great importance that is at the
      basis of civility and peaceful coexistence. It is precisely for this
      reason that it is necessary to act in a timely manner by implementing
      reforms that are capable of improving the security system of the
      individual city.
    </p>

    <p
      class="lg:text-lg lg:w-1/2 w-9/12 leading-relaxed text-justify leading-relaxed"
    >
      <br />For this reason, it is necessary to go beyond the police: Although
      necessary, they are not enough to ensure maximum safety. By analysing the
      current cases of crime in cities, it has emerged that there is a lack of
      surveillance in all places; for this very reason, an effective solution to
      this problem would be to encourage citizens to carry out, on a voluntary
      basis, a city surveillance.
    </p>

    <div
      class="grid lg:grid-cols-3 lg:gap-10 gap-10 pt-40 lg:shrink md:shrink-0"
    >
      <div class="container flex flex-col items-center">
        <Column
          header="Good behavior bonus"
          imgPath="credit-card.png"
          text="The good conduct of citizens will be rewarded with city credits, usable by the citizens themselves in shops and/ or supermarkets. These credits can be included in your Curriculum Vitae (C.V.) or presented to your school or university to demonstrate your social and civic contribution. "
        />
      </div>
      <div class="container flex flex-col items-center">
        <Column
          header="City surveillance body"
          imgPath="police.png"
          text="The city’s surveillance corps is made up of qualified and specially trained police officers to ensure maximum security within the city. All police officers will be trained periodically with refresher courses in which new techniques and practices will be shown to ensure maximum safety."
        />
      </div>
      <div class="container flex flex-col items-center">
        <Column
          header="Eagle 360"
          imgPath="eagle.png"
          text="Eagle 360 is an advanced city monitoring system that allows city authorities to monitor comfortably and safely in every corner of the city. Citizens, by downloading an app, will be able to report any kind of infringement or crime to the authorities, actively contributing to the project. "
        />
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Button from "../components/Button.vue";
import Column from "../components/Column.vue";

export default {
  name: "CitySecurity",
  components: {
    Navbar,
    Footer,
    Button,
    Column,
  },
};
</script>

<style scoped>
.main-content {
  @apply pt-20;
}
</style>
