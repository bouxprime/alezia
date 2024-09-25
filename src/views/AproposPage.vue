<template>
  <div class="apropos-page">
    <section class="vision-future">
      <h1>Le regard tourné vers l'avenir</h1>
      <div class="innovation-grid">
        <div class="left-column">
          <p>En tant que partenaire IT et expert en télécommunication, ALEZIA se positionne au centre de l'innovation pour aider les entreprises à maximiser leur potentiel technologique et la valeur de leurs actifs.</p>
          <p>Quel que soit le secteur ou le public visé, l'innovation doit apporter des solutions concrètes pour simplifier ou améliorer le quotidien de chacun.</p>
        </div>
        <div class="right-column">
          <p>Quel que soit le projet, les valeurs d’ALEZIA sont portées par des équipes passionnées capables de rendre accessibles des technologies encore avant-gardistes à des entreprises de toutes tailles.</p>
        </div>
      </div>
    </section>

    <!-- Adding spacing between sections -->
    <section class="spacer"></section>

    <!-- New section with adjusted image position -->
    <section class="technology-service">
      <div class="service-grid">
        <div class="text-container">
          <p>Chez ALEZIA nous croyons que les nouvelles technologies doivent avant tout être au service des utilisateurs, des patients, des collaborateurs et des consommateurs.</p>
          <p>Engagée en faveur de l'intégrité, de l'inclusion et de la diversité, ALEZIA adopte une politique de responsabilité sociale des entreprises (RSE) fondée sur des valeurs humaines solides visant le bien-être de nos collaborateurs et le développement durable de nos activités et projets.</p>
        </div>
        <div class="image-container">
          <!-- Simulated gray placeholder for the image -->
          <div class="image-placeholder">Image Placeholder</div>
        </div>
      </div>
    </section>

    <!-- Adding more spacing between sections -->
    <section class="spacer"></section>

    <!-- New section for the 4 cards -->
    <section class="objectives">
      <h2 class="section-title">Votre objectif: évoluer</h2>
      <div class="cards-grid">
        <div class="card">
          <h3 class="card-title">Accompagnement</h3>
          <p>Du déploiement à l'assistance, nous mettons tout en œuvre pour assurer la stabilité et l'efficacité de votre infrastructure.</p>
        </div>
        <div class="card">
          <h3 class="card-title">Satisfaction</h3>
          <p>Nous nous engageons à soutenir nos clients sur le long terme en plaçant toujours leur satisfaction au cœur de nos priorités.</p>
        </div>
        <div class="card">
          <h3 class="card-title">Réactivité</h3>
          <p>Dès notre premier échange, nous prenons le temps de bien saisir vos défis afin de vous proposer une solution sur mesure.</p>
        </div>
        <div class="card">
          <h3 class="card-title">Evolutif</h3>
          <p>Nous anticipons l’avenir en évoluant en phase avec vos besoins et les changements du marché.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AproposPage',
};
</script>

<style scoped>
.apropos-page {
  padding-top: 160px; /* Adjust as needed for your navbar */
  box-sizing: border-box;
}

/* Center the title */
h1 {
  text-align: center;
}

.vision-future {
  margin-bottom: 40px;
}

/* Keep gray background for text columns in the first section */
.innovation-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 20px;
}

.left-column, .right-column {
  padding: 10px;
  background-color: #f4f4f4; /* Gray background for the text blocks */
  border-radius: 8px;
}

/* New section styling with more text space */
.service-grid {
  display: grid;
  grid-template-columns: 3fr 2fr; /* More space for text, less for the image */
  gap: 20px;
  align-items: center;
}

/* Enlarging the gray placeholder for the image */
.image-placeholder {
  width: 300px; /* Width for the image placeholder */
  height: 300px; /* Height for the image placeholder */
  background-color: #d3d3d3; /* Light gray color to simulate a frame */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-size: 14px;
  color: #333;
  text-align: center;
}

/* Text container with more space */
.text-container {
  padding: 10px;
}

/* Add spacing between sections */
.spacer {
  height: 40px;
}

/* Objectives Section (Cards) */
.objectives {
  margin-top: 60px; /* Space between this and the last section */
}

.section-title {
  text-align: center;
  margin-bottom: 30px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Two cards per row */
  gap: 20px; /* Reduced space between the cards */
  justify-content: center; /* Centers the cards horizontally */
}

.card {
  width: 300px; /* Reduced width to make the cards closer together */
  padding: 25px; /* Slightly smaller padding */
  background-color: #f4f4f4; /* Gray background for each card */
  border-radius: 12px; /* Slightly more rounded corners */
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* Light shadow for better contrast */
}

.card-title {
  color: #007bff; /* Blue color for the title */
  margin-bottom: 15px;
}
</style>
