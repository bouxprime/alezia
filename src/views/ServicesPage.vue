<template>
  <div>
    <TitleWithParagraph />
    <ImageWithText />
    <ServiceCards />
    <div class="expandable-cards-section">
      <h2>Pourquoi Choisir Alezia</h2>
      <ExpandableCard title="Monitoring Informatique">
        <p>Chez <strong>Alezia</strong>, nous surveillons votre parc informatique avec des outils avancés pour garantir une performance optimale et prévenir les incidents. Notre équipe d'experts assure une gestion proactive de votre infrastructure.</p>
      </ExpandableCard>
      <ExpandableCard title="Leasing Matériel">
        <p>Profitez de notre service de leasing pour accéder aux dernières technologies sans lourdes dépenses initiales. <strong>Alezia</strong> offre des solutions flexibles adaptées à vos besoins en hardware et software.</p>
      </ExpandableCard>
      <ExpandableCard title="Sécurité IT">
        <p>Nos solutions de sécurité IT protègent vos données sensibles contre les cybermenaces. Faites confiance à <strong>Alezia</strong> pour une sécurité informatique robuste et une protection complète de vos systèmes.</p>
      </ExpandableCard>
      <ExpandableCard title="Téléphonie VoIP">
        <p>Découvrez nos solutions de téléphonie VoIP avec Wildix et 3CX, les leaders du marché. <strong>Alezia</strong> vous offre une communication efficace et intégrée pour votre entreprise.</p>
      </ExpandableCard>
      <ExpandableCard title="Lignes Internet">
        <p>Assurez une connexion internet fiable et rapide pour votre entreprise avec les solutions d'<strong>Alezia</strong>, adaptées à vos besoins spécifiques et garantissant une performance optimale.</p>
      </ExpandableCard>
    </div>
    <SpacingSection height="100vh" />
  </div>
</template>

<script>
import TitleWithParagraph from '@/components/services/TitleWithParagraph.vue'
import ImageWithText from '@/components/services/ImageWithText.vue'
import ServiceCards from '@/components/services/ServiceCards.vue'
import ExpandableCard from '@/components/services/ExpandableCard.vue'
import SpacingSection from '@/components/utilities/SpacingSection.vue'

export default {
  name: 'ServicesPage',
  components: {
    TitleWithParagraph,
    ImageWithText,
    ServiceCards,
    ExpandableCard,
    SpacingSection
  }
}
</script>

<style scoped>
h1 {
  font-family: 'Poppins', sans-serif;
  background-color: #F7FAFF;
  text-align: center;
}

.expandable-cards-section {
  background-color: #F7FAFF;
  padding: 20px;
  padding-bottom: 100px;
}

.expandable-cards-section h2 {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  margin-bottom: 20px;
}
</style>
