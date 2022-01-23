<template>
  <NavbarIt />
  <div class="container flex flex-col items-center py-20 font-bold mx-auto">
    <h1 class="uppercase text-3xl">La nostra missione</h1>
    <div class="flex lg:flex-row justify-between gap-40 pt-10">
      <img
        class="hidden lg:block"
        src="../../assets/Temp.png"
        alt="Temp"
        width="250"
      />
      <img
        src="../../assets/global-goals.png"
        alt="Global Goals Logo"
        width="250"
      />
    </div>
    <p class="lg:max-w-prose w-3/4 text-justify leading-relaxed pt-10">
      L'obbiettivo del nostro progetto è di migliorare la qualità della vita e
      le condizioni del nostro pianeta, per assicurare un mondo migliore alle
      generazioni future. Perciò la nostra missione è quella di progettare una
      città sostenibile che rispetti tutti e 17 gli obbiettivi globali. Abbiamo
      deciso di seguire questo modello per far si che sia rimodellabile,
      flessibile, innovativa e al 100% sostenibile.
    </p>
    <p class="font-bold pt-10 pb-5 text-2xl">Hai qualche buona idea?</p>
    <Button text="Diccelo Qui!" destination="/it/contribute" />
    <div
      class="grid lg:grid-cols-3 lg:gap-0 gap-10 lg:place-items-center pt-20"
    >
      <div class="card container flex flex-col items-center justify-center">
        <h1 class="uppercase text-xl">sostenibilità</h1>
        <img
          class="py-5"
          src="../../assets/planet-earth.png"
          alt="Planet earth"
          width="100"
        />
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
          L'obbiettivo principale è quello di creare delle infrastrutture
          sostenibili e che soddisfino tutte le esigenze dei cittadini senza
          danneggiare il nostro prezioso pianeta
        </p>
      </div>
      <div
        class="card container flex flex-col max-w-screen-md items-center justify-center"
      >
        <h1 class="uppercase text-xl">modernizzazione</h1>
        <img
          class="py-5"
          src="../../assets/modern-architecture.png"
          alt="Planert heart"
          width="100"
        />
        <p class="lg:w-full text-justify lg:w-4/5 w-3/4 lg:leading-relaxed">
          Per rendere le cose confortevoli per le persone, necessitiamo una
          modernizzazione della realtà attuale. Perciò abbiamo pensato ad un
          nuovo metodo di movimento per rendere le cose più rilassanti.
        </p>
      </div>
      <div class="card container flex flex-col items-center justify-center">
        <h1 class="uppercase text-xl">Sensibilizzazione</h1>
        <img
          class="py-5"
          src="../../assets/moon-festival.png"
          alt="Planert heart"
          width="100"
        />
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
          Vogliamo creare una città dove ci saranno luoghi dove organizzare
          eventi, culturali e non, per intrattenere e sensibilizzare i
          cittadini.
        </p>
      </div>
      <div
        class="card container flex flex-col items-center justify-center pt-20"
      >
        <h1 class="uppercase text-xl">Utilità</h1>
        <img
          class="py-5"
          src="../../assets/people.png"
          alt="Planert heart"
          width="100"
        />
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
          Per migliorare ancora di più la vivibilità della nostra città dobbiamo
          fornire alle genti qualsiasi tipo di comodità, dai supermercati ai
          dentisti.
        </p>
      </div>
      <div
        class="card container flex flex-col items-center justify-center pt-20"
      >
        <h1 class="uppercase text-xl">Iniziativa</h1>
        <img
          class="py-5"
          src="../../assets/deforestation.png"
          alt="Planert heart"
          width="100"
        />
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
          Per far si che il nostro mondo non decada abbiamo qualche iniziativa
          per combattere tutte quelle circostanze dannose per il pianeta, come
          la deforestazione.
        </p>
      </div>
      <div
        class="card container flex flex-col items-center justify-center pt-20"
      >
        <h1 class="uppercase text-xl">Community</h1>
        <img
          class="py-5"
          src="../../assets/teamwork.png"
          alt="Planert heart"
          width="100"
        />
        <p class="lg:w-full text-justify lg:w-3/5 lg:leading-relaxed w-3/4">
          Cooperazione e rispetto reciproco saranno la base della nostra
          comunità. Tutti i cittadini saranno capaci di vivere la vita di tutti
          i giorni in una comunità in contatto con gli altri.
        </p>
      </div>
    </div>
  </div>
  <FooterIt />
</template>

<script>
import NavbarIt from "../../components/components-it/Navbar-it.vue";
import FooterIt from "../../components/components-it/Footer-it.vue";
import Button from "../../components/Button.vue";
export default {
  name: "Goals",
  components: {
    NavbarIt,
    FooterIt,
    Button,
  },
};
</script>

<style scoped></style>
