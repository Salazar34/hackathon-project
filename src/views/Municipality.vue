<template>
  <Navbar />
  <div class="container flex flex-col items-center py-20 font-bold">
    <h1 class="uppercase text-3xl">A new way to live the City</h1>
    <img src="../assets/hall.png" alt="Town Hall" width="250" class="py-10" />
    <p class="lg:w-1/2 text-justify leading-relaxed">
      To improve the municipality livings being we tought about some ideas, that
      are somehow able to improve the qol(Quality of life). One of the most
      reliable problem that requires to be solved is the minimization of
      burocracy, tryna to make things digital any sort of procedure. One of ours
      ideas is to improve the mechanism of shifting around the city, by giving
      cityzens public and shareble veichles to reduce pollution and the waste of
      fuel.
    </p>
    <div class="grid lg:grid-cols-3 lg:gap-0 gap-10 place-items-center pt-20">
      <div class="card container flex flex-col items-center justify-center">
        <h1 class="uppercase text-xl">Digitalization</h1>
        <img
          class="py-5"
          src="../assets/virtual.png"
          alt="Digitalization"
          width="100"
        />
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">Burocracy is so annoying, so we tought about how we can semplify it. The Answer is... DIGITALIZATION! Everything's simpler when digital, so our city is going to have a system for all of them.</p>
      </div>
      <div class="card container flex flex-col items-center justify-center">
        <h1 class="uppercase text-xl">Infrastructures Upgrading</h1>
        <img
          class="py-5"
          src="../assets/bridge.png"
          alt="Digitalization"
          width="100"
        />
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">To make our city better, our city is going to invest in infrastructures to let cityzens live their life much better. Better "bridges" makes better people.</p>
      </div>
            <div class="card container flex flex-col items-center justify-center">
        <h1 class="uppercase text-xl">Innovative Learning</h1>
        <img
          class="py-5"
          src="../assets/Machine-Learning.png"
          alt="Digitalization"
          width="100"
        />
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">Our city is going to offer a learning system to make everyone learn about technologies and new innovation. The mind of a man is the most precious part of him.</p>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Button from "../components/Button.vue";
export default {
  name: "Municipality",
  components: {
    Navbar,
    Footer,
    Button,
  },
};
</script>

<style>
</style>