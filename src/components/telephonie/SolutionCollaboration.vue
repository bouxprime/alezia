<template>
  <section class="collaboration">
    <h2>Collaboration</h2>
    <p class="description">Une application multi-usages :</p> <!-- Ajout de la classe ici -->
    <div class="grid-container">
      <div class="mini-card">
        <p>Appels audio et vidéo avec vos équipes et des utilisateurs externes</p>
      </div>
      <div class="mini-card">
        <p>Messagerie instantanée et chats de groupe</p>
      </div>
      <div class="mini-card">
        <p>Statut de présence et géolocalisation synchronisés sur tous les appareils des utilisateurs</p>
      </div>
      <div class="mini-card">
        <p>Visioconférence avec vos équipes et des utilisateurs externes</p>
      </div>
      <div class="mini-card">
        <p>Notifications push, pop ups de nouveaux appels et click2call</p>
      </div>
      <div class="mini-card">
        <p>Fax et SMS à une ou plusieurs personnes</p>
      </div>
      <div class="mini-card">
        <p>Accès en ligne aux annuaires téléphoniques de l'entreprise</p>
      </div>
      <div class="mini-card">
        <p>Partage d’écran</p>
      </div>
      <div class="mini-card">
        <p>Post-it et demandes de rappel virtuels</p>
      </div>
      <div class="mini-card">
        <p>Transfert de fichiers</p>
      </div>
      <div class="mini-card">
        <p>Attendant Console</p>
      </div>
      <div class="mini-card">
        <p>Contrôle de l’ensemble des appareils des utilisateurs</p>
      </div>
      <div class="mini-card">
        <p>Statistiques et rapports d’activités des appels</p>
      </div>
      <div class="mini-card">
        <p>Cryptage de bout en bout</p>
      </div>
      <div class="mini-card">
        <p>Applications mobiles</p>
      </div>
      <div class="mini-card">
        <p>Messages vocaux et enregistrements d'appels</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SolutionCollaboration',
};
</script>

<style scoped>
.collaboration {
  padding: 2rem;
  padding-top: 12rem;
}

.collaboration h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.collaboration .description { /* Cibler uniquement ce paragraphe */
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 2rem; /* Même taille que le titre */
  color: blue; /* Couleur bleue */
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 cards per row */
  grid-gap: 1.5rem; /* Gap between cards */
  justify-items: stretch; /* Stretch cards to fill the space */
}

.mini-card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 120px; /* Fixed height to keep all cards uniform */
  width: 100%; /* Ensure all cards take up full available width */
}

.mini-card p {
  font-size: 0.875rem; /* Smaller font for mini cards */
  margin: 0;
}
</style>
