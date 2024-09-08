<template>
  <div class="services-manages-page">
    <!-- Titre Principal -->
    <section class="hero">
      <h1>Services managés & infogérance</h1>
      <p>La confiance dans l'externalisation IT de proximité</p>
      <p>La fiabilité technique d’une gestion externe de votre parc</p>
    </section>

    <!-- Include the ConnectivitySection Component -->
    <ConnectivitySection />

    <!-- Include the ParkManagementSection Component -->
    <ParkManagementSection />
  </div>
</template>

<script>
import ConnectivitySection from '@/components/manage/ConnectivitySection.vue';
import ParkManagementSection from '@/components/manage/ParkManagementSection.vue';

export default {
  name: 'ServicesManagePage',
  components: {
    ConnectivitySection,
    ParkManagementSection
  }
};
</script>

<style scoped>
.services-manages-page {
  padding-top: 120px;
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
</style>
