<template>
  <section class="cloud-hero">
    <div class="hero-content">
      <h1>{{ title }}</h1>
      <p>{{ description1 }}</p>
      <p>{{ description2 }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CloudHeroComponent',
  props: {
    title: {
      type: String,
      default: 'Le Cloud',
    },
    description1: {
      type: String,
      default: "Intégré au paysage entrepreneurial depuis quelques années, le Cloud propose une vaste gamme de services et ouvre aux entreprises un éventail infini de possibilités."
    },
    description2: {
      type: String,
      default: "Dans ce contexte, ALESIA permet à ses clients de saisir ces opportunités tout en hébergeant leurs données dans un datacenter situé en Belgique."
    }
  }
};
</script>

<style scoped>
.cloud-hero {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh; /* Remplace la hauteur fixe par un min-height pour plus de flexibilité */
  background-color: #f7f7f7;
  padding-top: 120px; /* Ajoute un padding-top pour éviter le chevauchement avec la navbar */
  padding-bottom: 100px; /* Ajoute un padding-bottom pour espacer la section suivante */
}

.hero-content {
  text-align: center;
  max-width: 1200px; /* Augmente la largeur maximale pour étendre le texte */
  padding: 0 40px; /* Ajoute un padding sur les côtés pour améliorer la lisibilité */
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

p {
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  line-height: 1.6;
}
</style>
