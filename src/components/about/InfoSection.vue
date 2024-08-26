<template>
  <div class="container-services">
    <div class="text-container">
      <h2>Chez Alezia, nous sommes comme cela.</h2>
      <p>Notre ADN est constitué de fondateurs de startups et des meilleurs talents en produit, UX/UI, développement logiciel et apprentissage automatique. Nous nous sommes réunis avec une vision unique : adopter une approche centrée sur l'utilisateur pour l'innovation produit et le développement logiciel en comprenant pleinement les besoins commerciaux avant de créer quoi que ce soit.</p>
      <button class="cta-button">VOIR NOS RÉALISATIONS</button>
    </div>
    <div class="image-container">
      <img :src="require('@/assets/tom1.png')" alt="Équipe Alezia" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageWithText'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.container-services {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Adjusted to space-between for better spacing */
  width: 100%;
  font-family: 'Poppins', sans-serif;
  background-color: #FFFFFF;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap; /* Added for wrapping on smaller screens */
}

.text-container {
  flex: 1;
  max-width: 50%;
  margin-left: 40px; /* Added margin to move text more to the right */
}

.text-container h2 {
  font-weight: 700;
  font-size: 2.5em; /* Match the previous section */
  margin-bottom: 0.5em;
}

.text-container p {
  font-size: 1em; /* Match the previous section */
  line-height: 1.6;
  margin-bottom: 1em;
  max-width: 600px;
}

.cta-button {
  margin-top: 20px;
  padding: 0.5em 2em; /* Same padding as contact button */
  border: 2px solid #1e90ff; /* Same border as contact button */
  border-radius: 50px; /* Same border-radius as contact button */
  color: white; /* Same text color as contact button */
  text-decoration: none; /* Same text decoration as contact button */
  font-weight: bold; /* Same font weight as contact button */
  background-color: #1e90ff; /* Same background color as contact button */
  transition: background-color 0.3s, color 0.3s; /* Same transition as contact button */
  font-size: 1.2em; /* Same font size as contact button */
  font-family: 'Poppins', sans-serif; /* Same font family as contact button */
  cursor: pointer;
}

.cta-button:hover {
  background-color: transparent;
  color: #1e90ff;
}

.image-container {
  flex: 1;
  max-width: 40%;
  display: flex;
  justify-content: flex-end; /* Changed to flex-end to align image to the right */
  margin-left: 40px; /* Added margin to move image more to the right */
}

.image-container img {
  width: 80%;
  height: auto;
  border-radius: 5px;
}

@media (max-width: 1024px) {
  .container-services {
    flex-direction: column;
    align-items: center;
    padding: 40px 20px; /* Adjusted padding for medium screens */
  }

  .text-container {
    max-width: 100%;
    margin-left: 0;
    text-align: center;
  }

  .image-container {
    max-width: 100%;
    margin-left: 0;
    justify-content: center;
    margin-top: 20px; /* Added margin to separate image from text */
  }

  .image-container img {
    width: 60%; /* Adjust image size for medium screens */
  }
}

@media (max-width: 768px) {
  .container-services {
    padding: 20px 10px; /* Further reduce padding for small screens */
  }

  .text-container p {
    font-size: 1.2em; /* Increase font size for small screens to match previous section */
  }

  .cta-button {
    font-size: 18px; /* Increase button font size for small screens */
  }

  .image-container img {
    width: 70%; /* Adjust image size for small screens */
  }
}

@media (max-width: 480px) {
  .text-container p {
    font-size: 1.5em; /* Further increase font size for very small screens to match previous section */
  }

  .cta-button {
    font-size: 20px; /* Further increase button font size for very small screens */
  }

  .image-container img {
    width: 80%; /* Adjust image size for very small screens */
  }
}
</style>
