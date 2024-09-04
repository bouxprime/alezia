<template>
    <section class="process">
      <h2>Le processus ALEZIA</h2>
      <p>Dans tout projet, c'est avant tout la nature du problème qui détermine la solution.</p>
      <div class="process-grid">
        <div class="step" v-for="(step, index) in steps" :key="index">
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ConseilsProcessComponent',
    data() {
      return {
        steps: [
          { title: 'Gestion de projet', description: 'Nous assurons une gestion de projet rigoureuse pour garantir la réussite.' },
          { title: 'Dématérialisation', description: 'Nous vous aidons à dématérialiser vos processus pour plus d\'efficacité.' },
          { title: 'Gestion e-CRM', description: 'Optimisez la relation client avec des solutions CRM adaptées à vos besoins.' },
          { title: 'Cloud', description: 'Profitez de la flexibilité et de la sécurité des solutions cloud pour vos infrastructures.' },
          { title: 'Cybersécurité', description: 'Renforcez la sécurité de vos données avec des stratégies avancées.' },
          { title: 'Infogérance', description: 'Nous prenons en charge la gestion de votre infrastructure IT.' },
          { title: 'Matériel IT', description: 'Nous fournissons du matériel IT de haute qualité pour répondre à vos besoins.' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .process {
    padding: 2rem;
    background-color: #f9f9f9;
    text-align: center;
  }
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .process-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  
  .step {
    background-color: #fff;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .step h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  .step p {
    font-size: 1rem;
    line-height: 1.4;
  }
  </style>
  