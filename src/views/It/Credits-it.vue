<template>
  <NavbarIt/>
  <h1 class="uppercase lg:text-5xl text-2xl mx-auto text-center pt-20">
    Attribuzioni per immagini e icone
  </h1>
  <div class="grid lg:grid-cols-3 place-items-center lg:pb-10 mx-auto">
    <CardIt
      link="Hall icons created by Smashicons - Flaticon"
      text="Hall icons created by Smashicons - Flaticon"
      imgAlt="Hall vector representation"
      imgName="hall.png"
    />
    <CardIt
      link="https://www.flaticon.com/free-icons/moon-festival"
      text="Pokemon icons created by Roundicons Freebies - Flaticon"
      imgAlt="Temp logo"
      imgName="Temp.png"
    />
    <CardIt
      link="https://www.flaticon.com/free-icons/moon-festival"
      text="Moon festival icons created by Flat Icons - Flaticon"
      imgAlt="Moon vector representation"
      imgName="moon-festival.png"
    />
    <CardIt
      link="https://www.flaticon.com/free-icons/digital"
      text="Digital icons created by Freepik - Flaticon"
      imgAlt="Digital vector representation"
      imgName="virtual.png"
    />
    <CardIt
      link="https://www.flaticon.com/free-icons/tower-bridge"
      text="Tower bridge icons created by Freepik - Flaticon"
      imgAlt="Bridge vector representation"
      imgName="bridge.png"
    />
    <CardIt
      link="https://www.flaticon.com/free-icons/machine-learning"
      text="Machine learning icons created by Flat Icons - Flaticon"
      imgAlt="Machine learning vector representation"
      imgName="machine-learning.png"
    />
    <CardIt 
      link="https://www.flaticon.com/free-icons/business-and-finance"
      text="Business and finance icons created by Freepik - Flaticon"
      imgAlt="City security vector"
      imgName="city-security.png"
    />
    <CardIt 
      link="https://www.flaticon.com/free-icons/credit-card"
      text="Credit card icons created by Freepik - Flaticon"
      imgAlt="Credit card vector"
      imgName="credit-card.png"
    />
    <CardIt 
      link="https://www.flaticon.com/free-icons/deforestation"
      text="Deforestation icons created by Freepik - Flaticon"
      imgAlt="Deforestation vector representation"
      imgName="deforestation.png"
    />
    <CardIt 
      link="https://www.flaticon.com/free-icons/eagle"
      text="Eagle icons created by Freepik - Flaticon"
      imgAlt="Eagle vector"
      imgName="eagle.png"
    />
    <CardIt 
      link="https://www.flaticon.com/free-icons/modern-architecture"
      text="Modern architecture icons created by Freepik - Flaticon"
      imgAlt="Modern architecture vector"
      imgName="modern-architecture.png"
    />
    <CardIt 
      link="https://www.flaticon.com/free-icons/environment"
      text="Environment icons created by Freepik - Flaticon"
      imgAlt="Earth planet vector"
      imgName="planet-earth.png"
    />
  </div>
  <div class="container mx-auto flex flex-row items-center justify-center text-center">
    <CardIt 
      link="https://www.flaticon.com/free-icons/police"
      text="Police icons created by Freepik - Flaticon"
      imgAlt="Police officer vector"
      imgName="police.png"
    />
    <CardIt 
      link="https://www.flaticon.com/free-icons/collaboration"
      text="Collaboration icons created by Freepik - Flaticon"
      imgAlt="Community vector"
      imgName="teamwork.png"
    />
  </div>
  <FooterIt/>
</template>

<script>
import CardIt from "../../components/components-it/Card-it.vue";
import NavbarIt from "../../components/components-it/Navbar-it.vue";
import FooterIt from "../../components/components-it/Footer-it.vue";
import Button from "../../components/Button.vue";

export default {
  name: "Credits",
  components: {
    NavbarIt,
    FooterIt,
    Button,
    CardIt,
  },
};
</script>

<style scoped></style>
