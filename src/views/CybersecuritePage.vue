<template>
  <div class="cybersecurite-page">
    <!-- Titre Principal -->
    <section class="hero">
      <h1>Cybersécurité</h1>
      <p>Attention, aucune offre disponible pour la ‘cybersécurité’.</p>
      <p>Chez ALEZIA, nous pensons que la sécurité ne devrait jamais être une option, mais plutôt une composante fondamentale de tous vos services.</p>
    </section>

    <!-- ALEZIA : Votre partenaire en Cybersécurité avec image -->
    <section class="partenaire-cybersecurite">
      <div class="content">
        <div class="text">
          <h2>ALEZIA : Votre partenaire en Cybersécurité</h2>
          <p>Face à des menaces cybercriminelles de plus en plus sophistiquées, à la complexité croissante des systèmes d'information et aux exigences légales strictes en sécurité informatique, ALEZIA est là pour vous accompagner.</p>
          <p>En confiant votre cybersécurité à ALEZIA, vous pouvez vous concentrer sereinement sur votre activité principale tout en bénéficiant des avantages de l'externalisation et de l'infogérance.</p>
        </div>
        <div class="image">
          <img src="path/to/your/image1.jpg" alt="Partenaire en Cybersécurité">
        </div>
      </div>
    </section>

    <!-- Veille, Prévention et Réactivité -->
    <section class="cybersecurite-services">
      <div class="services-grid">
        <div class="service-item">
          <h3>Veille, Prévention et Réactivité</h3>
          <p>Nous surveillons en temps réel votre sécurité informatique et intervenons immédiatement, des correctifs aux mesures d'urgence pour les vulnérabilités zero-day.</p>
        </div>
        <div class="service-item">
          <h3>Réduction des Coûts et de la Charge de Travail</h3>
          <p>Externalisez pour diminuer vos coûts de gestion et alléger la charge de travail de vos équipes tout en accédant à une expertise avancée.</p>
        </div>
        <div class="service-item">
          <h3>Gestion des Risques et Conformité</h3>
          <p>Nous vous aidons à gérer les risques informatiques et à respecter les régulations telles que le RGPD et les normes industrielles.</p>
        </div>
        <div class="service-item">
          <h3>Sensibilisation et Bonnes Pratiques</h3>
          <p>Nous veillons à ce que vos équipes soient formées aux meilleures pratiques en cybersécurité.</p>
        </div>
      </div>
    </section>

    <!-- Identifiez les Vulnérabilités -->
    <section class="identification-vulnerabilites">
      <div class="content">
        <div class="image">
          <img src="path/to/your/image2.jpg" alt="Identification des Vulnérabilités">
        </div>
        <div class="text">
          <h2>Identifiez les Vulnérabilités et Renforcez la Sécurité Informatique de Votre Entreprise</h2>
          <p>Êtes-vous sûr que votre système d'information protège efficacement vos données sensibles ? Vos collaborateurs suivent-ils les bonnes pratiques de sécurité, ou pourraient-ils être des points faibles ? Disposez-vous d'un plan de réponse aux incidents en cas de cyberattaque ou de violation de données ? Vos systèmes et logiciels sont-ils régulièrement mis à jour ?</p>
          <p>Évaluez la vulnérabilité de votre TPE, PME ou ASBL en demandant un audit technique de sécurité informatique à notre équipe. Nous identifions les faiblesses de votre infrastructure, les erreurs de configuration et les logiciels malveillants éventuels.</p>
          <p>À la demande de votre DG ou RH, ALEZIA réalise également des tests de vulnérabilité pour détecter les failles potentielles dans vos réseaux, applications et équipements.</p>
        </div>
      </div>
    </section>

    <!-- Anticipez les Menaces -->
    <section class="anticipez-menaces">
      <h2>Anticipez les Menaces Informatiques et Automatisez la Mise à Jour de Vos Systèmes</h2>
      <div class="menaces-grid">
        <div class="menace-item">
          <h3>Surveillance Continue</h3>
          <p>Suivi en temps réel de l’activité de votre parc et de votre SI.</p>
        </div>
        <div class="menace-item">
          <h3>Évaluation des Vulnérabilités</h3>
          <p>Identification des correctifs nécessaires à l’aide d’outils spécialisés.</p>
        </div>
        <div class="menace-item">
          <h3>Planification des Correctifs</h3>
          <p>Mise à jour et remplacement de matériel en fonction de leur priorité.</p>
        </div>
        <div class="menace-item">
          <h3>Déploiement Automatisé</h3>
          <p>Installation des correctifs pour réduire les interventions manuelles et limiter l’impact sur votre activité.</p>
        </div>
        <div class="menace-item">
          <h3>Reporting</h3>
          <p>Documentation des actions effectuées et des résultats obtenus.</p>
        </div>
      </div>
      <p class="solution">ALEZIA propose une solution de sécurité informatique adaptée à toutes les structures, protégeant contre divers types de menaces (attaques, virus, intrusions, spams, phishing, etc.).</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CybersecuritePage',
};
</script>

<style scoped>
.cybersecurite-page {
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

.partenaire-cybersecurite, .identification-vulnerabilites {
  padding: 2rem;
  background-color: #f9f9f9;
}

.partenaire-cybersecurite h2, .identification-vulnerabilites h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.partenaire-cybersecurite .content, .identification-vulnerabilites .content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.partenaire-cybersecurite .text, .identification-vulnerabilites .text {
  flex: 1;
  padding: 1rem;
}

.partenaire-cybersecurite .image, .identification-vulnerabilites .image {
  flex: 1;
  padding: 1rem;
}

.partenaire-cybersecurite img, .identification-vulnerabilites img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.cybersecurite-services {
  padding: 2rem;
  background-color: #fff;
}

.services-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.service-item {
  flex: 1 1 45%;
  margin: 1rem 0;
  padding: 1.5rem;
  background-color: #f1f1f1;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.service-item h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.anticipez-menaces {
  padding: 2rem;
  background-color: #f7f7f7;
}

.anticipez-menaces h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.menaces-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.menace-item {
  flex: 1 1 200px;
  margin: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.menace-item h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.solution {
  text-align: center;
  padding-top: 1.5rem;
  font-style: italic;
}
</style>
