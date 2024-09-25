<template>
  <div class="materiel-page">
    <!-- Inclure les composants -->
    <MaterielInformatique />
    <SolutionsIT />
    <ConnexionInternet />
  </div>
</template>

<script>
import MaterielInformatique from '@/components/materiel/MaterielInformatique.vue';
import SolutionsIT from '@/components/materiel/SolutionsIT.vue';
import ConnexionInternet from '@/components/materiel/ConnexionInternet.vue';

export default {
  name: 'MaterielPage',
  components: {
    MaterielInformatique,
    SolutionsIT,
    ConnexionInternet,
  },
};
</script>

<style scoped>
.materiel-page {
  padding-top: 120px; /* Prevent overlap with the navbar */
  font-family: 'Roboto', sans-serif;
  color: #333;
  line-height: 1.6;
}
</style>
