<template>
  <div class="cards-container-services">
    <div class="image-left-container">
      <img src="@/assets/test6.png" alt="Left Image" />
    </div>
    <h2 class="cards-title-services">Nos Services</h2>
    <div class="cards-services">
      <div class="card-services">
        <a href="#">
          <div class="card-icon-services">🔷</div>
          <h3>Monitoring Informatique</h3>
          <p>Chez <strong>Alezia</strong>, nous surveillons votre parc informatique avec des outils avancés pour garantir une performance optimale et prévenir les incidents.</p>
        </a>
      </div>
      <div class="card-services">
        <a href="#">
          <div class="card-icon-services">📦</div>
          <h3>Leasing Matériel</h3>
          <p>Profitez de notre service de leasing pour accéder aux dernières technologies sans lourdes dépenses initiales. Une solution flexible pour tous vos besoins matériels.</p>
        </a>
      </div>
      <div class="card-services">
        <a href="#">
          <div class="card-icon-services">🚀</div>
          <h3>Sécurité IT</h3>
          <p>Nos solutions de sécurité IT protègent vos données sensibles contre les cybermenaces. Faites confiance à Alezia pour une sécurité informatique robuste.</p>
        </a>
      </div>
      <div class="card-services">
        <a href="#">
          <div class="card-icon-services">👥</div>
          <h3>Téléphonie VoIP</h3>
          <p>Découvrez nos solutions de téléphonie VoIP avec Wildix et 3CX, les leaders du marché. Communication efficace et intégrée pour votre entreprise.</p>
        </a>
      </div>
      <div class="card-services">
        <a href="#">
          <div class="card-icon-services">💻</div>
          <h3>Lignes Internet</h3>
          <p>Assurez une connexion internet fiable et rapide pour votre entreprise avec les solutions d'Alezia, adaptées à vos besoins spécifiques.</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCards'
}
</script>

<style scoped>
.cards-container-services {
  position: relative;
  padding: 20px 20px 60px 20px;
  font-family: 'Poppins', sans-serif;
  background-color: #F7FAFF;
  text-align: center;
  overflow: hidden;
  z-index: 1;
}

.image-left-container {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
}

.image-left-container img {
  width: 300px;
  height: auto;
}

.cards-title-services {
  font-size: 2em;
  margin-bottom: 40px;
}

.cards-services {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5em;
  justify-content: center;
  margin-top: 2em;
}

.card-services {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: calc(33.33% - 1em);
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  font-family: 'Roboto', sans-serif;
}

.card-services a {
  display: block;
  padding: 2em;
  text-decoration: none;
  color: inherit;
}

.card-services:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-icon-services {
  font-size: 2.5em;
  margin-bottom: 0.5em;
}

.card-services h3 {
  font-size: 1.8em;
  margin-bottom: 0.5em;
}

.card-services p {
  font-size: 1.2em;
  color: #666;
}

@media (max-width: 1024px) {
  .card-services {
    width: calc(50% - 1em); /* Adjusted width to fit two cards per row */
  }
}

@media (max-width: 768px) {
  .card-services {
    width: 100%; /* Full width for each card */
    max-width: none;
  }
}

@media (max-width: 480px) {
  .cards-title-services {
    font-size: 1.5em; /* Adjust font size for smaller screens */
  }

  .card-icon-services {
    font-size: 2em; /* Adjust icon size for smaller screens */
  }

  .card-services h3 {
    font-size: 1.5em; /* Adjust card title size for smaller screens */
  }

  .card-services p {
    font-size: 1em; /* Adjust card text size for smaller screens */
  }

  .image-left-container img {
    width: 200px; /* Adjust image size for smaller screens */
  }
}
</style>
