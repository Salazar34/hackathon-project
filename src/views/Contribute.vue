<template>
  <Navbar />
  <div
    class="container py-12 mx-auto flex flex-col items-center justify-center"
  >
    <h2 class="text-2xl font-bold text-center">Contribute to the project</h2>
    <div class="mt-8 pb-5">
      <div class="grid grid-cols-1 gap-7 items-center">
        <label class="flex flex-col">
          <span class="text-white">First name</span>
          <input
            type="text"
            class="mt-1 block w-full rounded-md border-transparent focus:border-gray-500 focus:ring-0 text-gray-900"
            placeholder="John"
          />
        </label>
        <label class="block">
          <span class="text-white">Last name</span>
          <input
            type="text"
            class="mt-1 block w-full rounded-md border-transparent focus:border-gray-500 focus:ring-0 text-gray-900"
            placeholder="McEnroe"
          />
        </label>
        <label class="block">
          <span class="text-white">Email address</span>
          <input
            type="email"
            class="mt-1 block w-full rounded-md border-transparent focus:border-gray-500 focus:ring-0 text-gray-900"
            placeholder="john@example.com"
          />
        </label>
        <label class="block">
          <span class="text-white">What do you want to improve?</span>
          <select
            class="block w-full mt-1 rounded-md border-transparent focus:border-gray-500 focus:ring-0 text-gray-900"
          >
            <option>City security (general)</option>
            <option>Eagle 360</option>
            <option>Municipality</option>
            <option>Goals</option>
            <option>Other</option>
          </select>
        </label>
        <label class="block">
          <span class="text-white"
            >Describe what, why and how you'd like to improve</span
          >
          <textarea
            class="mt-1 block w-full rounded-md border-transparent focus:border-gray-500 focus:ring-0 text-gray-900"
            rows="3"
            placeholder="I want to improve this because ..."
          ></textarea>
        </label>
      </div>
    </div>
    <button
      class="p-3 bg-violet-600 text-white rounded-full w-40 transition ease-in-out duration-500 hover:bg-orange-500"
    >
      Submit
    </button>
  </div>
  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Button from "../components/Button.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "Contribute",
  components: {
    Navbar,
    Button,
    Footer,
  },
};
</script>

<style scoped></style>
