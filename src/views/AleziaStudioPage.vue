<template>
  <div class="alezia-studio-page">
    <!-- Brève Explication -->
    <section class="hero">
      <h1>Alezia Studio</h1>
      <p>Alezia Studio vous permet de configurer facilement la messagerie vocale de votre entreprise. Sélectionnez une voix, choisissez une musique d'attente, et personnalisez les messages pour vos clients. Recevez ensuite votre configuration par mail, prête à être intégrée dans votre système de téléphonie.</p>
    </section>

    <!-- Formulaire de Configuration -->
    <section class="configuration-form">
      <h2>Configurer votre messagerie vocale</h2>
      <form @submit.prevent="submitForm">
        <!-- Sélection de la Voix -->
        <div class="form-group">
          <label for="voice">Sélectionnez une voix :</label>
          <select id="voice" v-model="form.voice">
            <option value="voix_femme_1">Voix Femme 1</option>
            <option value="voix_homme_1">Voix Homme 1</option>
            <option value="voix_femme_2">Voix Femme 2</option>
            <option value="voix_homme_2">Voix Homme 2</option>
            <!-- Ajouter d'autres options selon besoin -->
          </select>
        </div>

        <!-- Sélection de la Musique d'Attente -->
        <div class="form-group">
          <label for="music">Sélectionnez une musique d'attente :</label>
          <select id="music" v-model="form.music">
            <option value="musique_classique">Musique Classique</option>
            <option value="musique_jazz">Musique Jazz</option>
            <option value="musique_pop">Musique Pop</option>
            <option value="musique_electronique">Musique Électronique</option>
            <!-- Ajouter d'autres options selon besoin -->
          </select>
        </div>

        <!-- Message Prédécroché -->
        <div class="form-group">
          <label for="pred">Message Prédécroché :</label>
          <textarea id="pred" v-model="form.predMessage" placeholder="Entrez votre message ici..."></textarea>
        </div>

        <!-- Message Attente Musicale -->
        <div class="form-group">
          <label for="attente">Message d'Attente Musicale :</label>
          <textarea id="attente" v-model="form.attenteMessage" placeholder="Entrez votre message ici..."></textarea>
        </div>

        <!-- Message Répondeur -->
        <div class="form-group">
          <label for="rep">Message Répondeur :</label>
          <textarea id="rep" v-model="form.repMessage" placeholder="Entrez votre message ici..."></textarea>
        </div>

        <!-- Soumettre le formulaire -->
        <button type="submit" class="submit-button">Envoyer ma configuration</button>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AleziaStudioPage',
  data() {
    return {
      form: {
        voice: '',
        music: '',
        predMessage: '',
        attenteMessage: '',
        repMessage: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Simulation de l'envoi du formulaire
      console.log('Formulaire envoyé:', this.form);
      alert('Votre configuration a été envoyée avec succès.');
      // Ici, vous pouvez ajouter le code pour envoyer le formulaire par email
    }
  }
};
</script>

<style scoped>
.alezia-studio-page {
  padding-top: 120px; /* Prevent overlap with the navbar */
  font-family: 'Roboto', sans-serif;
  color: #333;
  line-height: 1.6;
}

.hero {
  text-align: center;
  padding: 14rem 2rem 2rem;
  background-color: #f7f7f7;
  padding-bottom: 8rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.configuration-form {
  padding: 2rem;
  background-color: #fff;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.configuration-form h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.form-group select, 
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 1rem;
  background-color: #007BFF;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
