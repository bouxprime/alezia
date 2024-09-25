<template>
  <section class="connectivite">
    <div class="content">
      <div class="image">
        <img src="path/to/your/image1.jpg" alt="Connectivité">
      </div>
      <div class="next-image-placeholder">
        <div class="placeholder">
          Prochaine image
        </div>
      </div>
      <div class="text">
        <h2>Profiter d’une connectivité d’entreprise stable</h2>
        <p>Profiter d’une connectivité d’entreprise stable, ultra performante et sécurisée tout en maîtrisant ses coûts est un véritable défi pour une grande partie des sociétés, surtout lorsqu’on prend en compte l’augmentation exponentielle des services IT disponibles et des données échangées.</p>
        <p>Avec ALEZIA, expert en services managés à la carte, trouver cet équilibre parfait ne relève plus de l’impossible.</p>
        <p>Infogérance totale ou partielle, nous avons la solution qui correspond à vos besoins et vos systèmes d’information. Que vous décidiez d’opter pour des services spécifiques, ou bien pour une offre complète d’infogérance, de la conception à la maintenance, ALEZIA met en place le service le plus adapté à votre cahier des charges sur la base d’un audit pointu et d’une compréhension profonde de vos défis actuels.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ConnectivitySection'
};
</script>

<style scoped>
.connectivite {
  padding: 2rem;
  background-color: #f9f9f9;
}

.connectivite .content {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.connectivite .image {
  flex: 1;
  padding: 1rem;
}

.connectivite .next-image-placeholder {
  flex: 1;
  padding: 1rem;
}

.connectivite .text {
  flex: 2;
  padding: 1rem;
}

.connectivite img {
  max-width: 100%;
  height: auto;
  border-radius: 10px;
}

.connectivite .placeholder {
  width: 100%;
  height: 200px; /* Ajuste la hauteur selon tes besoins */
  background-color: #e0e0e0;
  border: 2px dashed #b0b0b0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: #707070;
}
</style>
