<template>
  <Navbar />
  <div class="container mx-auto py-10">
    <div
      class="max-w-6xl gap-36 flex flex-row items-center justify-between mx-auto py-20"
    >
      <img src="../assets/Temp.png" alt="" width="300" />
      <div class="flex flex-col gap-5">
        <h1 class="lg:text-6xl">BASSO - A new way to live the city</h1>
        <p class="lg:text-lg">
          The main place in which most industrial activities take place is the
          city which, to date, represents a serious problem for pollution that
          must be solved with timely interventions.
        </p>
      </div>
    </div>
    <div
      class="custom-container-mw flex flex-row items-center justify-between mt-20 mx-auto"
    >
      <div class="flex flex-col">
        <h1 class="lg:text-5xl uppercase text-center mb-10">The problem</h1>
        <p class="custom-mw">
          In the last decades the percentage of pollution in all cities and
          metropolis is constantly increasing, due to the continuous use of
          polluting vehicles and unsustainable energies. This big problem, thay
          has been undervalued for years, is now surfacing with all the releated
          consequences, i.e.
          <ul class="list-decimal custom-mw mt-5">
            <li>Increased mortality related to cardivascular and respiratory diseases</li>
            <li>Rising global temperatures resulting in melting glaciers and increased natural disasters.</li>
            <li>Continued extinction of animal species, caused by climate anomalies and/or continued predator migrations.</li>
            <li>Disruption of natural ecosystems and destruction of animal habitats.</li>
          </ul>
        </p>
      </div>
      <img src="../assets/pollution.png" alt="Polluted city" width="500" />
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped>
.custom-mw{
  @apply lg:text-lg;
  max-width: 650px;
}

.custom-container-mw{
  max-width: 90rem;
}
</style>
