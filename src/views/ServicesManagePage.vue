<template>
  <div class="services-manages-page">
    <!-- Titre Principal -->
    <section class="hero">
      <h1>Services managés & infogérance</h1>
      <p>La confiance dans l'externalisation IT de proximité</p>
      <p>La fiabilité technique d’une gestion externe de votre parc</p>
    </section>

    <!-- Section : Profiter d'une connectivité -->
    <section class="connectivite">
      <div class="content">
        <div class="image">
          <img src="path/to/your/image1.jpg" alt="Connectivité">
        </div>
        <div class="text">
          <h2>Profiter d’une connectivité d’entreprise stable</h2>
          <p>Profiter d’une connectivité d’entreprise stable, ultra performante et sécurisée tout en maîtrisant ses coûts est un véritable défi pour une grande partie des sociétés, surtout lorsqu’on prend en compte l’augmentation exponentielle des services IT disponibles et des données échangées.</p>
          <p>Avec ALEZIA, expert en services managés à la carte, trouver cet équilibre parfait ne relève plus de l’impossible.</p>
          <p>Infogérance totale ou partielle, nous avons la solution qui correspond à vos besoins et vos systèmes d’information. Que vous décidiez d’opter pour des services spécifiques, ou bien pour une offre complète d’infogérance, de la conception à la maintenance, ALEZIA met en place le service le plus adapté à votre cahier des charges sur la base d’un audit pointu et d’une compréhension profonde de vos défis actuels.</p>
        </div>
      </div>
    </section>

    <!-- Section : Gestion de parc informatique -->
    <section class="gestion-parc">
      <h2>Gestion de parc informatique : une expertise globale</h2>
      <p>En matière d’externalisation IT, deux approches différentes s’offrent à vous : l’infogérance et les services managés.</p>
      <p>L’infogérance n’est pas destinée à anticiper les problèmes mais vise à les résoudre dans les meilleurs délais : vous pouvez compter sur l’expertise et la réactivité de nos équipes pour remplir cet objectif.</p>
      <p>L’infogérance est mise en place à l’occasion d’un contrat de prestations de services qui définit sa durée, sa nature, ses modalités et son coût total. En effet, à chaque demande sortant du cadre de l’infogérance, un nouveau devis, contrat ou avenant est nécessaire.</p>
    </section>

    <!-- Section : Approches distinctes -->
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
  </div>
</template>

<script>
export default {
  name: 'ServicesManagePage',
};
</script>

<style scoped>
.services-manages-page {
  padding-top: 120px; /* Prevent overlap with the navbar */
  font-family: 'Roboto', sans-serif;
  color: #333;
  line-height: 1.6;
}

.hero {
  text-align: center;
  padding: 2rem;
  background-color: #f7f7f7;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.connectivite {
  padding: 2rem;
  background-color: #f9f9f9;
}

.connectivite .content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.connectivite .image {
  flex: 1;
  padding: 1rem;
}

.connectivite .text {
  flex: 2;
  padding: 1rem;
}

.connectivite img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.gestion-parc, .approches-distinctes {
  padding: 2rem;
  background-color: #fff;
}

.gestion-parc h2, .approches-distinctes h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.approches-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.approche-item {
  flex: 1 1 45%;
  margin: 1rem 0;
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
