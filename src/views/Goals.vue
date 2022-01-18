<template>
  <Navbar />
  <div class="container flex flex-col items-center py-20 font-bold">
    <h1 class="uppercase text-3xl">Our Mission</h1>
    <div class="flex flex-row justify-between gap-40 pt-10">
      <img src="../assets/Temp.png" alt="Temp" width="250" />
      <img
        src="../assets/global-goals.png"
        alt="Global Goals Logo"
        width="250"
      />
    </div>
    <p class="lg:w-1/2 text-justify leading-relaxed pt-10">
      The goal of our project is the improvement of qol and the conditions of
      our planet to ensure the best possible future for all future generations.
      For this reason, our goal is to build the best possible city by meeting
      all 17 global targets. We chose to follow this model so that it can be
      easily reusable and remodeleable, as well as flexible, innovative and 100%
      sustainable.
    </p>
    <p class="font-bold pt-10 pb-5 text-2xl">Have some nice ideas?</p>
    <Button text="Let us know here" destination="contribute" />
    <div class="grid lg:grid-cols-3 lg:gap-0 gap-10 place-items-center pt-20">
      <div class="card container flex flex-col items-center justify-center">
        <h1 class="uppercase text-xl">sustainability</h1>
        <img
          class="py-5"
          src="../assets/planet-earth.png"
          alt="Planert heart"
          width="100"
        />
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
          The main objective is the creation of infrastructures that are
          sustainable and that can meet all the needs of citizens without
          hurting our precious planet.
        </p>
      </div>
      <div class="card container flex flex-col items-center justify-center">
        <h1 class="uppercase text-xl">modernity</h1>
        <img
          class="py-5"
          src="../assets/modern-architecture.png"
          alt="Planert heart"
          width="100"
        />
        <p class="lg:w-full text-justify lg:w-4/5 w-3/4 lg:leading-relaxed">
          To make things more confortable for all the people around, we need
          some kind of modernization of the nowadays reality. So we tought about
          a new shifting way to let things getting relaxing.
        </p>
      </div>
      <div class="card container flex flex-col items-center justify-center">
        <h1 class="uppercase text-xl">Sensibilization</h1>
        <img
          class="py-5"
          src="../assets/moon-festival.png"
          alt="Planert heart"
          width="100"
        />
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
          We want to create a city with public places where cultural or
          non-cultural events can be organised to let the cityzens have fun or
          to sensibilize them.
        </p>
      </div>
      <div
        class="card container flex flex-col items-center justify-center pt-20"
      >
        <h1 class="uppercase text-xl">Usefullness</h1>
        <img
          class="py-5"
          src="../assets/people.png"
          alt="Planert heart"
          width="100"
        />
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
          To improve even more the qol of our city we need to offer to all of
          the popolation any sort of utility, from supermarkets to dentists.
        </p>
      </div>
      <div
        class="card container flex flex-col items-center justify-center pt-20"
      >
        <h1 class="uppercase text-xl">Initiative</h1>
        <img
          class="py-5"
          src="../assets/deforestation.png"
          alt="Planert heart"
          width="100"
        />
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
          In order to don't let our world down we'll have some kinda initiave to
          figth all the circumstances that are dangerous for our planet lives,
          like deforestation.
        </p>
      </div>
      <div
        class="card container flex flex-col items-center justify-center pt-20"
      >
        <h1 class="uppercase text-xl">Community</h1>
        <img
          class="py-5"
          src="../assets/teamwork.png"
          alt="Planert heart"
          width="100"
        />
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
          Cooperation and mutual respect form the basis of our system. All
          citizens will be able to experience everyday life in community along
          with others.
        </p>
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
  name: "Goals",
  components: {
    Navbar,
    Footer,
    Button,
  },
};
</script>

<style scoped></style>
