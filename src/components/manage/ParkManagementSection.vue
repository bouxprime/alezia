<template>
  <section class="gestion-parc">
    <h2>Gestion de parc informatique : une expertise globale</h2>
    <p>En matière d’externalisation IT, deux approches différentes s’offrent à vous : l’infogérance et les services managés.</p>
    <p>L’infogérance n’est pas destinée à anticiper les problèmes mais vise à les résoudre dans les meilleurs délais : vous pouvez compter sur l’expertise et la réactivité de nos équipes pour remplir cet objectif.</p>
    <section class="approches-distinctes">
      <h2>Deux approches distinctes pour votre externalisation IT</h2>
      <div class="approches-grid">
        <div class="approche-item">
          <h3>Services managés : une solution proactive</h3>
          <p>Avec l’émergence des offres Cloud, les services managés ont introduit une approche plus flexible que l'infogérance. Ce modèle proactif utilise des outils de monitoring pour identifier et résoudre les anomalies avant qu'elles ne se transforment en incidents.</p>
          <p>Contrairement à l'infogérance, les services managés adoptent une approche basée sur la location : le client paie une redevance mensuelle tout inclus pour bénéficier de ces services.</p>
        </div>
        <div class="approche-item">
          <h3>Infogérance : une solution réactive</h3>
          <p>L'infogérance se concentre sur la résolution rapide des problèmes plutôt que sur leur anticipation. Vous bénéficiez de l'expertise et de la réactivité de nos équipes pour traiter les incidents de manière efficace.</p>
          <p>Ce service est encadré par un contrat de prestation qui précise la durée, la nature, les modalités et le coût total. Pour chaque demande en dehors du cadre initial de l’infogérance, un devis ou un avenant est requis.</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  name: 'ParkManagementSection'
};
</script>

<style scoped>
.gestion-parc, .approches-distinctes {
  padding: 2rem;
  background-color: #fff;
}

/* Centrer les titres */
.gestion-parc h2, .approches-distinctes h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

/* Style pour la grille des approches */
.approches-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem; /* Ajout d'un espace entre les cartes */
}

.approche-item {
  flex: 1 1 45%;
  margin: 1rem;
  padding: 1.5rem;
  background-color: #f1f1f1;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.approche-item h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
</style>
