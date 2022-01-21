<template>
  <footer class="py-10">
    <div
      class="container mx-auto flex lg:flex-row flex-col items-center justify-center lg:space-x-96 lg:text-left text-center"
    >
      <div class="flex-col">
        <!-- <h2 class="text-4xl font-bold">BASSO City</h2> -->
        <img class="" src="../../assets/Temp.png" alt="Temp logo" width="200" />
      </div>
      <div class="links flex flex-col gap-2">
        <h1 class="font-bold pt-10">Link Utili</h1>
        <router-link to="/it/">Home</router-link>
        <router-link to="/it/goals">Obbiettivi</router-link>
        <router-link to="/it/municipality">Comune</router-link>
        <router-link to="/it/city-security">Sicurezza In Città</router-link>
        <router-link to="/it/contribute">Contribuisci</router-link>
        <router-link to="/it/credits">Crediti</router-link>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background-color: #141a2c;
}
h1 {
  @apply text-2xl;
}
a {
  @apply transition ease-in-out hover:text-indigo-400 duration-500;
}
</style>
