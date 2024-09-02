<template>
    <div class="apropos-page">
      <section class="vision-future">
        <h1>Le regard tourné vers l'avenir</h1>
        <div class="innovation">
          <p>En tant que partenaire IT et expert en télécommunication ALEZIA se positionne au centre de l'innovation pour aider les entreprises à maximiser leur potentiel technologique et la valeur de leurs actifs.</p>
          <p>Quel que soit le secteur ou le public visé, l'innovation doit apporter des solutions concrètes pour simplifier ou améliorer le quotidien de chacun.</p>
          <p>Quel que soit le projet, les valeurs d’ALEZIA sont portées par des équipes passionnées capables de rendre accessibles des technologies encore avant-gardistes à des entreprises de toutes tailles.</p>
        </div>
        <div class="technology-service">
          <img src="path-to-image.jpg" alt="Innovation Image">
          <p>Chez ALEZIA nous croyons que les nouvelles technologies doivent avant tout être au service des utilisateurs, des patients, des collaborateurs et des consommateurs.</p>
        </div>
      </section>
  
      <section class="engagement">
        <h2>Engagée en faveur de l'intégrité, de l'inclusion et de la diversité</h2>
        <p>ALEZIA adopte une politique de responsabilité sociale des entreprises (RSE) fondée sur des valeurs humaines solides visant le bien-être de nos collaborateurs et le développement durable de nos activités et projets.</p>
      </section>
  
      <section class="objectives">
        <h2>Votre objectif: évoluer...</h2>
        <div class="services">
          <div class="service">
            <h3>Accompagnement</h3>
            <p>Du déploiement à l'assistance, nous mettons tout en œuvre pour assurer la stabilité et l'efficacité de votre infrastructure.</p>
          </div>
          <div class="service">
            <h3>Satisfaction</h3>
            <p>Nous nous engageons à soutenir nos clients sur le long terme en plaçant toujours leur satisfaction au cœur de nos priorités.</p>
          </div>
          <div class="service">
            <h3>Réactivité</h3>
            <p>Dès notre premier échange, nous prenons le temps de bien saisir vos défis afin de vous proposer une solution sur mesure.</p>
          </div>
          <div class="service">
            <h3>Evolutif</h3>
            <p>Nous anticipons l’avenir en évoluant en phase avec vos besoins.</p>
          </div>
        </div>
      </section>
  
      <section class="mission">
        <h2>Notre mission: vous accompagner au cœur du progrès technologique</h2>
        <div class="progress">
          <p>ALEZIA a choisi d'installer ses bureaux au sein d'A6K, un écosystème dynamique en Belgique qui stimule l'innovation en ingénierie.</p>
          <p>L’objectif principal d’A6K est de favoriser une croissance collaborative dans les domaines de l'énergie, des communications et de la transformation vers l'Industrie 4.0.</p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AproposPage',
  };
  </script>
  
  <style scoped>
  .apropos-page {
    padding-top: 120px; /* Ajustez cette valeur selon la hauteur de votre navbar */
    box-sizing: border-box;
  }
  
  .vision-future, .engagement, .objectives, .mission {
    margin-bottom: 40px;
  }
  
  .innovation, .technology-service, .progress {
    margin-top: 20px;
  }
  
  .technology-service {
    display: flex;
    align-items: center;
  }
  
  .technology-service img {
    margin-right: 20px;
    width: 150px;
    height: auto;
  }
  
  .services {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }
  
  .service {
    padding: 10px;
    background-color: #f4f4f4;
    border-radius: 8px;
    text-align: center;
  }
  
  .service h3 {
    margin-bottom: 10px;
  }
  </style>
  