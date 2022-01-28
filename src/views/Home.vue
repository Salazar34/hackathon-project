<template>
  <Navbar />
  <div class="container mx-auto lg:py-10">
    <div
      class="max-w-5xl lg:gap-36 gap-20 flex lg:flex-row flex-col items-center justify-between mx-auto py-20"
    >
      <img src="../assets/Temp.png" alt="" width="300" />
      <div class="flex flex-col gap-7">
        <h1 class="lg:text-6xl text-3xl lg:text-left text-center">
          BASSO - A new way to live the city
        </h1>
        <p class="lg:text-lg lg:text-left text-center">
          The main place in which most industrial activities take place is the
          city which, to date, represents a serious problem for pollution that
          must be solved with timely interventions.
        </p>
      </div>
    </div>
    <div
      class="custom-container-mw flex lg:flex-row flex-col items-center justify-between lg:mt-40 mt-20 mx-auto"
    >
      <div class="flex flex-col text-justify lg:w-full w-5/6">
        <h1 class="lg:text-5xl text-3xl uppercase text-center mb-10">
          The problem
        </h1>
        <img
          class="lg:hidden w-5/6 py-10 mx-auto"
          src="../assets/pollution.png"
          alt="Polluted city"
          width="500"
        />
        <p class="custom-mw">
          In the last decades the percentage of pollution in all cities and
          metropolis is constantly increasing, due to the continuous use of
          polluting vehicles and unsustainable energies. This big problem, thay
          has been undervalued for years, is now surfacing with all the releated
          consequences, i.e.
        </p>
        <ul class="list-decimal custom-mw mt-5">
          <li>
            Increased mortality related to cardivascular and respiratory
            diseases
          </li>
          <li>
            Rising global temperatures resulting in melting glaciers and
            increased natural disasters.
          </li>
          <li>
            Continued extinction of animal species, caused by climate anomalies
            and/or continued predator migrations.
          </li>
          <li>
            Disruption of natural ecosystems and destruction of animal habitats.
          </li>
        </ul>
      </div>
      <img
        class="city-img w-5/6 mt-10"
        src="../assets/pollution.png"
        alt="Polluted city"
        width="500"
      />
    </div>
    <h1 class="lg:text-4xl text-3xl text-center uppercase lg:mt-40 mt-36">
      Pollution consequences
    </h1>
    <div class="container mx-auto grid lg:grid-cols-2 place-items-center">
      <div class="grid lg:grid-cols-2 mt-20">
        <div
          v-for="column in columns"
          v-bind:key="column.id"
          class="column flex flex-col items-center"
        >
          <Column
            :header="column.header"
            :image="column"
            :additionalClass="column.imgClass"
          />
        </div>
      </div>
      <div class="container flex flex-col items-center justify-center">
        <p
          class="lg:text-lg lg:w-4/5 leading-relaxed text-justify lg:w-full w-5/6"
        >
          Cities, as primary places in the conduct of daily activities and with
          the highest concentration of movement, is the cause of most
          environmental pollution. The high concentration of polluting
          substances in the city allows a simple diffusion in every part of the
          atmosphere, thanks also to the intervention of the air currents. This
          leads to the spread of these substances throughout the world, causing
          serious problems:
        </p>
        <ul class="list-decimal lg:text-lg lg:w-4/5 w-5/6 text-justify mt-10">
          <li class="mb-5">
            Increased mortality related to cardivascular and respiratory
            diseases
          </li>
          <li class="mb-5">
            Rising global temperatures resulting in melting glaciers and
            increased natural disasters.
          </li>
          <li class="mb-5">
            Continued extinction of animal species, caused by climate anomalies
            and/or continued predator migrations.
          </li>
          <li>
            Disruption of natural ecosystems and destruction of animal habitats.
          </li>
        </ul>
      </div>
    </div>
    <div
      class="custom-container-mw flex lg:flex-row flex-col items-center justify-between mt-36 mx-auto"
    >
      <div class="flex flex-col lg:w-full text-justify w-5/6 pb-20">
        <h1 class="lg:text-5xl text-3xl uppercase text-center mb-10">
          The solution
        </h1>
        <img
          class="lg:hidden w-5/6 mx-auto py-5"
          src="../assets/futured-city.jpg"
          alt=""
        />
        <p class="custom-mw">
          The weapon we need to use to fight the pollution and its releated
          problems are sustainable energies and the common sense of allò the
          citizens. The use of sustainable energies as primary energy sources
          prevents our planet to be destroied. Most atmospheric pollution comes
          from cities, more specifically
        </p>
        <ul class="list-decimal custom-mw mt-5">
          <li>Pollution caused by smog from means of transport.</li>
          <li>
            Pollution caused by the high consumption of methane and gas (380
            million tonnes of methane per year, ISTAT).
          </li>
          <li>Pollution from discharges of toxic waste by industry.</li>
          <li>
            Pollution caused by the release of waste into the environment.
          </li>
        </ul>
      </div>
      <img
        class="city-img w-5/6 mt-10"
        src="../assets/futured-city.jpg"
        alt="Futured city"
        width="500"
      />
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Column from "../components/Column.vue";

import mortality from "../assets/death.png";
import temperature from "../assets/high-temperature.png";
import extinction from "../assets/extinction.png";
import ecosystem from "../assets/ecosystem.png";

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
          id: "1",
          header: "Mortality",
          text: "The number of annual deaths directly related to pollution is increasing every year.",
          image: mortality,
          imgClass: "pollution-img",
        },
        {
          id: "2",
          header: "Temperature",
          text: "Global temperatures are rising every year and glaciers are metling thanks to this.",
          image: temperature,
          imgClass: "pollution-img",
        },
        {
          id: "3",
          header: "Extinction",
          text: "Animal species are constantly endangered due to the destruction of natural habitats.",
          image: extinction,
          imgClass: "pollution-img",
        },
        {
          id: "3",
          header: "Ecosystems",
          text: "Ecosystems are constantly changing, causing a drastic change for animal species.",
          image: ecosystem,
          imgClass: "pollution-img",
        },
      ],
    };
  },
};
</script>

<style scoped>
.custom-mw {
  @apply lg:text-lg leading-relaxed;
  max-width: 550px;
}

@media (max-width: 1024px) {
  .city-img {
    display: none;
  }
}

.custom-mw li:not(:last-child) {
  @apply mb-5;
}

.column {
  width: 100%;
}

.custom-container-mw {
  max-width: 80rem;
}

.column img {
  width: 10px;
}
</style>
