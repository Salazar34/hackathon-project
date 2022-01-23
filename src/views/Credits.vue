<template>
  <Navbar />
  <h1 class="uppercase lg:text-5xl text-2xl mx-auto text-center pt-20">
    Images and Icons attributions
  </h1>
  <div class="grid lg:grid-cols-3 place-items-center lg:pb-10 mx-auto">
    <Card
      v-for="card in cards"
      v-bind:key="card.id"
      :link="card.link"
      :image="card"
      :imgAlt="card.alt"
      :text="card.text"
    />
  </div>
  <div
    class="container mx-auto flex flex-row items-center justify-center text-center"
  >
    <Card
      v-for="card in specials"
      v-bind:key="card.id"
      :link="card.link"
      :image="card"
      :imgAlt="card.alt"
      :text="card.text"
    />
  </div>
  <Footer />
</template>

<script>
import Card from "../components/Card.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import Button from "../components/Button.vue";

import hall from "../assets/hall.png";
import temp from "../assets/Temp.png";
import moonFestival from "../assets/moon-festival.png";
import digital from "../assets/virtual.png";
import bridge from "../assets/bridge.png";
import ai from "../assets/machine-learning.png";
import citySecurity from "../assets/city-security.png";
import creditCard from "../assets/credit-card.png";
import deforestation from "../assets/deforestation.png";
import eagle from "../assets/eagle.png";
import modernArchitecture from "../assets/modern-architecture.png";
import earth from "../assets/planet-earth.png";
import police from "../assets/police.png";
import teamwork from "../assets/teamwork.png";

export default {
  name: "Credits",
  components: {
    Navbar,
    Footer,
    Button,
    Card,
  },
  data: function () {
    return {
      specials: [
        {
          id: "1",
          link: "https://www.flaticon.com/free-icons/digital",
          text: "Digital icons created by Freepik - Flaticon",
          alt: "Digital vector representation",
          img: digital,
        },
        {
          id: "2",
          link: "https://www.flaticon.com/free-icons/tower-bridge",
          text: "Tower bridge icons created by Freepik - Flaticon",
          alt: "Bridge vector representation",
          img: bridge,
        },
      ],
      cards: [
        {
          id: "1",
          link: "https://www.flaticon.com/free-icons/hall",
          text: "Hall icons created by Smashicons - Flaticon",
          alt: "Hall vector representation",
          img: hall,
        },
        {
          id: "2",
          link: "https://www.flaticon.com/free-icons/pokemon",
          text: "Pokemon icons created by Roundicons Freebies - Flaticon",
          alt: "Psyduck vector representation",
          img: temp,
        },
        {
          id: "3",
          link: "https://www.flaticon.com/free-icons/moon-festival",
          text: "Moon festival icons created by Flat Icons - Flaticon",
          alt: "Moon vector representation",
          img: moonFestival,
        },
        {
          id: "4",
          link: "https://www.flaticon.com/free-icons/machine-learning",
          text: "Machine learning icons created by Flat Icons - Flaticon",
          alt: "Machine learning vector representation",
          img: ai,
        },
        {
          id: "5",
          link: "https://www.flaticon.com/free-icons/business-and-finance",
          text: "Business and finance icons created by Freepik - Flaticon",
          alt: "City security vector representation",
          img: citySecurity,
        },
        {
          id: "6",
          link: "https://www.flaticon.com/free-icons/credit-card",
          text: "Credit card icons created by Freepik - Flaticon",
          alt: "Credit card vector representation",
          img: creditCard,
        },
        {
          id: "7",
          link: "https://www.flaticon.com/free-icons/deforestation",
          text: "Deforestation icons created by Freepik - Flaticon",
          alt: "Deforestation vector representation",
          img: deforestation,
        },
        {
          id: "8",
          link: "https://www.flaticon.com/free-icons/eagle",
          text: "Eagle icons created by Freepik - Flaticon",
          alt: "Eagle vector representation",
          img: eagle,
        },
        {
          id: "9",
          link: "https://www.flaticon.com/free-icons/modern-architecture",
          text: "Modern architecture icons created by Freepik - Flaticon",
          alt: "Modern architecture vector representation",
          img: modernArchitecture,
        },
        {
          id: "10",
          link: "https://www.flaticon.com/free-icons/environment",
          text: "Environment icons created by Freepik - Flaticon",
          alt: "Earth vector representation",
          img: earth,
        },
        {
          id: "11",
          link: "https://www.flaticon.com/free-icons/police",
          text: "Police icons created by Freepik - Flaticon",
          alt: "Police officer vector representation",
          img: police,
        },
        {
          id: "12",
          link: "https://www.flaticon.com/free-icons/collaboration",
          text: "Collaboration icons created by Freepik - Flaticon",
          alt: "Community vector representation",
          img: teamwork,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
