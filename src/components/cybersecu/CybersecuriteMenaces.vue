<template>
  <section class="anticipez-menaces">
    <h2>Anticipez les Menaces Informatiques et Automatisez la Mise à Jour de Vos Systèmes</h2>
    
    <div class="menaces-grid">
      <!-- Menace Item 1 -->
      <div class="menace-item item1">
        <h3>Surveillance Continue</h3>
        <p>Suivi en temps réel de l’activité de votre parc et de votre SI.</p>
      </div>

      <!-- Menace Item 2 -->
      <div class="menace-item item2">
        <h3>Évaluation des Vulnérabilités</h3>
        <p>Identification des correctifs nécessaires à l’aide d’outils spécialisés.</p>
      </div>

      <!-- Menace Item 3 -->
      <div class="menace-item item3">
        <h3>Planification des Correctifs</h3>
        <p>Mise à jour et remplacement de matériel en fonction de leur priorité.</p>
      </div>

      <!-- Menace Item 4 -->
      <div class="menace-item item4">
        <h3>Déploiement Automatisé</h3>
        <p>Installation des correctifs pour réduire les interventions manuelles et limiter l’impact sur votre activité.</p>
      </div>

      <!-- Menace Item 5 -->
      <div class="menace-item item5">
        <h3>Reporting</h3>
        <p>Documentation des actions effectuées et des résultats obtenus.</p>
      </div>
    </div>
    
    <p class="solution">ALEZIA propose une solution de sécurité informatique adaptée à toutes les structures, protégeant contre divers types de menaces (attaques, virus, intrusions, spams, phishing, etc.).</p>
  </section>
</template>

<script>
export default {
  name: 'CybersecuriteMenaces',
};
</script>

<style scoped>
.anticipez-menaces {
  padding: 3rem 2rem;
  background-color: #f7f7f7;
  text-align: center;
}

.anticipez-menaces h2 {
  margin-bottom: 3rem;
}

.menaces-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 colonnes */
  grid-template-areas: 
    "item1 item2 item3"
    ". item4 item5"; /* Centrer les 2 dernières cartes */
  gap: 2rem;
  justify-items: center;
}

.menace-item {
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.menace-item h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: blue;
}

.menace-item p {
  font-size: 1rem;
  color: #333;
}

/* Appliquer les zones définies pour chaque item */
.item1 { grid-area: item1; }
.item2 { grid-area: item2; }
.item3 { grid-area: item3; }
.item4 { grid-area: item4; }
.item5 { grid-area: item5; }

.solution {
  text-align: center;
  padding-top: 2rem;
  font-style: italic;
  color: #666;
}

/* Responsive design */
@media (max-width: 768px) {
  .menaces-grid {
    grid-template-columns: 1fr; /* Une colonne sur petits écrans */
    grid-template-areas: 
      "item1"
      "item2"
      "item3"
      "item4"
      "item5"; /* Les cartes seront en une seule colonne */
  }
}
</style>
