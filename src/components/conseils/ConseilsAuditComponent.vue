<template>
  <section class="audit">
    <h2>Audit & accompagnement</h2>
    <p>Grâce à un audit précis, nous parvenons à comprendre la direction technique que vous souhaitez donner à votre structure ainsi que vos attentes et vos enjeux stratégiques.</p>
    <div class="grid-container">
      <div class="card" v-for="(advantage, index) in advantages" :key="index">
        <div class="card-inner">
          <div class="card-front">
            <h3>{{ advantage.title }}</h3>
          </div>
          <div class="card-back">
            <p>{{ advantage.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ConseilsAuditComponent',
  data() {
    return {
      advantages: [
        { title: 'Performance', description: 'Optimisez vos workflows en automatisant les processus.' },
        { title: 'Optimisation des coûts', description: 'Profitez de solutions numériques ajustées pour réduire vos coûts.' },
        { title: 'Évolution des perspectives', description: 'Découvrez le potentiel de vos données grâce à des solutions évolutives.' },
        { title: 'Conseils et assistance', description: 'ALEZIA vous accompagne avec une approche de proximité.' },
      ],
    };
  },
};
</script>

<style scoped>
.audit {
  padding: 8rem 2rem 2rem; /* Padding top réduit à 8rem */
  background-color: #f9f9f9;
}

.audit h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center;
}

.audit p {
  text-align: center;
  margin-bottom: 2rem;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0.5rem;
  grid-row-gap: 1rem;
  justify-items: center;
  padding-top: 8rem;
}

.card {
  perspective: 1000px;
  width: 400px;
  height: 300px;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-front {
  background-color: #ffffff;
  color: #007bff;
  font-size: 1.5rem;
  font-weight: bold;
}

.card-back {
  background-color: #f7f7f7;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-back p {
  font-size: 1rem;
  line-height: 1.6;
}
</style>
