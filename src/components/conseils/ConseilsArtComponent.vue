<template>
    <section class="art-project">
      <div class="content">
        <div class="image">
          <img :src="imageSrc" :alt="imageAlt" />
        </div>
        <div class="text">
          <h2>L'art de faire aboutir votre projet</h2>
          <p>La réussite d'un projet de digitalisation réside dans la faculté à proposer la solution la mieux adaptée à un besoin spécifique et aux contraintes imposées par un contexte.</p>
          <p>Ainsi, la réussite de votre transformation numérique repose sur une compréhension approfondie de votre environnement informatique.</p>
        </div>
      </div>
      <p class="closing-text">Forte d'une expérience probante au cœur de la transformation numérique, ALEZIA manipule avec aisance tous les codes de l’informatique et des télécommunications.</p>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ConseilsArtComponent',
    props: {
      imageSrc: {
        type: String,
        default: 'path/to/your/image1.jpg',
      },
      imageAlt: {
        type: String,
        default: 'Image of project',
      },
    },
  };
  </script>
  
  <style scoped>
  .art-project {
    padding: 2rem;
    background-color: #f7f7f7;
  }
  
  .content {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 2rem;
  }
  
  .image img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .text {
    text-align: left;
  }
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.125rem;
    line-height: 1.6;
  }
  
  .closing-text {
    margin-top: 1.5rem;
    text-align: center;
    font-size: 1rem;
    color: #666;
  }
  </style>
  