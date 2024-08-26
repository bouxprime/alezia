<template>
  <section class="company-presentation">
    <div class="container">
      <div class="image-container">
        <img src="@/assets/tom1.png" alt="Person Image" class="person-image" />
      </div>
      <div class="text-container">
        <h2>L'histoire d'Alezia</h2>
        <p class="description">Chez <strong>Alezia</strong>, nous nous inspirons de la célèbre bataille d'Alésia, symbole de persévérance et de stratégie. Fondée sur des valeurs d'innovation et de résilience, notre entreprise est déterminée à guider nos clients vers le succès, tout comme Vercingétorix a guidé ses troupes avec détermination et intelligence. Avec une équipe passionnée et des solutions technologiques avancées, nous accompagnons les entreprises dans leurs défis quotidiens.</p>
        <p class="founder-info">Tom Viatour - Alezia, Co-Fondateur</p>
      </div>
    </div>
  </section>
  <section class="spacingsection">
    <!-- Your spacing section content -->
  </section>
</template>

<script>
export default {
  name: 'CompanyPresentation'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.company-presentation {
  background-color: #efeded;
  color: #000000;
  padding: 3em 1em;
  text-align: center;
  position: relative;
  overflow: visible;
  z-index: 2;
}
.company-presentation::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 10%;
  width: 100%;
  height: 100%;
  background: url('@/assets/dotted1.png') no-repeat center center;
  background-size: contain;
  opacity: 0.6;
  transform: translate(-50%, -50%);
  z-index: 1;
}
.company-presentation .container {
  display: flex;
  align-items: flex-end;
  max-width: 1400px;
  margin: 0 auto;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
  padding: 0 3em;
}
.image-container {
  flex: 1;
  max-width: 40%;
  text-align: center;
  position: relative;
  z-index: 3;
  margin-left: 5em; /* Décale l'image vers la droite */
}
.person-image {
  width: 100%;
  max-width: 490px;
  height: auto;
  margin-top: 20px;
  margin-bottom: -97px; /* Assure que l'image touche la section suivante */
  border: none;
  z-index: 4;
  position: relative;
}
.text-container {
  flex: 2;
  max-width: 60%;
  padding: 1em;
  text-align: left;
  margin-left: 6em; /* Décale le texte vers la droite */
}
.text-container h2 {
  font-size: 2.8em;
  margin-bottom: 1em;
  font-family: 'Poppins', sans-serif;
}
.text-container .description {
  font-size: 18px;
  line-height: 1.8;
  font-family: 'Poppins', sans-serif;
  width: 100%;
}
.founder-info {
  font-size: 20px;
  font-weight: bold;
  color: #1e90ff;
  margin-top: 1em;
  font-family: 'Poppins', serif;
}

/* Media Queries */
@media (max-width: 768px) {
  .company-presentation {
    padding: 2em 1em;
  }
  .company-presentation::before {
    display: none; /* Hide the background image for small screens */
  }
  .company-presentation .container {
    padding: 0 1em;
    flex-direction: column;
    align-items: center;
  }
  .image-container {
    max-width: 100%;
    margin-left: 0;
    order: 1; /* Ensure the image appears first */
  }
  .person-image {
    margin-bottom: 20px; /* Ensure space between the image and text */
  }
  .text-container {
    max-width: 100%;
    margin-left: 0;
    text-align: center;
    order: 2; /* Ensure the text appears after the image */
  }
  .text-container h2 {
    font-size: 2em;
  }
  .text-container .description {
    font-size: 16px;
  }
  .founder-info {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  .company-presentation {
    padding: 1.5em 0.5em;
  }
  .company-presentation::before {
    display: none; /* Hide the background image for small screens */
  }
  .company-presentation .container {
    padding: 0 0.5em;
  }
  .image-container {
    max-width: 100%;
    margin-left: 0;
    order: 1; /* Ensure the image appears first */
  }
  .person-image {
    margin-bottom: 20px; /* Ensure space between the image and text */
  }
  .text-container {
    max-width: 100%;
    margin-left: 0;
    text-align: center;
    order: 2; /* Ensure the text appears after the image */
  }
  .text-container h2 {
    font-size: 1.8em;
  }
  .text-container .description {
    font-size: 14px;
  }
  .founder-info {
    font-size: 16px;
  }
}
.spacingsection {
  position: relative;
  z-index: 1;
  background-color: #000;
}
</style>
