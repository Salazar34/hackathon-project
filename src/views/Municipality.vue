<template>
  <Navbar/>
  <h1>A new way to live the City</h1>
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