<template>
  <NavbarIt/>
  <div
    class="container py-12 mx-auto flex flex-col items-center justify-center"
  >
    <h2 class="text-2xl font-bold text-center">Contribuisci al progetto</h2>
    <div class="mt-8 pb-5">
      <div class="grid grid-cols-1 gap-7 items-center">
        <label class="flex flex-col">
          <span class="text-white">Nome</span>
          <input
            type="text"
            class="mt-1 block w-full rounded-md border-transparent focus:border-gray-500 focus:ring-0 text-gray-900"
            placeholder="Matteo"
          />
        </label>
        <label class="block">
          <span class="text-white">Cognome</span>
          <input
            type="text"
            class="mt-1 block w-full rounded-md border-transparent focus:border-gray-500 focus:ring-0 text-gray-900"
            placeholder="Berrettini"
          />
        </label>
        <label class="block">
          <span class="text-white">Indirizzo Email</span>
          <input
            type="email"
            class="mt-1 block w-full rounded-md border-transparent focus:border-gray-500 focus:ring-0 text-gray-900"
            placeholder="matteo@esempio.com"
          />
        </label>
        <label class="block">
          <span class="text-white">Cosa vorresti migliorare?</span>
          <select
            class="block w-full mt-1 rounded-md border-transparent focus:border-gray-500 focus:ring-0 text-gray-900"
          >
            <option>Sicurezza cittadina (generale)</option>
            <option>Eagle 360</option>
            <option>Comune</option>
            <option>Obbiettivi</option>
            <option>Altro</option>
          </select>
        </label>
        <label class="block">
          <span class="text-white"
            >Descrivi cosa, come e perchè vorresti migliorarlo.</span
          >
          <textarea
            class="mt-1 block w-full rounded-md border-transparent focus:border-gray-500 focus:ring-0 text-gray-900"
            rows="3"
            placeholder="Voglio migliorarlo perchè ..."
          ></textarea>
        </label>
      </div>
    </div>
    <button
      class="p-3 bg-violet-600 text-white rounded-full w-40 transition ease-in-out duration-500 hover:bg-orange-500"
    >
      Invia
    </button>
  </div>
  <FooterIt/>
</template>

<script>
import NavbarIt from "../../components/components-it/Navbar-it.vue";
import Button from "../../components/Button.vue";
import FooterIt from "../../components/components-it/Footer-it.vue";

export default {
  name: "Contribute",
  components: {
    NavbarIt,
    Button,
    FooterIt,
  },
};
</script>/components-it

<style scoped></style>
