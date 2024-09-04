<template>
    <section class="virtualization">
      <div class="content">
        <div class="image">
          <img :src="imageSrc" :alt="imageAlt" />
        </div>
        <div class="text">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'CloudVirtualizationComponent',
    props: {
      imageSrc: {
        type: String,
        default: 'path/to/your/tom1.png'
      },
      imageAlt: {
        type: String,
        default: 'Virtualisation'
      },
      title: {
        type: String,
        default: 'Virtualisation de vos machines'
      },
      description: {
        type: String,
        default: "La virtualisation de votre serveur permet d’ajuster facilement les ressources et de sauvegarder ou restaurer rapidement l’ensemble de votre système. Hébergée dans un DataCenter sécurisé, votre machine virtuelle bénéficie d’une haute disponibilité grâce à du matériel redondant, à une connectivité internet fiable, et à des sauvegardes quotidiennes. Même en cas de panne internet au bureau, vous pouvez accéder à vos données depuis chez vous ou à l'étranger, avec une sécurité renforcée grâce à l'authentification à deux facteurs."
      }
    }
  };
  </script>
  
  <style scoped>
  .virtualization {
    display: flex;
    align-items: center;
    padding: 1.5rem 2rem; /* Réduit l'espacement autour de la section */
    background-color: #f7f7f7;
  }
  
  .virtualization .content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1.5rem; /* Réduit l'espace entre l'image et le texte */
  }
  
  .virtualization .image {
    flex-shrink: 0;
    width: 40%; /* Assigne 40% de l'espace à l'image */
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .virtualization .image img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  .virtualization .text {
    flex: 1; /* Le texte prend 60% de l'espace restant */
    text-align: left;
    max-width: 60%; /* S'assure que le texte reste à droite et utilise l'espace efficacement */
  }
  
  .virtualization h3 {
    font-size: 1.25rem; /* Réduit légèrement la taille du titre */
    margin-bottom: 0.5rem; /* Réduit l'espace sous le titre */
  }
  
  .virtualization p {
    font-size: 1rem; /* Taille légèrement réduite pour compacter le texte */
    line-height: 1.4; /* Diminue l'espacement entre les lignes */
    margin: 0; /* Supprime les marges verticales */
  }
  </style>
  