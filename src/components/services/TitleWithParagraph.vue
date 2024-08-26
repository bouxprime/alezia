<template>
  <div class="title-paragraph">
    <h2>Nos Services</h2>
    <p>Chez <strong>Alezia</strong>, nous offrons une gamme complète de services informatiques et de téléphonie VoIP pour soutenir et faire croître votre entreprise. Découvrez comment nos solutions personnalisées peuvent transformer votre infrastructure technologique.</p>
    <img class="side-image" src="@/assets/test2.png" alt="Side Image">
  </div>
</template>

<script>
export default {
  name: 'TitleWithParagraph'
}
</script>

<style scoped>
.title-paragraph {
  font-family: 'Poppins', sans-serif;
  background-color: #F7FAFF;
  text-align: center;
  padding: 250px 10px 100px 10px; /* Ajouté padding inférieur pour espacer des sections suivantes */
  position: relative; /* Pour positionner l'image */
}

h2 {
  font-size: 64px;
  margin: 0;
  padding: 5px;
}

p {
  font-size: 24px;
  margin: 10px auto; /* Centrer horizontalement */
  max-width: 600px; /* Réduire la largeur */
}

.side-image {
  position: absolute;
  right: 0;
  top: 50%; /* Positionnement vertical au centre */
  transform: translateY(-50%);
  width: 200px; /* Taille de l'image ajustée */
}

@media (max-width: 768px) {
  .title-paragraph {
    padding: 150px 10px 50px 10px; /* Ajuster le padding pour les petits écrans */
  }

  h2 {
    font-size: 48px; /* Réduire la taille du titre */
  }

  p {
    font-size: 20px; /* Réduire la taille du texte */
    max-width: 90%; /* Augmenter la largeur maximale pour le texte */
  }

  .side-image {
    display: none; /* Masquer l'image sur les petits écrans */
  }
}

@media (max-width: 480px) {
  .title-paragraph {
    padding: 100px 10px 50px 10px; /* Réduire encore plus le padding pour les très petits écrans */
  }

  h2 {
    font-size: 36px; /* Réduire encore la taille du titre */
  }

  p {
    font-size: 18px; /* Réduire encore la taille du texte */
  }
}
</style>
