<template>
  <div class="cloud-page">
    <!-- Titre Principal -->
    <section class="hero">
      <h1>Le Cloud</h1>
      <p>Intégré au paysage entrepreneurial depuis quelques années, le Cloud propose une vaste gamme de services et ouvre aux entreprises un éventail infini de possibilités.</p>
      <p>Dans ce contexte, ALESIA permet à ses clients de saisir ces opportunités tout en hébergeant leurs données dans un datacenter situé en Belgique.</p>
    </section>

    <!-- Bannière : Pourquoi avoir recours au Cloud ? -->
    <section class="banner why-cloud">
      <h2>Pourquoi avoir recours au Cloud ?</h2>
      <div class="features">
        <div class="feature">
          <h3>Accessible</h3>
          <p>Le cloud est accessible à tous, sans prérequis spécifiques. Que vous soyez une PME ou une grande entreprise, le cloud présente des avantages pour tous les types d’organisations. Il permet de réduire les coûts, d'ajuster facilement les ressources, de simplifier la maintenance, et d'améliorer la sécurité. De plus, il offre un point de contact unique et facilement accessible. Les raisons de s'intéresser au cloud sont nombreuses et variées, dépassant cette liste non exhaustive.</p>
        </div>
        <div class="feature">
          <h3>Flexible</h3>
          <p>Le cloud permet de créer rapidement des serveurs sur mesure, parfaitement adaptés à vos envies, et de modifier leurs particularités à tout moment. Selon vos exigences, vous pouvez augmenter ou diminuer le stockage disponible. Cela vous permet de tirer parti de toutes les applications nécessaires sans avoir à vous soucier de l'achat de matériel physique.</p>
        </div>
        <div class="feature">
          <h3>Local</h3>
          <p>Le cloud est omniprésent, et toute machine connectée à internet peut être considérée comme faisant partie du cloud. Pour les serveurs, nous utilisons des Data Centers. Et nul question de devoir héberger vos données en France ou en Allemagne, notre datacenter se trouve au plus près de nos clients, en Belgique.</p>
        </div>
        <div class="feature">
          <h3>Sécurisé</h3>
          <p>Le cloud offre d'abord une flexibilité remarquable en adaptant les serveurs à vos besoins spécifiques. Il assure également une sécurité accrue grâce à des datacenters où le matériel est protégé contre les accès non autorisés, les inondations, les coupures de courant, et maintenu dans un environnement contrôlé (température stable, poussière limitée, etc.). De plus, il garantit une accessibilité continue avec des équipements redondants pour éviter les interruptions (connexions internet, serveurs, commutateurs, etc.).</p>
        </div>
      </div>
    </section>

    <!-- Bannière : Avec le Cloud, découvrez un monde de possibilités -->
    <section class="banner discover">
      <h2>Avec le Cloud, découvrez un monde de possibilités</h2>
    </section>

    <!-- Virtualisation de vos machines -->
    <section class="virtualization">
      <div class="content">
        <div class="image">
          <img src="path/to/your/tom1.png" alt="Virtualisation">
        </div>
        <div class="text">
          <h3>Virtualisation de vos machines</h3>
          <p>La virtualisation de votre serveur permet d’ajuster facilement les ressources et de sauvegarder ou restaurer rapidement l’ensemble de votre système. Hébergée dans un DataCenter sécurisé, votre machine virtuelle bénéficie d’une haute disponibilité grâce à du matériel redondant, à une connectivité internet fiable, et à des sauvegardes quotidiennes. Même en cas de panne internet au bureau, vous pouvez accéder à vos données depuis chez vous ou à l'étranger, avec une sécurité renforcée grâce à l'authentification à deux facteurs.</p>
        </div>
      </div>
    </section>

    <!-- Avantages & Accessibilité -->
    <section class="advantages">
      <div class="feature">
        <h3>Les avantages</h3>
        <p>Votre serveur virtualisé offre la flexibilité d'ajuster les ressources et de restaurer rapidement le système. Il est accessible depuis divers appareils, garantissant une flexibilité maximale, que vous utilisiez un PC, un Mac, une tablette ou un smartphone.</p>
      </div>
      <div class="feature">
        <h3>Accessibilité & Sauvegarde</h3>
        <p>Un serveur cloud permet à tous vos collaborateurs d’accéder aux programmes, peu importe leur emplacement. Nous répliquons vos données dans un autre DataCenter belge et proposons des sauvegardes sur 14 jours, extensibles jusqu'à 13 mois. Un espace de stockage supplémentaire est disponible selon vos besoins, et l'interface Veeam Enterprise Manager vous permet de gérer et restaurer vos fichiers en toute autonomie.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CloudPage',
};
</script>

<style scoped>
.cloud-page {
  font-family: 'Roboto', sans-serif;
  color: #333;
  line-height: 1.6;
  padding-top: 120px; /* Ajouter du padding-top pour éviter que la navbar ne chevauche le contenu */
}

.hero {
  text-align: center;
  padding: 2rem;
  background-color: #f7f7f7;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero p {
  max-width: 800px;
  margin: 0 auto 1rem;
}

.banner {
  padding: 2rem;
  text-align: center;
  background-color: #e0f7fa;
}

.banner h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1rem;
}

.feature {
  flex: 1 1 200px;
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.virtualization {
  display: flex;
  padding: 2rem;
  background-color: #f7f7f7;
}

.virtualization .content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
}

.virtualization .image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.virtualization .text {
  flex: 1 1 300px;
}

.advantages {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
  background-color: #e0f7fa;
}

.advantages .feature {
  flex: 1 1 200px;
  margin: 1rem;
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
