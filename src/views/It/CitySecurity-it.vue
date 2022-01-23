<template>
  <NavbarIt />
  <div class="container mx-auto flex flex-col items-center main-content pb-10">
    <h1 class="text-5xl lg:text-center text-center">
      La nostra <b>sicurezza in città</b>
    </h1>
    <img
      class="py-10"
      src="../../assets/city-security.png"
      alt=""
      width="250"
    />
    <p
      class="lg:text-lg lg:w-1/2 w-9/12 leading-relaxed text-justify leading-relaxed"
    >
      La sicurezza delle città è un argomento di grande importanza che è alla
      base della civiltà e della coesistenza pacifica. E' precisamente per
      questa ragione che è necessario agire nel minor tempo possibile
      implementando riforme che che rendano possibile il miglioramento del
      sistema di sicurezza di ogni città.
    </p>

    <p
      class="lg:text-lg lg:w-1/2 w-9/12 leading-relaxed text-justify leading-relaxed"
    >
      <br />
      Per questa ragione, è necessario andare oltre alla semplice polizia: anche
      se necessaria, i poliziotti non sono abbastanza per assicurare la massima
      sucurezza. Analizzando i crimini correnti nelle città, è emerso che c'è
      una mancanza di sorveglianza in ogni luogo; Perciò, una solozione
      effettiva al problema sarebbe incoraggiare i cittadini a farsi avanti, se
      volontari, per la sicurezza cittadina.
    </p>

    <div
      class="grid lg:grid-cols-3 lg:gap-10 gap-10 pt-40 lg:shrink md:shrink-0"
    >
      <div class="container flex flex-col items-center">
        <Column
          header="Buonus buona condotta"
          imgPath="credit-card.png"
          text="La buona condotta dei cittadini sarà ricompensta con crediti città, utilizzabili dai cittadini in persona nei negozi e/o nei supermercati. Tali crediti potranno anche essere inclusi nel Curriculum Vitae (C.V.) o usati per dimostrare la tua contribuzione sociale e civica alla tua scuola o università."
        />
      </div>
      <div class="container flex flex-col items-center">
        <Column
          header="Corpo di sorveglianza"
          imgPath="police.png"
          text="Il corpo di sorveglianza cittadino è composto da poliziotti qualificati e specialmente addestrati per assicurare la massima sicurezza ovunque in città. Tutti i poliziotti saranno periocamente riaddestrati con nuovi corsi per imparare nuove tecniche e pratiche."
        />
      </div>
      <div class="container flex flex-col items-center">
        <Column
          header="Eagle 360"
          imgPath="eagle.png"
          text="Eagle 360 è un avanzato sistema di monitoraggio della città che permette alle autorità di vigilare in maniera confortabile e sicura in ogni angolo della città. I cittadini, scaricando un'applicazione potranno segnalare ogni tipo di violezione o crimine alle aurotità, attivamente per contribuire al progetto."
        />
      </div>
    </div>
  </div>
  <FooterIt />
</template>

<script>
import NavbarIt from "../../components/components-it/Navbar-it.vue";
import FooterIt from "../../components/components-it/Footer-it.vue";
import Button from "../../components/Button.vue";
import Column from "../../components/Column.vue";

export default {
  name: "CitySecurity",
  components: {
    NavbarIt,
    FooterIt,
    Button,
    Column,
  },
};
</script>

<style scoped>
.main-content {
  @apply pt-20;
}
</style>
It
