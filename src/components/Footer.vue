<template>
  <footer class="py-10">
    <div class="container mx-auto flex flex-row justify-between space-x-96">
      <h2 class="text-4xl font-bold">Basso City</h2>
      <div class="links flex flex-col gap-2">
        <h1 class="font-bold">Useful Links</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/goals">Goals</router-link>
        <router-link to="/municipality">Municipality</router-link>
        <router-link to="/city-security">City Security</router-link>
        <router-link to="/contribute">Contribute</router-link>
        <router-link to="/credits">Credits</router-link>
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
  @apply text-2xl mr-40;
}
a {
  @apply transition ease-in-out hover:text-indigo-400 duration-500;
}
</style>
