<template>
  <Navbar />
  <div class="grid lg:grid-cols-3 lg:gap-10 gap-10 place-items-center pt-20 lg:pb-10">
    <div class="card container flex flex-col items-center justify-center">
      <a href="https://www.flaticon.com/free-icons/hall" title="hall icons">
        <img
          class="py-5"
          src="../assets/hall.png"
          alt="Planet earth"
          width="100"
        />
      </a>
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
        Hall icons created by Smashicons - Flaticon
        </p>   
    </div>
        <div class="card container flex flex-col items-center justify-center">
        <a href="https://www.flaticon.com/free-icons/pokemon" title="pokemon icons">
        <img
          class="py-5"
          src="../assets/Temp.png"
          alt="Planet earth"
          width="100"
        />
        </a>
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
        Pokemon icons created by Roundicons Freebies - Flaticon
        </p>   
    </div>
        <div class="card container flex flex-col items-center justify-center">
        <a href="https://www.flaticon.com/free-icons/moon-festival" title="moon festival icons">
        <img
          class="py-5"
          src="../assets/moon-festival.png"
          alt="Planet earth"
          width="100"
        />
        </a>
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
        Moon festival icons created by Flat Icons - Flaticon
        </p>   
    </div>
        <div class="card container flex flex-col items-center justify-center">
        <a href="https://www.flaticon.com/free-icons/digital" title="digital icons">
        <img
          class="py-5"
          src="../assets/virtual.png"
          alt="Planet earth"
          width="100"
        />
        </a>
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
        Digital icons created by Freepik - Flaticon
        </p>   
    </div>
        <div class="card container flex flex-col items-center justify-center">
        <a href="https://www.flaticon.com/free-icons/tower-bridge" title="Tower bridge icons">
        <img
          class="py-5"
          src="../assets/bridge.png"
          alt="Planet earth"
          width="100"
        />
        </a>
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
        Tower bridge icons created by Freepik - Flaticon
        </p>   
    </div>
        <div class="card container flex flex-col items-center justify-center">
          <a href="https://www.flaticon.com/free-icons/machine-learning" title="machine learning icons">
        <img
          class="py-5"
          src="../assets/machine-learning.png"
          alt="Planet earth"
          width="100"
        />
          </a>
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
        Machine learning icons created by Flat Icons - Flaticon
        </p>   
    </div>
  </div>
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
