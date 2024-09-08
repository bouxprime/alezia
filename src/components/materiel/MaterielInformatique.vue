<template>
    <div class="materiel-container">
      <!-- Partie Matériel Informatique -->
      <section class="section-materiel">
        <h1>Matériel Informatique</h1>
        <p>
          Nous offrons une gamme complète de PC, ordinateurs portables et tablettes, adaptés à tous les usages professionnels. Nos équipements sont conçus pour être performants et fiables, permettant à vos collaborateurs de travailler efficacement, où qu’ils se trouvent.
        </p>
      </section>
  
      <!-- Partie Solutions IT -->
      <section class="section-solutions">
        <div class="content">
          <div class="image-placeholder"></div> <!-- Cadre gris pour l'image -->
          <div class="text">
            <h2><span class="solutions-title">Solutions IT</span></h2>
            <p>
              Pour répondre précisément à vos besoins en matériel et solutions IT, nous avons choisi de nous spécialiser dans les standards les plus reconnus du marché. Toujours attentifs aux évolutions technologiques et aux nouveaux modèles, nous enrichissons notre gamme de produits en permanence.
            </p>
            <p>
              Cette démarche nous permet de conserver une expertise solide et de vous offrir des solutions innovantes et parfaitement adaptées à vos exigences, grâce à notre connaissance approfondie des produits disponibles chez ALEZIA.
            </p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MaterielInformatique',
  };
  </script>
  
  <style scoped>
  .materiel-container {
    background-color: #f7f7f7; /* Même background color pour les deux sections */
    padding: 0; /* Supprimer le padding global */
  }
  
  .section-materiel {
    text-align: center;
    margin-bottom: 0; /* Supprimer la marge inférieure */
    padding-bottom: 0; /* Supprimer le padding en bas */
  }
  
  .section-materiel h1 {
    font-size: 2rem;
    margin-bottom: 0.3rem; /* Réduire l'espace entre le titre et le texte */
  }
  
  .section-materiel p {
    margin-bottom: 0; /* Réduire l'espace sous le texte */
  }
  
  .section-solutions {
    padding-top: 0.5rem; /* Réduction de l'espacement vertical entre les sections */
    padding-bottom: 1rem;
    display: flex;
    justify-content: center; /* Centrer la section entière au centre */
  }
  
  .section-solutions .content {
    display: flex;
    justify-content: center; /* Centrage du contenu */
    align-items: center;
    flex-wrap: wrap;
    max-width: 900px; /* Limiter la largeur pour centrer */
    margin: 0 auto; /* Centrer l'ensemble de la section */
  }
  
  .section-solutions .image-placeholder {
    flex: 1;
    width: 150px;
    height: 150px;
    background-color: #d3d3d3; /* Cadre gris */
    margin-right: 1rem; /* Espace réduit entre l'image et le texte */
  }
  
  .section-solutions .text {
    flex: 2;
  }
  
  .solutions-title {
    font-weight: bold;
    font-size: 1.5rem;
    text-transform: uppercase;
  }
  
  .section-solutions p {
    margin-top: 0.3rem; /* Réduire l'espace entre les paragraphes */
    font-size: 1rem;
    line-height: 1.5;
  }
  </style>
  