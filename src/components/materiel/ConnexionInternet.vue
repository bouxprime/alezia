<template>
    <section class="section-reseau">
      <h2>Réseau</h2>
      <p class="description">
        Un accès Internet performant est essentiel pour les entreprises, assurant une communication fluide, une collaboration efficace, et la sécurité des données. ALEZIA vous assure une connexion stable qui soutient la productivité, permet l'utilisation des outils numériques indispensables, et aide l'entreprise à rester compétitive dans un environnement technologique en constante évolution.
      </p>
  
      <div class="content">
        <div class="image">
          <!-- Image de connexion Internet -->
          <img src="path/to/your/image2.jpg" alt="Connexion Internet" />
        </div>
        <div class="text">
          <h2>Connexion Internet professionnelle</h2>
          <p>
            Choisissez une connexion Internet haute performance, parfaitement adaptée aux exigences de votre entreprise. Nous fournissons des solutions fiables et rapides, indispensables au bon déroulement de vos activités professionnelles.
          </p>
          <p>
            Nous proposons des solutions complètes pour vos infrastructures réseau, qu’il s’agisse de réseaux filaires ou sans fil (WiFi). De la phase de conseil à l’étude avancée sur site, notre expertise garantit une installation optimale et performante, adaptée aux besoins spécifiques de votre entreprise.
          </p>
          <p>
            Nous vous aidons à connecter tous vos périphériques au réseau de manière efficace et sécurisée. Nos solutions permettent d’isoler certaines zones ou de segmenter virtuellement votre réseau pour une meilleure gestion et une sécurité renforcée.
          </p>
          <p>
            En tant qu’experts, nous vous accompagnons pour que votre infrastructure réseau vous offre une expérience utilisateur fluide et répond à vos exigences.
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ConnexionInternet',
  };
  </script>
  
  <style scoped>
  .section-reseau {
    padding: 2rem 0;
    background-color: #fff;
  }
  
  .section-reseau h2 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .section-reseau .description {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 1.2rem;
    color: #333;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .section-reseau .content {
    display: flex;
    align-items: center; /* Aligne verticalement l'image et le texte */
    justify-content: center; /* Centre horizontalement l'image et le texte */
    flex-wrap: wrap;
  }
  
  .section-reseau .image {
    flex: 1;
    max-width: 300px; /* Taille de l'image ajustée */
    margin-right: 2rem; /* Ajout d'espace entre l'image et le texte */
  }
  
  .section-reseau .text {
    flex: 2;
    padding: 1rem;
    text-align: left; /* Alignement du texte à gauche */
    max-width: 600px; /* Limite la largeur du texte pour le centrage */
  }
  
  .section-reseau img {
    width: 100%;
    height: auto;
    border-radius: 5px;
  }
  </style>
  