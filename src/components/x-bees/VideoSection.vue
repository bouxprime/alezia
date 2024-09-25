<template>
    <section class="video-section">
      <h2>Découvrez X-Bees en vidéo</h2>
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/6bXZX6C4FjM" frameborder="0" allowfullscreen></iframe>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'VideoSection',
  };
  </script>
  
  <style scoped>
  .video-section {
    padding: 2rem;
    background-color: #f7f7f7;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .video-section h2 {
    margin-bottom: 1rem;
  }
  
  .video-container {
    width: 678px; /* Largeur spécifiée dans votre wireframe */
    height: 380px; /* Hauteur approximative selon votre wireframe */
    background-color: #ccc; /* Utiliser une couleur de fond grise pour représenter la vidéo */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .video-container iframe {
    width: 100%;
    height: 100%;
  }
  </style>
  