<template>
    <section class="cloud-hero">
      <div class="hero-content">
        <h1>{{ title }}</h1>
        <p>{{ description1 }}</p>
        <p>{{ description2 }}</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'CloudHeroComponent',
    props: {
      title: {
        type: String,
        default: 'Le Cloud',
      },
      description1: {
        type: String,
        default: "Intégré au paysage entrepreneurial depuis quelques années, le Cloud propose une vaste gamme de services et ouvre aux entreprises un éventail infini de possibilités."
      },
      description2: {
        type: String,
        default: "Dans ce contexte, ALESIA permet à ses clients de saisir ces opportunités tout en hébergeant leurs données dans un datacenter situé en Belgique."
      }
    }
  };
  </script>
  
  <style scoped>
  .cloud-hero {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 50vh; /* Ajuste selon le besoin, pour que le contenu prenne la moitié de la hauteur de la fenêtre */
    background-color: #f7f7f7;
  }
  
  .hero-content {
    text-align: center;
    max-width: 600px; /* Ajuste cette largeur pour limiter le texte */
  }
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  
  p {
    margin-bottom: 1rem;
    font-size: 1.125rem;
    line-height: 1.6;
  }
  </style>
  