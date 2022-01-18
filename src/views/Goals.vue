<template>
  <Navbar/>
  <div class="container flex flex-col items-center py-20 font-bold">
  <h1 class="uppercase text-3xl">Our Mission</h1>
  <div class="flex flex-row justify-between">
    <img src="../assets/Temp.png" alt="Temp" width="250">
    <img src="../assets/Global Goals.png" alt="Global Goals Logo" width="250">
  </div>
  <p class="lg:w-1/2 text-justify leading-relaxed pt-10">Our project's goal is the improving of qol and of ours planet's conditions to guarantee the best future
    possible to all of the next generations. For this reason, our objective is to build the best city possible
    respecting all of teh 17 global goals. We chose to follow this model so that it can be easily reusable and remodellable. 
  </p>
  <div class="grid lg:grid-cols-3 gap-5 place-items-center">
    <div class="container flex flex-col items-center justify-center">
      <h1 class="uppercase text-xl">sustainability</h1>
      <img class="py-5" src="../assets/planet-earth.png" alt="Planert heart" width="100">
      <p class="lg:w-full text-justify">The main objective is the creation of infrastructures that are sustainable and that can meet all the needs of citizens without hurting our precious planet.</p>
    </div>
    <div class="container flex flex-col items-center justify-center">
      <h1 class="uppercase text-xl">modernity</h1>
      <img class="py-5" src="../assets/planet-earth.png" alt="Planert heart" width="100">
      <p class="lg:w-full text-justify">To make things more confortable for all the people around, we need some kind of modernization of the nowadays reality.So we tought about a new shifting way to let things getting relaxing. </p>
    </div>
    <div class="container flex flex-col items-center justify-center">
      <h1 class="uppercase text-xl">Sensibilization</h1>
      <img class="py-5" src="../assets/planet-earth.png" alt="Planert heart" width="100">
      <p class="lg:w-full text-justify">We want to create a city with public places where cultural or non-cultural events can be organised to let the cityzens have fun or to sensibilize them.</p>
    </div>
    <div class="container flex flex-col items-center justify-center">
      <h1 class="uppercase text-xl">Usefullness</h1>
      <img class="py-5" src="../assets/planet-earth.png" alt="Planert heart" width="100">
      <p class="lg:w-full text-justify">To improve even more the qol of our city we need to offer to all of the popolation any sort of utility, from supermarkets to dentists.</p>
    </div>
      <div class="container flex flex-col items-center justify-center">
      <h1 class="uppercase text-xl">Initiative</h1>
      <img class="py-5" src="../assets/planet-earth.png" alt="Planert heart" width="100">
      <p class="lg:w-full text-justify">In order to don't let our world down we'll have some kinda initiave to figth all the circumstances that are dangerous for our planet lives, like deforestation.</p>
    </div>
      <div class="container flex flex-col items-center justify-center">
      <h1 class="uppercase text-xl">Being sus</h1>
      <img class="py-5" src="../assets/planet-earth.png" alt="Planert heart" width="100">
      <p class="lg:w-full text-justify">Tatatatata tàtàtà bumbum, tatatatata ta tata ta ta tatà,Tatatatata tàtàtà bumbum, tatatatata ta tata ta ta tatà,Tatatatata tàtàtà bumbum, tatatatata ta tata ta ta tatà,Tatatatata tàtàtà bumbum, tatatatata ta tata ta ta tatà,</p>
    </div>
  </div>
  </div>
  <Footer/>

</template>

<script>
import Navbar from "../components/Navbar.vue"
import Footer from "../components/Footer.vue"
import Button from "../components/Button.vue"
export default {
    name: "Goals", 
    components: {
        Navbar,
        Footer,
        Button
    }
}

</script>

<style>

</style>