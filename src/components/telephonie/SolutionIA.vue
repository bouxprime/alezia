<template>
    <section class="ia-wildix">
      <h2>Intelligence Artificielle</h2>
      <p class="description">
        Alezia propose une gamme complète de matériel de téléphonie d'entreprise, permettant d'installer une téléphonie fixe sur IP (via Internet). Ce système, qui ne nécessite qu'une connexion Internet professionnelle, élimine le besoin de serveurs téléphoniques traditionnels (PBX). Alezia s'appuie sur des technologies fiables et performantes offertes par Wildix pour garantir une solution de qualité.
      </p>
      <div class="ia-links">
        <div class="link-box">
          <router-link to="/x-bees">
            <img src="@/assets/x-bees-logo-1.png" alt="X-Bees" />
          </router-link>
        </div>
        <div class="link-box">
          <router-link to="/x-hopper">
            <img src="@/assets/x-hoppers-logo.png" alt="X-Hoppers" />
          </router-link>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SolutionIA',
  };
  </script>
  
  <style scoped>
  .ia-wildix {
    text-align: center;
    padding: 2rem;
    padding-top: 4rem; /* Ajouter du padding en haut */
  }
  
  .ia-wildix h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .description {
    margin: 1rem auto;
    max-width: 600px;
    text-align: center;
    line-height: 1.5;
  }
  
  .ia-links {
    display: flex;
    justify-content: center;
    gap: 4rem; /* Ajuster l'espace entre les liens */
    margin-top: 2rem;
  }
  
  .link-box {
    background-color: #f0f0f0;
    padding: 2rem;
    border-radius: 10px;
    width: 200px; /* Taille fixe pour les boîtes */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
  }
  
  .link-box:hover {
    background-color: #007BFF; /* Changer la couleur de fond au survol */
  }
  
  .link-box img {
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
    border-radius: 10px;
  }
  
  .link-box p {
    font-weight: bold;
    color: #333;
    margin: 0;
  }
  
  .link-box a {
    text-decoration: none;
    color: inherit;
  }
  </style>
  