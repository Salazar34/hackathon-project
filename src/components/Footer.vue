<template>
  <footer class="py-10">
    <div
      class="container mx-auto flex lg:flex-row flex-col items-center justify-center lg:space-x-96 lg:text-left text-center"
    >
      <div class="flex-col">
        <img class="" src="../assets/Temp.png" alt="Temp logo" width="200" />
      </div>
      <div class="links flex flex-col gap-2">
        <h1 class="font-bold pt-10">Useful Links</h1>
        <router-link to="/">Home</router-link>
        <router-link to="/goals">Goals</router-link>
        <router-link to="/municipality">Municipality</router-link>
        <router-link to="/city-security">City Security</router-link>
        <router-link to="/contribute">Contribute</router-link>
        <router-link to="/credits">Credits</router-link>
      </div>
    </div>
    <div
      class="container mx-auto flex flex-col items-center justify-center mt-16"
    >
      <p class="mb-5">
        Design by
        <a class="footer-link" href="https://salcode.xyz">Sal Code</a>
      </p>
      <p>
        Source code under
        <a
          class="footer-link"
          href="https://github.com/Salazar34/hackathon-project/blob/master/LICENSE"
          >MIT</a
        >
        License
      </p>
      <p>
        Website under
        <a
          class="footer-link"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          >CC BY-NC-SA 4.0</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
@keyframes footer-animation {
  from {
    background-position: left;
  }

  to {
    background-position: right;
  }
}

footer {
  box-shadow: 1em 1em 3em #000;
  background-size: 400%;
  position: relative;
  animation: bg-animation 15s infinite alternate;
}
footer p {
  @apply lg:text-lg;
}
h1 {
  @apply text-2xl;
}
a:not(.footer-link) {
  @apply transition ease-in-out hover:text-indigo-400 duration-500;
}

.footer-link {
  @apply relative text-sky-500;
}

.footer-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  @apply bg-sky-500;

  transform: scaleX(0);
  transform-origin: right;
  transition: transform 250ms ease-in;
}

.footer-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
</style>
