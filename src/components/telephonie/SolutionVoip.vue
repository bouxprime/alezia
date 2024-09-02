<template>
    <section class="solution-voip">
      <h1>Solutions VoIP</h1>
      <div class="description">
        <p>Alezia propose une gamme complète de matériel de téléphonie d'entreprise, permettant d'installer une téléphonie fixe sur IP (via internet).</p>
        <p>Ce système, qui ne nécessite qu'une connexion internet professionnelle, élimine le besoin de serveurs téléphoniques traditionnels (PABX). Alezia s'appuie sur des technologies fiables et performantes offertes par Wildix pour garantir une solution de qualité.</p>
      </div>
  
      <div class="grid-container">
        <div class="card">
          <div class="card-inner">
            <div class="card-front flexibilite">
              <h2>Flexibilité</h2>
            </div>
            <div class="card-back">
              <p>Avec une téléphonie d'entreprise hébergée dans le cloud, vous pouvez déplacer vos téléphones où que vous soyez : dans n'importe quel bureau, sur n'importe quel site, et dans n'importe quel pays.</p>
              <p>Votre système de téléphonie d'entreprise reste entièrement fonctionnel, tout en conservant son organisation intacte.</p>
            </div>
          </div>
        </div>
  
        <div class="card">
          <div class="card-inner">
            <div class="card-front securite">
              <h2>Sécurité</h2>
            </div>
            <div class="card-back">
              <p>Chez Wildix, la sécurité est une priorité absolue. Labellisé "Secure by Design", nos solutions de téléphonie intègrent des protocoles de sécurité avancés pour protéger vos communications.</p>
              <p>Chaque appel, chaque donnée est chiffré de bout en bout, assurant une confidentialité totale. Que vous soyez en bureau ou à distance, Wildix garantit que vos échanges sont sécurisés, conformes aux normes les plus strictes, et que vos informations restent protégées contre toute tentative de violation.</p>
            </div>
          </div>
        </div>
  
        <div class="card">
          <div class="card-inner">
            <div class="card-front systeme-complet">
              <h2>Système complet</h2>
            </div>
            <div class="card-back">
              <p>Wildix est un système complet de communication qui intègre téléphonie, vidéoconférence, messagerie instantanée et collaboration en ligne. Il se distingue par sa compatibilité avec tous types d'interfaces, qu'il s'agisse d'ordinateurs, de smartphones ou de téléphones fixes, offrant une flexibilité maximale pour les utilisateurs.</p>
            </div>
          </div>
        </div>
  
        <div class="card">
          <div class="card-inner">
            <div class="card-front facile">
              <h2>Facile</h2>
            </div>
            <div class="card-back">
              <p>L’application est conçue pour être intuitive et accessible, avec une interface simple qui facilite l'utilisation des fonctionnalités comme les appels, les vidéoconférences et la messagerie.</p>
              <p>Compatible avec divers appareils, elle s'installe facilement sans configurations complexes, et ses mises à jour automatiques assurent une utilisation fluide, sans besoin de formation approfondie.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'SolutionVoip',
  };
  </script>
  
  <style scoped>
  .solution-voip {
    padding: 8rem 2rem 2rem; /* Padding top increased */
    background-color: #f7f7f7;
  }
  
  .solution-voip h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .description {
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 0.5rem; /* Reduced horizontal gap */
    grid-row-gap: 1rem; /* Keep a bit more space between rows */
    justify-items: center; /* Center the cards horizontally */
  }
  
  .card {
    perspective: 1000px;
    width: 400px; /* Increased width for the cards */
    height: 300px; /* Fixed height for the cards */
  }
  
  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: transform 0.6s;
  }
  
  .card:hover .card-inner {
    transform: rotateY(180deg);
  }
  
  .card-front, .card-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .card-front {
    background-color: #ffffff;
    color: #007bff;
    font-size: 1.5rem;
    font-weight: bold;
  }
  
  .card-back {
    background-color: #f7f7f7;
    transform: rotateY(180deg);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  .card-back p {
    font-size: 1rem;
    line-height: 1.6;
  }
  </style>
  