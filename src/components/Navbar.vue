<script>
export default {
  name: "Navbar",
  methods: {
    onClick() {
      const btn = document.querySelector(".mobile-menu-button");
      const menu = document.querySelector(".mobile-menu");

      btn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    },
  },
};
</script>

<template>
  <nav class="shadow-2xl py-4">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between">
        <div class="flex">
          <div>
            <router-link to="/" class="flex items-center py-4 px-2">
              <span class="nav-brand text-3xl uppercase">Basso City</span>
            </router-link>
          </div>
          <div class="hidden flex px-20 gap-5 md:flex items-center space-x-7">
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
            <router-link to="/it">
              <img
                src="../assets/italian-flag.png"
                alt="Italian flag"
                width="40"
              />
            </router-link>
          </div>
        </div>
        <div class="lg:hidden flex items-center">
          <button class="outline-none mobile-menu-button" @click="onClick()">
            <svg
              class="w-6 h-6 text-gray-500 hover:text-indigo-500"
              x-show="!showMenu"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="hidden mobile-menu">
      <ul class="flex flex-col items-center justify-center">
        <li class="active">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/goals">Goals</router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/municipality"
            >Municipality</router-link
          >
        </li>
        <li>
          <router-link class="nav-link" to="/city-security"
            >City security</router-link
          >
        </li>
        <li>
          <router-link class="nav-link" to="/contribute"
            >Contribute</router-link
          >
        </li>
        <li>
          <router-link to="/it">
            <img
              class="w-2/3"
              src="../assets/italian-flag.png"
              alt="Italian flag"
            />
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
a.nav-link {
  @apply flex items-center text-lg transition ease-in-out hover:text-indigo-400 duration-500 relative;
}

a.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  @apply bg-indigo-500;

  transform: scaleX(0);
  transform-origin: right;
  transition: transform 250ms ease-in;
}

a.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
