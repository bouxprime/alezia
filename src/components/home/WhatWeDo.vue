<template>
  <section class="what-we-do">
    <div class="container">
      <div class="content">
        <h2>Nos services</h2>
        <p>Chez <strong>Alezia</strong>, nous proposons des solutions informatiques et de téléphonie VoIP pour accompagner avec précision les entreprises dans leur croissance. Avec notre expertise, nous garantissons des services de haute qualité pour répondre à tous vos besoins technologiques.</p>
      </div>
      <div class="cards">
        <div class="card">
          <a href="#">
            <div class="card-icon">🔷</div>
            <h3>Monitoring IA</h3>
            <p>Surveillez votre parc informatique avec nos solutions d'intelligence artificielle pour une gestion optimale.</p>
          </a>
        </div>
        <div class="card">
          <a href="#">
            <div class="card-icon">📦</div>
            <h3>Leasing matériel</h3>
            <p>Profitez de nos options de leasing pour obtenir du hardware et software à la pointe de la technologie.</p>
          </a>
        </div>
        <div class="card">
          <a href="#">
            <div class="card-icon">🚀</div>
            <h3>Sécurité IT</h3>
            <p>Protégez votre infrastructure avec nos systèmes de sécurité adaptés à vos besoins spécifiques.</p>
          </a>
        </div>
        <div class="card">
          <a href="#">
            <div class="card-icon">👥</div>
            <h3>Téléphonie VoIP</h3>
            <p>Découvrez nos solutions VoIP avec Wildix et 3CX, les leaders du marché pour une communication efficace.</p>
          </a>
        </div>
        <div class="card">
          <a href="#">
            <div class="card-icon">💻</div>
            <h3>Lignes internet</h3>
            <p>Assurez la fiabilité de votre réseau avec nos services de lignes internet performants et stables.</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WhatWeDo'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Poppins:wght@400;700&display=swap'); /* Import Roboto and Poppins fonts */

.what-we-do {
  padding-bottom: 5em!important; /* Ajout du padding en bas */
  position: relative;
  padding: 0; /* Remove padding to eliminate extra space */
  text-align: left;
  background: #efeded;
  margin-top: 0;
  display: flex;
  justify-content: center;
  background-image: url('@/assets/test.png'); /* Chemin vers votre image */
  background-size: contain; /* Ensure the background image fits within the container */
  background-position: top center; /* Adjust position to bring the image up */
  background-repeat: no-repeat;
  overflow: hidden; /* Assure que l'image ne dépasse pas */
}

.container {
  max-width: 1200px;
  width: 100%;
  margin-top: -50px; /* Adjust margin to bring content up */
}

.content {
  position: relative;
  z-index: 1;
  text-align: left;
  max-width: 800px;
  margin: 50px auto 0 0; /* Adjusted margin to add space above and move left */
  padding: 20px; /* Ajout de padding pour le texte */
  font-family: 'Poppins', sans-serif; /* Apply Poppins font */
  padding-top: 150px; /* Add padding to push the text down */
}

.what-we-do h2 {
  font-size: 4em; /* Adjusted title size */
  font-weight: 700; /* Bolder font weight for better visibility */
  margin-bottom: 0.5em;
  color: #333; /* Darker color for better visibility */
  font-family: 'Poppins', sans-serif; /* Apply Poppins font */
}

.what-we-do p {
  font-size: 18px; /* Adjusted text size */
  font-weight: 400; /* Regular font weight for better visibility */
  margin-bottom: 2em; /* Increased margin-bottom for better spacing */
  color: #333; /* Darker color for better visibility */
  line-height: 1.6em; /* Adjusted line height for better readability */
  font-family: 'Poppins', sans-serif; /* Apply Poppins font */
  max-width: 100%; /* Ensure text doesn't exceed container width */
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5em;
  justify-content: center;
  margin-top: 2em; /* Added margin-top for spacing between text and cards */
}

.card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: calc(33.33% - 1em); /* Adjusted width to fit three cards per row */
  max-width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
  font-family: 'Roboto', sans-serif; /* Apply Roboto font */
}

.card a {
  display: block;
  padding: 2em;
  text-decoration: none;
  color: inherit;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-icon {
  font-size: 2.5em;
  margin-bottom: 0.5em;
}

.card h3 {
  font-size: 1.8em; /* Adjusted card title size */
  margin-bottom: 0.5em;
}

.card p {
  font-size: 1.2em; /* Adjusted card text size */
  color: #666;
}

@media (max-width: 1024px) {
  .cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    max-width: 80%;
    margin: 1em auto; /* Center cards with margin */
  }
}

@media (max-width: 768px) {
  .what-we-do p {
    font-size: 20px; /* Increase text size for smaller screens */
    max-width: 90%; /* Reduce width for better readability */
  }

  .cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    max-width: 90%;
    margin: 1em auto; /* Center cards with margin */
  }
}

@media (max-width: 480px) {
  .content {
    padding-top: 50px; /* Adjust padding for smaller screens */
  }

  .what-we-do h2 {
    font-size: 2.5em; /* Adjust title size for smaller screens */
  }

  .what-we-do p {
    font-size: 22px; /* Increase text size for smaller screens */
    max-width: 90%; /* Reduce width for better readability */
  }

  .cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
    margin: 1em auto; /* Center cards with margin */
  }
}
</style>
