<template>
  <Navbar />
  <div class="container flex flex-col items-center py-20 font-bold mx-auto">
    <h1 class="uppercase text-3xl">Un nuovo modo per vivere la città</h1>
    <img src="../assets/hall.png" alt="Town Hall" width="250" class="py-10" />
    <p class="lg:w-1/2 text-justify leading-relaxed">
      Per migliorare la vivibilità della nostra città, abbiamo pensato ad alcune
      idee che possano in qualche modo migliorare la qualità di vita. Uno dei maggiori problemi presenti è la riduzione e semplificazione della burocrazia, in cui si potrebbe digitalizzare ogni pratica. Un'altra delle nostre idee era un nuovo metodo di spostamento all'interno della città, offrendo ai cittadini delle auto prenotabili e condivise per ridurre l'inquinamento e lo spreco di carburante.
    </p>
    <div class="grid lg:grid-cols-3 lg:gap-0 gap-10 place-items-center pt-20">
      <div class="card container flex flex-col items-center justify-center">
        <h1 class="uppercase text-xl">Digitalizzazione</h1>
        <img
          class="py-5"
          src="../assets/virtual.png"
          alt="Digitalization"
          width="100"
        />
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
          La burocrazia è noiosa, quindi abbiamo pensato a come semplificarla.
          la risposta è...Digitalizzarla! Tutto è più facile se in digitale, quindi la
          città offrirà un sistema per ogni evenienza.
        </p>
      </div>
      <div class="card container flex flex-col items-center justify-center">
        <h1 class="uppercase text-xl">Miglioramento delle infrastrutture</h1>
        <img
          class="py-5"
          src="../assets/bridge.png"
          alt="Digitalization"
          width="100"
        />
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
          Per renderè la città migliore, si investirà nel miglioramento delle infrastrutture
          così da rendere migliore la vita dei cittadini. "Ponti" migliori rendono la gente migliore.
        </p>
      </div>
      <div class="card container flex flex-col items-center justify-center">
        <h1 class="uppercase text-xl">Insegnamento innovativo</h1>
        <img
          class="py-5"
          src="../assets/Machine-Learning.png"
          alt="Digitalization"
          width="100"
        />
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
          La nostra città offrirà un sistema di insegnamento per tutti dove si apprenderanno nozioni
          sulla tecnologia e sulle innovazioni contemporanee. La mente di un uomo è la miglior parte di se.
        </p>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import NavbarIt from "../components/components-it/Navbar-it.vue";
import FooterIt from "../components/components-it/Footer-it.vue";
import Button from "../components/Button.vue";
export default {
  name: "Comune",
  components: {
    NavbarIt,
    FooterIt,
    Button,
  },
};
</script>

<style></style>
