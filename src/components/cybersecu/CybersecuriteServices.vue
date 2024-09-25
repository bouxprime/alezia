<template>
    <section class="cybersecurite-services">
      <div class="services-grid">
  
        <!-- New Section 1 -->
        <div class="service-item">
          <h3>Face à des menaces sophistiquées</h3>
          <p>Face à des menaces cybercriminelles de plus en plus sophistiquées, à la complexité croissante des systèmes d'information et aux exigences légales strictes en sécurité informatique, ALEZIA est là pour vous accompagner.</p>
        </div>
  
        <!-- New Section 2 -->
        <div class="service-item">
          <h3>Concentration sur l'activité principale</h3>
          <p>En confiant votre cybersécurité à ALEZIA, vous pouvez vous concentrer sereinement sur votre activité principale tout en bénéficiant des avantages de l'externalisation et de l'infogérance.</p>
        </div>
  
        <!-- Service Item 1 -->
        <div class="service-item">
          <h3>Veille, Prévention et Réactivité</h3>
          <p>Nous surveillons en temps réel votre sécurité informatique et intervenons immédiatement, des correctifs aux mesures d'urgence pour les vulnérabilités zero-day.</p>
        </div>
  
        <!-- Service Item 2 -->
        <div class="service-item">
          <h3>Réduction des Coûts et de la Charge de Travail</h3>
          <p>Externalisez pour diminuer vos coûts de gestion et alléger la charge de travail de vos équipes tout en accédant à une expertise avancée.</p>
        </div>
  
        <!-- Service Item 3 -->
        <div class="service-item">
          <h3>Gestion des Risques et Conformité</h3>
          <p>Nous vous aidons à gérer les risques informatiques et à respecter les régulations telles que le RGPD et les normes industrielles.</p>
        </div>
  
        <!-- Service Item 4 -->
        <div class="service-item">
          <h3>Sensibilisation et Bonnes Pratiques</h3>
          <p>Nous veillons à ce que vos équipes soient formées aux meilleures pratiques en cybersécurité.</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'CybersecuriteServices',
  };
  </script>
  
  <style scoped>
  .cybersecurite-services {
    padding: 2rem;
    background-color: #fff;
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .service-item {
    background-color: #f1f1f1;
    padding: 1.5rem;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .service-item h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .service-item p {
    font-size: 1rem;
    color: #333;
  }
  </style>
  