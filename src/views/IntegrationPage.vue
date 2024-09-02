<template>
  <div class="integration-page">
    <!-- Titre Principal -->
    <section class="hero">
      <h1>Intégration</h1>
      <div class="hero-text">
        <p>Wildix se distingue par ses nombreuses intégrations, qui permettent d'améliorer la productivité et de simplifier les processus métier.</p>
        <p>Le système s'intègre facilement avec des CRM, des ERP, et d'autres outils de gestion utilisés par les entreprises. Ces intégrations permettent de synchroniser les données en temps réel, d'automatiser des tâches courantes, et d'améliorer la communication interne et externe.</p>
        <p>Par exemple, les appels entrants peuvent automatiquement afficher les fiches clients dans un CRM, ce qui facilite la gestion des interactions et améliore l'efficacité du service client. Grâce à ces intégrations, Wildix s'adapte parfaitement aux besoins spécifiques de chaque entreprise.</p>
      </div>
    </section>

    <!-- Bouton d'intégrations disponibles -->
    <section class="integrations-available">
      <button class="integrations-button">Nos intégrations disponibles</button>
    </section>

    <!-- Section: Classements -->
    <section class="classifications">
      <div class="classification-item">ALL</div>
      <div class="classification-item">hopital</div>
      <div class="classification-item">logiciel</div>
      <div class="classification-item">hardware</div>
      <div class="classification-item">carrière</div>
    </section>

    <!-- Grille des cadres gris -->
    <div class="integrations-grid">
      <div class="integration-item" v-for="n in 25" :key="n">
        <div class="logo-placeholder"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntegrationPage',
};
</script>

<style scoped>
.integration-page {
  padding: 0;
  margin: 0;
}

.hero {
  text-align: center;
  padding: 2rem;
  padding-top: 100px; /* Ajouter du padding-top pour éviter le chevauchement avec la navbar */
  background-color: #f7f7f7;
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-text {
  max-width: 1000px; /* Élargir la zone de texte */
  margin: 0 auto;
  text-align: left;
}

.hero p {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

/* Bouton d'intégrations disponibles */
.integrations-available {
  text-align: center;
  margin-bottom: 2rem;
}

.integrations-button {
  background-color: #007bff;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
}

.integrations-button:hover {
  background-color: #0056b3;
}

/* Section de classifications */
.classifications {
  display: flex;
  justify-content: center; /* Centrer les boutons au centre de la page */
  gap: 2rem; /* Espacement entre les boutons */
  margin-bottom: 2rem;
}

.classification-item {
  padding: 0.5rem 1rem;
  background-color: transparent; /* Suppression des bordures et fond */
  color: #333; /* Couleur du texte */
  text-align: center;
  cursor: pointer;
  font-weight: bold;
}

.classification-item:hover {
  color: #007bff; /* Changer la couleur du texte au survol */
}

/* Grille des cadres gris */
.integrations-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Grille de 5 colonnes */
  gap: 1rem; /* Espace entre les éléments de la grille */
  width: 100%;
  justify-items: center; /* Centrer les éléments horizontalement */
  align-items: center; /* Centrer les éléments verticalement */
}

.integration-item {
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-placeholder {
  width: 100px;
  height: 100px;
  background-color: #ccc; /* Couleur grise pour le cadre */
  border-radius: 10px;
}
</style>
