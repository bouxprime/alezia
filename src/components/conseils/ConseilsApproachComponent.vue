<template>
  <section class="approach">
    <h2>Une approche personnalisée</h2>
    <div class="content">
      <div class="text">
        <p>De l’identification de la solution adéquate à votre problématique jusqu’à sa mise en œuvre, ALEZIA s’assure que vos ressources digitales sont en parfaite adéquation avec vos objectifs de croissance.</p>
        <p>Quelle que soit votre problématique, ALEZIA vous propose une consultance complète.</p>
      </div>
      <div class="image">
        <img :src="require('@/assets/tom1.png')" :alt="imageAlt" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ConseilsApproachComponent',
  props: {
    imageAlt: {
      type: String,
      default: 'Image of personalized approach',
    },
  },
};
</script>

<style scoped>
.approach {
  padding: 2rem;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center; /* Le titre est maintenant centré */
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto; /* Centrage horizontal de la div content */
}

.text {
  font-size: 1.125rem;
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 1rem;
}

.image img {
  max-width: 300px;
  height: auto;
  border-radius: 10px;
}

@media (min-width: 768px) {
  .content {
    flex-direction: row; /* Sur les écrans plus larges, le texte et l'image seront côte à côte */
  }

  .text {
    margin-right: 2rem;
  }
}
</style>
