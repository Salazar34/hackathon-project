<template>
  <Navbar/>
  <div class="container flex flex-col items-center py-20 font-bold">
  <h1 class="uppercase text-3xl">A new way to live the City</h1>
  <img src="../assets/hall.png" alt="Town Hall" width="250" class="py-10">
  <p class="lg:w-1/2 text-justify leading-relaxed">To improve the municipality livings being we tought about some ideas, that are somehow able to improve 
    the qol(Quality of life). One of the most reliable problem that requires to be solved is the minimization
    of burocracy, tryna to make things digital any sort of procedure. One of ours ideas is to improve the mechanism of
    shifting around the city, by giving cityzens public and shareble veichles to reduce pollution and the waste of fuel.
  </p>
  </div>
  <Footer/>

</template>

<script>
import Navbar from "../components/Navbar.vue"
import Footer from"../components/Footer.vue"
import Button from"../components/Button.vue"
export default {
    name: "Municipality", 
    components: {
        Navbar,
        Footer,
        Button
    }
}

</script>

<style>

</style>