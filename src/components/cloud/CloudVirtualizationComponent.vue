<template>
  <section class="virtualization">
    <h2 class="virtualization-title">{{ mainTitle }}</h2>
    <div class="content">
      <div class="image">
        <!-- Utilisation de l'image avec la taille ajustée -->
        <img src="@/assets/tom1.png" alt="Virtualisation Image" />
      </div>
      <div class="text">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CloudVirtualizationComponent',
  props: {
    mainTitle: {
      type: String,
      default: 'Avec le Cloud, découvrez un monde de possibilités'
    },
    imageSrc: {
      type: String,
      default: '@/assets/tom1.png'
    },
    imageAlt: {
      type: String,
      default: 'Virtualisation'
    },
    title: {
      type: String,
      default: 'Virtualisation de vos machines'
    },
    description: {
      type: String,
      default: "La virtualisation de votre serveur permet d’ajuster facilement les ressources et de sauvegarder ou restaurer rapidement l’ensemble de votre système. Hébergée dans un DataCenter sécurisé, votre machine virtuelle bénéficie d’une haute disponibilité grâce à du matériel redondant, à une connectivité internet fiable, et à des sauvegardes quotidiennes. Même en cas de panne internet au bureau, vous pouvez accéder à vos données depuis chez vous ou à l'étranger, avec une sécurité renforcée grâce à l'authentification à deux facteurs."
    }
  }
};
</script>

<style scoped>
.virtualization {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #f7f7f7;
}

/* Centrage horizontal du texte et de l'image */
.virtualization .content {
  display: flex;
  justify-content: center; /* Centre l'image et le texte horizontalement */
  align-items: center;
  gap: 2rem;
  max-width: 1000px; /* Ajuste la largeur maximale de la section */
  margin: 0 auto; /* Centre la section dans la page */
}

.virtualization-title {
  font-size: 2rem;
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
}

/* Réduction de la taille de l'image et centrage */
.virtualization .image {
  flex-shrink: 0;
  width: 250px; /* Réduit la taille de l'image */
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.virtualization .image img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.virtualization .text {
  flex: 1;
  text-align: left;
}

.virtualization h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.virtualization p {
  font-size: 1rem;
  line-height: 1.4;
  margin: 0;
}
</style>
