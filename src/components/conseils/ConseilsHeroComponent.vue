<template>
  <section class="hero">
    <h1>Conseil & accompagnement</h1>
    <p class="subtitle blue-text">
      ALEZIA vous accompagne dans vos évolutions technologiques en mettant à votre disposition des talents aux compétences reconnues.
    </p>
    <p class="body-text">
      La transformation numérique est désormais incontournable au sein des entreprises, mais la recherche des solutions adéquates devient de plus en plus ardue.
      Les évolutions technologiques, qui renforcent les restructurations au sein des sociétés, représentent un défi majeur pour la majorité des institutions.
      Les nouvelles technologies, ainsi que les normes qui les accompagnent, sont souvent complexes à comprendre et difficiles à maîtriser, ce qui constitue le cœur de l'expertise d'ALEZIA.
      Quel que soit votre besoin, nous capitalisons sur la puissance d'un réseau de partenaires fiables pour dénicher le talent qui répondra avec exactitude à votre demande.
      Ces experts, aux compétences reconnues, sauront vous diriger vers la solution la plus complète et adaptée à vos enjeux.
    </p>
  </section>
</template>

<script>
export default {
  name: 'ConseilsHeroComponent',
};
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 4rem 1rem; /* Ajout de plus de padding en haut */
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.body-text {
  font-size: 1rem;
  line-height: 1.6;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  text-align: justify;
}

/* Ajout d'une classe pour mettre en bleu le texte */
.blue-text {
  color: blue;
}
</style>
