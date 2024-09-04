<template>
    <section class="approach">
      <h2>Une approche personnalisée</h2>
      <div class="content">
        <div class="text">
          <p>De l’identification de la solution adéquate à votre problématique jusqu’à sa mise en œuvre, ALEZIA s’assure que vos ressources digitales sont en parfaite adéquation avec vos objectifs de croissance.</p>
          <p>Quelle que soit votre problématique, ALEZIA vous propose une consultance complète.</p>
        </div>
        <div class="image">
          <img :src="imageSrc" :alt="imageAlt" />
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ConseilsApproachComponent',
    props: {
      imageSrc: {
        type: String,
        default: 'path/to/your/image2.jpg',
      },
      imageAlt: {
        type: String,
        default: 'Image of personalized approach',
      },
    },
  };
  </script>
  
  <style scoped>
  .approach {
    padding: 2rem;
    background-color: #f7f7f7;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }
  
  .text {
    font-size: 1.125rem;
    line-height: 1.6;
  }
  
  .image img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
  </style>
  