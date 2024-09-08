<template>
  <section class="identification-vulnerabilites">
    <h2>Identifiez les Vulnérabilités et Renforcez la Sécurité Informatique de Votre Entreprise</h2>
    
    <div class="content-layout">
      <!-- Image placeholder -->
      <div class="image-placeholder">
        <img src="path-to-your-image.png" alt="Image related to security vulnerabilities" />
      </div>
      
      <!-- Text content -->
      <div class="text-content">
        <p>Êtes-vous sûr que votre système d'information protège efficacement vos données sensibles ? Vos collaborateurs suivent-ils les bonnes pratiques de sécurité, ou pourraient-ils être des points faibles ? Disposez-vous d'un plan de réponse aux incidents en cas de cyberattaque ou de violation de données ? Vos systèmes et logiciels sont-ils régulièrement mis à jour ?</p>
        
        <p>Évaluez la vulnérabilité de votre TPE, PME ou ASBL en demandant un audit technique de sécurité informatique à notre équipe. Nous identifions les faiblesses de votre infrastructure, les erreurs de configuration et les logiciels malveillants éventuels.</p>
        
        <p>À la demande de votre DG ou RH, ALEZIA réalise également des tests de vulnérabilité pour détecter les failles potentielles dans vos réseaux, applications et équipements.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CybersecuriteAudit',
};
</script>

<style scoped>
.identification-vulnerabilites {
  padding: 4rem 2rem; /* Padding top et bottom augmenté */
  background-color: #f9f9f9;
  text-align: center; /* Centrer le contenu */
}

.identification-vulnerabilites h2 {
  margin-bottom: 3rem; /* Espace entre le titre et le contenu */
}

.content-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem; /* Espacement entre les éléments */
}

@media (min-width: 768px) {
  .content-layout {
    grid-template-columns: 1fr 1fr; /* Disposition en deux colonnes pour les écrans larges */
  }
}

.image-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e0e0; /* Placeholder background */
  width: 100%;
  height: 300px;
}

.image-placeholder img {
  max-width: 100%;
  height: auto;
}

.text-content p {
  margin-bottom: 2rem; /* Ajout d'espace entre les paragraphes */
  font-size: 1.1rem;
  color: #333;
}
</style>
