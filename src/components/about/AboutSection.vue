<template>
  <div class="about-section">
    <div class="left-content">
      <h2>À propos d'Alezia</h2>
      <p>Notre Approche Structurée Pour le Développement de Solutions Technologiques</p>
      <div class="image-text-container">
        <img src="@/assets/about1.png" alt="Product Image" class="product-image" />
        <div class="right-content">
          <h3>Qu'est-ce que l'Alezia Process ?</h3>
          <p>Le Processus Alezia est une méthodologie structurée, conçue pour garantir le succès de vos projets technologiques. Nous commençons par une session intensive avec nos experts en produit et anciens fondateurs de startups, où nous explorons votre vision technologique sous un angle commercial. Ensuite, nous établissons une liste détaillée des fonctionnalités essentielles pour votre produit minimal viable, assurant que vous avez tout ce qu'il faut pour réussir sur le marché.</p>
        </div>
      </div>
    </div>
    <img src="@/assets/test1.png" alt="Product Process" class="background-image" />
  </div>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.about-section {
  display: flex;
  flex-direction: column;
  color: #000;
  font-family: 'Poppins', serif;
  padding: 10em 4em 4em 12em;
  position: relative;
  z-index: 1;
}

.left-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  margin-right: 2em;
  z-index: 2;
}

.image-text-container {
  display: flex;
  margin-top: 2em;
  z-index: 2;
  flex-wrap: wrap;
}

.product-image {
  width: 450px;
  height: auto;
  margin-right: 2em;
  z-index: 2;
}

.background-image {
  position: absolute;
  top: 60%;
  right: 0;
  transform: translateY(-50%);
  height: 80%;
  z-index: 0;
}

.right-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  z-index: 2;
}

h2 {
  font-weight: 700;
  font-size: 2.5em;
  margin-bottom: 0.5em;
  z-index: 2;
}

h3 {
  font-weight: 700;
  font-size: 1.5em;
  margin-bottom: 0.5em;
  z-index: 2;
}

p {
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 1em;
  max-width: 600px;
  z-index: 2;
}

@media (max-width: 1024px) {
  .about-section {
    padding: 5em 2em 2em 6em;
  }
  
  .product-image {
    width: 350px;
  }
  
  h2 {
    font-size: 2.2em;
  }
  
  h3 {
    font-size: 1.8em;
  }
  
  p {
    font-size: 1.2em;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 3em 1em 1em 3em;
  }
  
  .image-text-container {
    flex-direction: column;
    align-items: center;
  }
  
  .product-image {
    width: 100%;
    margin-right: 0;
    margin-bottom: 1em;
  }
  
  .background-image {
    display: none;
  }
  
  h2 {
    font-size: 2.5em;
  }
  
  h3 {
    font-size: 2em;
  }
  
  p {
    font-size: 1.5em;
  }
}
</style>
