<template>
    <section class="x-bees-features">
      <h2>Fonctionnalités avancées de X-Bees</h2>
      <div class="x-bees-hexagon-container">
        <div class="x-bees-row">
          <div class="x-bees-hex">
            <div class="x-bees-hex-inner">
              <h3>Communication intégrée</h3>
              <p>Chat, appels vocaux et vidéo à partir d'une interface simple, avec intégration des contacts externes.</p>
            </div>
          </div>
          <div class="x-bees-hex">
            <div class="x-bees-hex-inner">
              <h3>Intégration CRM</h3>
              <p>S'intègre parfaitement avec des CRM populaires comme Salesforce et HubSpot.</p>
            </div>
          </div>
        </div>
        <div class="x-bees-row">
          <div class="x-bees-hex">
            <div class="x-bees-hex-inner">
              <h3>Widget de site web</h3>
              <p>Permet aux prospects de vous contacter instantanément depuis votre site web.</p>
            </div>
          </div>
          <div class="x-bees-hex central-hex">
            <div class="x-bees-hex-inner">
              <h3>Hexagone Central</h3>
              <p>Texte ou icône central</p>
            </div>
          </div>
          <div class="x-bees-hex">
            <div class="x-bees-hex-inner">
              <h3>Notifications persistantes</h3>
              <p>Notifications via SMS, push mobile, et e-mail pour ne jamais manquer un message important.</p>
            </div>
          </div>
        </div>
        <div class="x-bees-row">
          <div class="x-bees-hex">
            <div class="x-bees-hex-inner">
              <h3>Intelligence artificielle</h3>
              <p>Utilise des outils d'IA pour analyser les conversations de vente et fournir des conseils en temps réel.</p>
            </div>
          </div>
          <div class="x-bees-hex">
            <div class="x-bees-hex-inner">
              <h3>Planification et gestion des réunions</h3>
              <p>Outil de planification avec les calendriers des prospects pour organiser facilement des réunions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'FonctionnalitésAvancées',
  };
  </script>
  
  <style scoped>
  .x-bees-features {
    padding: 4rem 0;
    background-color: #fff;
  }
  
  .x-bees-features h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #007bff /* Ajouter de l'espace sous le titre */
  }
  
  .x-bees-hexagon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 2rem; /* Ajouter de l'espace au-dessus des hexagones */
  }
  
  .x-bees-row {
    display: flex;
    justify-content: center;
  }
  
  .x-bees-hex {
    width: 220px;
    height: 253px;
    background-color: #ffa726;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: -25px 5px;
  }
  
  .central-hex {
    background-color: #ffca28;
  }
  
  .x-bees-hex-inner {
    padding: 1.3rem;
    color: #fff;
  }
  
  .x-bees-hex h3 {
    font-size: 1.1rem;
    margin-bottom: 0.7rem;
  }
  </style>
  