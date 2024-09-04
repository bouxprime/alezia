<template>
  <div class="cloud-page">
    <!-- Section principale : Le Cloud -->
    <section class="cloud-hero">
      <div class="hero-content">
        <h1>Le Cloud</h1>
        <p>
          Intégré au paysage entrepreneurial depuis quelques années, le Cloud propose une vaste gamme de services et ouvre aux entreprises un éventail infini de possibilités.
        </p>
        <p>
          Dans ce contexte, ALESIA permet à ses clients de saisir ces opportunités tout en hébergeant leurs données dans un datacenter situé en Belgique.
        </p>
      </div>
    </section>

    <!-- Bannière : Pourquoi avoir recours au Cloud ? -->
    <section class="banner why-cloud">
      <h2>Pourquoi avoir recours au Cloud ?</h2>
      <CloudFeatureComponent />
    </section>

    <!-- Bannière : Avec le Cloud, découvrez un monde de possibilités -->
    <section class="banner discover">
      <h2>Avec le Cloud, découvrez un monde de possibilités</h2>
    </section>

    <!-- Section Virtualisation -->
    <CloudVirtualizationComponent 
      imageSrc="path/to/your/tom1.png"
      imageAlt="Virtualisation Image"
      title="Virtualisation de vos machines"
      description="La virtualisation de votre serveur permet d’ajuster facilement les ressources et de sauvegarder ou restaurer rapidement l’ensemble de votre système. Hébergée dans un DataCenter sécurisé, votre machine virtuelle bénéficie d’une haute disponibilité grâce à du matériel redondant, à une connectivité internet fiable, et à des sauvegardes quotidiennes. Même en cas de panne internet au bureau, vous pouvez accéder à vos données depuis chez vous ou à l'étranger, avec une sécurité renforcée grâce à l'authentification à deux facteurs."
    />

    <!-- Section Avantages & Accessibilité -->
    <section class="advantages">
      <div class="feature">
        <h3>Les avantages</h3>
        <p>
          Votre serveur virtualisé offre la flexibilité d'ajuster les ressources et de restaurer rapidement le système.
          Il est accessible depuis divers appareils, garantissant une flexibilité maximale, que vous utilisiez un PC, un Mac, une tablette ou un smartphone.
        </p>
      </div>
      <div class="feature">
        <h3>Accessibilité & Sauvegarde</h3>
        <p>
          Un serveur cloud permet à tous vos collaborateurs d’accéder aux programmes, peu importe leur emplacement.
          Nous répliquons vos données dans un autre DataCenter belge et proposons des sauvegardes sur 14 jours, extensibles jusqu'à 13 mois.
          Un espace de stockage supplémentaire est disponible selon vos besoins, et l'interface Veeam Enterprise Manager vous permet de gérer et restaurer vos fichiers en toute autonomie.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import CloudFeatureComponent from '@/components/cloud/CloudFeatureComponent.vue';
import CloudVirtualizationComponent from '@/components/cloud/CloudVirtualizationComponent.vue';

export default {
  name: 'CloudPage',
  components: {
    CloudFeatureComponent,
    CloudVirtualizationComponent
  }
};
</script>

<style scoped>
.cloud-page {
  font-family: 'Roboto', sans-serif;
  color: #333;
  line-height: 1.6;
  padding-top: 120px; /* Pour éviter que la navbar ne chevauche le contenu */
}

/* Section Héro "Le Cloud" */
.cloud-hero {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50vh;
  background-color: #f7f7f7;
}

.hero-content {
  text-align: center;
  max-width: 600px;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.hero-content p {
  margin-bottom: 1rem;
  font-size: 1.125rem;
  line-height: 1.6;
}

/* Bannière */
.banner {
  padding: 2rem;
  text-align: center;
  background-color: #e0f7fa;
}

.banner h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* Virtualisation */
.virtualization {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
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

/* Section Avantages */
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
