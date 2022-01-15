<script>
export default {
  name: "Navbar",
};
</script>

<template>
  <nav class="shadow-2xl">
    <div class="max-6xl mx-auto px-4 shadow-2xl">
      <div class="flex justify-between">
        <div class="flex">
          <a
            href="#"
            class="navbar-brand flex items-center py-6 px-10 text-3xl uppercase"
          >
            Sus-Landia
          </a>
          <img
            class="py-4 logo"
            src="../assets/psyduck-logo.png"
            alt=""
            width="50"
          />
        </div>
        <div class="flex px-20 gap-10">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/goals">Goals</router-link>
          <router-link class="nav-link" to="/municipality"
            >Municipality</router-link
          >
          <router-link class="nav-link" to="/city-security"
            >City security</router-link
          >
          <router-link class="nav-link" to="/contribute"
            >Contribute</router-link
          >
        </div>
        <div class="hidden mobile-menu"></div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a.nav-link {
  @apply flex items-center text-lg transition ease-in-out hover:text-indigo-400 duration-500;
}
</style>
