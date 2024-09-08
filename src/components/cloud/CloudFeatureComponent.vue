<template>
  <section class="cloud-features">
    <div class="features-grid">
      <div
        class="feature-box"
        v-for="(feature, index) in features"
        :key="index"
        @click="selectFeature(index)"
        :class="{ active: selectedFeatureIndex === index }"
      >
        <h3>{{ feature.title }}</h3>
      </div>
    </div>

    <div class="feature-description" v-if="selectedFeature">
      <h3>{{ selectedFeature.title }}</h3>
      <p>{{ selectedFeature.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CloudFeatureComponent',
  data() {
    return {
      selectedFeatureIndex: 0,
      features: [
        {
          title: 'Accessible',
          description: "Le cloud est accessible à tous, sans prérequis spécifiques. Que vous soyez une PME ou une grande entreprise, le cloud présente des avantages pour tous les types d’organisations. Il permet de réduire les coûts, d'ajuster facilement les ressources, de simplifier la maintenance, et d'améliorer la sécurité."
        },
        {
          title: 'Flexible',
          description: "Le cloud permet de créer rapidement des serveurs sur mesure, parfaitement adaptés à vos envies, et de modifier leurs particularités à tout moment. Selon vos exigences, vous pouvez augmenter ou diminuer le stockage disponible."
        },
        {
          title: 'Local',
          description: "Le cloud est omniprésent, et toute machine connectée à internet peut être considérée comme faisant partie du cloud. Pour les serveurs, nous utilisons des Data Centers situés en Belgique."
        },
        {
          title: 'Sécurisé',
          description: "Le cloud offre une flexibilité remarquable en adaptant les serveurs à vos besoins spécifiques. Il assure également une sécurité accrue grâce à des datacenters où le matériel est protégé contre les accès non autorisés."
        }
      ]
    };
  },
  computed: {
    selectedFeature() {
      return this.features[this.selectedFeatureIndex];
    }
  },
  methods: {
    selectFeature(index) {
      this.selectedFeatureIndex = index;
    }
  }
};
</script>

<style scoped>
.cloud-features {
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: white;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 40%;
}

.feature-box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background-color: #f7f7f7;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.feature-box h3 {
  color: #1e90ff;
}

.feature-box.active {
  background-color: #e0f7fa;
}

.feature-box:hover {
  background-color: #e0f7fa;
}

h3 {
  margin: 0;
}

.feature-description {
  width: 55%;
  padding-left: 2rem;
}

.feature-description h3 {
  color: #1e90ff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.feature-description p {
  line-height: 1.6;
  font-size: 1rem;
}
</style>
