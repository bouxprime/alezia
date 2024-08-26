<template>
  <div class="container-services">
    <div class="image-container">
      <img src="@/assets/service1.png" alt="Service Image" />
    </div>
    <div class="text-container">
      <h2>Solutions de Sécurité IT</h2>
      <p>Chez <strong>Alezia</strong>, nous fournissons des solutions de sécurité IT avancées pour protéger vos données sensibles et votre infrastructure contre les menaces potentielles. Faites confiance à notre expertise pour une sécurité inégalée.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageWithText'
}
</script>

<style scoped>
.container-services {
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align content to the right */
  width: 100%; /* Full width of the container */
  font-family: 'Poppins', sans-serif;
  background-color: #F7FAFF;
  padding: 20px;
  padding-bottom: 160px; /* Add more space at the bottom */
  box-sizing: border-box; /* Include padding in width calculation */
}
.image-container {
  flex: 1;
  max-width: 50%; /* Adjust the max-width as needed */
  display: flex;
  justify-content: flex-end; /* Align the image to the right */
}
.image-container img {
  width: 80%; /* Adjust width to control image size */
  height: auto;
}
.text-container {
  flex: 1;
  max-width: 50%; /* Adjust the max-width as needed */
  padding-left: 20px;
}
.text-container h2 {
  margin: 0;
  padding: 5px;
}
.text-container p {
  font-size: 24px;
  margin: 10px 0;
}

@media (max-width: 768px) {
  .container-services {
    flex-direction: column;
    align-items: center;
    padding-bottom: 80px; /* Adjust padding for smaller screens */
  }
  .image-container,
  .text-container {
    max-width: 100%; /* Full width for smaller screens */
    padding-left: 0;
    text-align: center; /* Center text for smaller screens */
  }
  .image-container img {
    width: 60%; /* Adjust image size for smaller screens */
  }
  .text-container h2 {
    font-size: 32px; /* Adjust font size for smaller screens */
  }
  .text-container p {
    font-size: 20px; /* Adjust font size for smaller screens */
  }
}

@media (max-width: 480px) {
  .container-services {
    padding-bottom: 40px; /* Adjust padding for smaller screens */
  }
  .image-container img {
    width: 80%; /* Adjust image size for smaller screens */
  }
  .text-container h2 {
    font-size: 24px; /* Adjust font size for smaller screens */
  }
  .text-container p {
    font-size: 18px; /* Adjust font size for smaller screens */
  }
}
</style>
