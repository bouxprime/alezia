<template>
  <div class="x-hoppers-page">
    <!-- Brève Explication -->
    <section class="hero">
      <h1>X-Hoppers</h1>
      <div class="description">
        <p>X-Hoppers est une solution de communication unifiée développée par Wildix spécifiquement pour le secteur du commerce de détail.</p>
        <p>Elle combine des casques sans fil "push-to-talk" avec un système de communication basé sur le cloud, conçu pour améliorer l'expérience en magasin et accroître les ventes.</p>
      </div>
    </section>

    <!-- Fonctionnalités en Cartes -->
    <section class="features">
      <h2>Fonctionnalités de X-Hoppers</h2>
      <div class="grid-container">
        <div class="card">
          <div class="card-inner">
            <div class="card-front communication-centralisee">
              <h2>Communication centralisée</h2>
            </div>
            <div class="card-back">
              <p>Avec les casques sans fil connectés à un canal vocal unique, les employés peuvent communiquer rapidement pour une meilleure gestion en magasin.</p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-inner">
            <div class="card-front qr-codes-interactifs">
              <h2>QR Codes interactifs</h2>
            </div>
            <div class="card-back">
              <p>Les clients peuvent scanner des QR codes pour obtenir des informations sur les produits ou demander de l'aide, ce qui améliore l'expérience client.</p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-inner">
            <div class="card-front surveillance-vols">
              <h2>Surveillance automatisée des vols</h2>
            </div>
            <div class="card-back">
              <p>Des caméras intelligentes surveillent les vols en magasin, intégrées avec les systèmes de caisse pour une gestion efficace de la sécurité.</p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-inner">
            <div class="card-front integration-caisse">
              <h2>Intégration avec systèmes de caisse</h2>
            </div>
            <div class="card-back">
              <p>X-Hoppers s'intègre parfaitement avec les systèmes de caisse pour faciliter la gestion des transactions et améliorer le service client.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vidéo Explicative -->
    <section class="video-section">
      <h2>Découvrez X-Hoppers en vidéo</h2>
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/H6LNPkmXdow" frameborder="0" allowfullscreen></iframe>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'XHoppersPage',
};
</script>

<style scoped>
.x-hoppers-page {
  font-family: 'Roboto', sans-serif;
  color: #333;
  line-height: 1.6;
}

.hero {
  text-align: center;
  background-color: #f7f7f7;
  padding: 18rem 2rem 2rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.description {
  text-align: center;
  margin-bottom: 2rem;
}

.features {
  padding: 2rem;
  background-color: #fff;
}

.features h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0.5rem;
  grid-row-gap: 1rem;
  justify-items: center;
}

.card {
  perspective: 1000px;
  width: 400px;
  height: 300px;
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

.video-section {
  padding: 2rem;
  background-color: #f7f7f7;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-section h2 {
  margin-bottom: 1rem;
}

.video-container {
  width: 678px; /* Largeur spécifiée dans votre wireframe */
  height: 380px; /* Hauteur approximative selon votre wireframe */
  background-color: #ccc; /* Utiliser une couleur de fond grise pour représenter la vidéo */
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-container iframe {
  width: 100%;
  height: 100%;
}
</style>
