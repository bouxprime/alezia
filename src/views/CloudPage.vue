<template>
  <div class="cloud-page">
    <!-- Section principale : Le Cloud -->
    <CloudHeroComponent />

    <!-- Bannière : Pourquoi avoir recours au Cloud ? -->
    <section class="banner why-cloud">
      <h2>Pourquoi avoir recours au Cloud ?</h2>
      <CloudFeatureComponent />
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
      <!-- Card pour Les avantages -->
      <div class="feature">
        <h3 class="feature-title">Les avantages</h3> <!-- Titre en bleu -->
        <p>
          Votre serveur virtualisé offre la flexibilité d'ajuster les ressources et de restaurer rapidement le système.
          Il est accessible depuis divers appareils, garantissant une flexibilité maximale, que vous utilisiez un PC, un Mac, une tablette ou un smartphone.
        </p>
      </div>
      
      <!-- Card pour Accessibilité & Sauvegarde -->
      <div class="feature">
        <h3 class="feature-title">Accessibilité & Sauvegarde</h3> <!-- Titre en bleu -->
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
import CloudHeroComponent from '@/components/cloud/CloudHeroComponent.vue';
import CloudFeatureComponent from '@/components/cloud/CloudFeatureComponent.vue';
import CloudVirtualizationComponent from '@/components/cloud/CloudVirtualizationComponent.vue';

export default {
  name: 'CloudPage',
  components: {
    CloudHeroComponent,
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
  background-color: white;
  padding: 0;
  margin: 0;
}

/* Bannière */
.banner {
  padding: 2rem;
  text-align: center;
  background-color: white;
}

.banner h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* Virtualisation */
.virtualization {
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #f7f7f7;
}

/* Section Avantages */
.advantages {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2rem;
  background-color: white;
}

.advantages .feature {
  flex: 1 1 200px;
  margin: 1rem;
  background-color: #fff;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* Style pour les titres des cards (Les avantages et Accessibilité & Sauvegarde) */
.feature-title {
  color: #1e90ff; /* Titre en bleu */
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
</style>
