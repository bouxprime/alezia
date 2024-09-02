<template>
    <section class="materiel-wildix">
      <h2>Intégrations CRM avec X-Bees</h2>
      <div class="carousel-container">
        <button class="carousel-button prev" @click="prevSlide">‹</button>
        <div class="carousel-track-container">
          <ul class="carousel-track" :style="{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }">
            <li class="carousel-slide" v-for="n in totalSlides" :key="n">
              <img src="@/assets/tom1.png" :alt="`Matériel Wildix ${n}`" />
            </li>
          </ul>
        </div>
        <button class="carousel-button next" @click="nextSlide">›</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'IntégrationCRM',
    data() {
      return {
        currentSlide: 0,
        totalSlides: 10, // Nombre total de slides
        slidesToShow: 3, // Nombre de slides à afficher en même temps
      };
    },
    computed: {
      maxSlideIndex() {
        return this.totalSlides - this.slidesToShow;
      },
    },
    methods: {
      nextSlide() {
        if (this.currentSlide < this.maxSlideIndex) {
          this.currentSlide += 1;
        } else {
          this.currentSlide = 0; // Retourner au début après la dernière slide
        }
      },
      prevSlide() {
        if (this.currentSlide > 0) {
          this.currentSlide -= 1;
        } else {
          this.currentSlide = this.maxSlideIndex; // Aller à la fin si on est sur la première slide
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .materiel-wildix {
    padding: 2rem;
    padding-top: 4rem; /* Ajouter du padding en haut */
  }
  
  .materiel-wildix h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  /* Nouveau style pour centrer le sous-titre */
  .subtitle {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center; /* Centrer le texte */
    margin-top: -10px; /* Ajuster la marge pour réduire l'espace entre le titre et le sous-titre */
  }
  
  /* Style pour le carrousel */
  .carousel-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
  }
  
  .carousel-track-container {
    overflow: hidden;
    width: 100%;
  }
  
  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-slide {
    min-width: calc(100% / 3);
    box-sizing: border-box;
    padding: 0 2px; /* Réduire l'espace entre les images */
    display: flex;
    justify-content: center;
  }
  
  .carousel-slide img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    display: block;
  }
  
  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: #007bff;
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 10;
    border-radius: 50%; /* Rond */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Ajout d'une ombre pour un effet plus esthétique */
  }
  
  .carousel-button:hover {
    background-color: #0056b3; /* Changer le fond au survol */
  }
  
  .carousel-button.prev {
    left: 0;
  }
  
  .carousel-button.next {
    right: 0;
  }
  </style>
  