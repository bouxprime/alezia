<template>
    <section class="audit">
      <h2>Audit & accompagnement</h2>
      <p>Grâce à un audit précis, nous parvenons à comprendre la direction technique que vous souhaitez donner à votre structure ainsi que vos attentes et vos enjeux stratégiques.</p>
      <div class="advantages">
        <div class="advantage" v-for="(advantage, index) in advantages" :key="index">
          <h3>{{ advantage.title }}</h3>
          <p>{{ advantage.description }}</p>
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
    padding: 2rem;
    background-color: #f9f9f9;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  
  .advantages {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  .advantage {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .advantage h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  .advantage p {
    font-size: 1rem;
    line-height: 1.4;
  }
  </style>
  