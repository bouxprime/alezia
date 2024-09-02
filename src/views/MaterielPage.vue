<template>
  <div class="materiel-page">
    <!-- Partie 1: Matériel Informatique -->
    <section class="section-materiel">
      <h1>Matériel Informatique</h1>
      <p>Nous offrons une gamme complète de PC, ordinateurs portables et tablettes, adaptés à tous les usages professionnels. Nos équipements sont conçus pour être performants et fiables, permettant à vos collaborateurs de travailler efficacement, où qu’ils se trouvent.</p>
    </section>

    <!-- Partie 2: Solutions IT avec image -->
    <section class="section-solutions">
      <div class="content">
        <div class="image">
          <img src="path/to/your/image1.jpg" alt="Solutions IT">
        </div>
        <div class="text">
          <h2>Solutions IT</h2>
          <p>Pour répondre précisément à vos besoins en matériel et solutions IT, nous avons choisi de nous spécialiser dans les standards les plus reconnus du marché. Toujours attentifs aux évolutions technologiques et aux nouveaux modèles, nous enrichissons notre gamme de produits en permanence.</p>
          <p>Cette démarche nous permet de conserver une expertise solide et de vous offrir des solutions innovantes et parfaitement adaptées à vos exigences, grâce à notre connaissance approfondie des produits disponibles chez ALEZIA.</p>
        </div>
      </div>
    </section>

    <!-- Partie 3: Périphériques Connexes -->
    <section class="section-peripheriques">
      <h2>Périphériques Connexes</h2>
      <p>Nous répondons à l’ensemble de vos besoins en périphériques grâce à une large gamme de produits, incluant des imprimantes, téléphones, casques, et bien plus encore. Avec ALEZIA, vous disposez de tous les équipements nécessaires pour garantir une expérience utilisateur optimale et une productivité accrue.</p>
    </section>

    <!-- Bannière Réseau -->
    <section class="banner-reseau">
      <h2>Réseau</h2>
    </section>

    <!-- Partie 4: Réseau -->
    <section class="section-reseau">
      <h2>Réseau</h2>
      <p>Un accès Internet performant est essentiel pour les entreprises, assurant une communication fluide, une collaboration efficace, et la sécurité des données.</p>
      <p>ALEZIA vous assure une connexion stable qui soutient la productivité, permet l'utilisation des outils numériques indispensables, et aide l'entreprise à rester compétitive dans un environnement technologique en constante évolution.</p>
    </section>

    <!-- Partie 5: Connexion Internet professionnelle avec image -->
    <section class="section-connexion">
      <div class="content">
        <div class="image">
          <img src="path/to/your/image2.jpg" alt="Connexion Internet">
        </div>
        <div class="text">
          <h2>Connexion Internet professionnelle</h2>
          <p>Choisissez une connexion Internet haute performance, parfaitement adaptée aux exigences de votre entreprise. Nous fournissons des solutions fiables et rapides, indispensables au bon déroulement de vos activités professionnelles.</p>
          <p>Nous proposons des solutions complètes pour vos infrastructures réseau, qu’il s’agisse de réseaux filaires ou sans fil (WiFi). De la phase de conseil à l’étude avancée sur site, notre expertise garantit une installation optimale et performante, adaptée aux besoins spécifiques de votre entreprise.</p>
          <p>Nous vous aidons à connecter tous vos périphériques au réseau de manière efficace et sécurisée. Nos solutions permettent d’isoler certaines zones ou de segmenter virtuellement votre réseau pour une meilleure gestion et une sécurité renforcée.</p>
          <p>En tant qu’experts, nous vous accompagnons pour que votre infrastructure réseau vous offre une expérience utilisateur fluide et répond à vos exigences.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MaterielPage',
};
</script>

<style scoped>
.materiel-page {
  padding-top: 120px; /* Prevent overlap with the navbar */
  font-family: 'Roboto', sans-serif;
  color: #333;
  line-height: 1.6;
}

.section-materiel, .section-peripheriques, .section-reseau {
  padding: 2rem;
  background-color: #f7f7f7;
}

.section-materiel h1, .section-solutions h2, .section-peripheriques h2, .section-reseau h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.section-solutions, .section-connexion {
  padding: 2rem;
  background-color: #fff;
}

.section-solutions .content, .section-connexion .content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.section-solutions .image, .section-connexion .image {
  flex: 1;
  padding: 1rem;
}

.section-solutions .text, .section-connexion .text {
  flex: 2;
  padding: 1rem;
}

.section-solutions img, .section-connexion img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.banner-reseau {
  padding: 2rem;
  text-align: center;
  background-color: #e0f7fa;
}

.banner-reseau h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}
</style>
