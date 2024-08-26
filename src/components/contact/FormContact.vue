<template>
  <div class="contact-container">
    <div class="contact-left">
      <h2>Alezia</h2>
      <h1>Solutions Innovantes pour Votre Entreprise</h1>
      <ul>
        <li>Nous offrons des solutions informatiques adaptées à vos besoins.</li>
        <li>Expertise en téléphonie VoIP avec les technologies les plus avancées.</li>
        <li>Services personnalisés pour optimiser votre infrastructure IT.</li>
        <li>Support et maintenance pour assurer la continuité de vos opérations.</li>
      </ul>
    </div>
    <div class="contact-right">
      <div class="form-wrapper">
        <form @submit.prevent="submitForm">
          <div class="contact-form-group">
            <label for="name">Nom</label>
            <input type="text" id="name" v-model="form.name" required />
          </div>
          <div class="contact-form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>
          <div class="contact-form-group">
            <label for="budget">Taille du budget</label>
            <select id="budget" v-model="form.budget" required>
              <option disabled value="">Veuillez sélectionner une option</option>
              <option value="small">Petit</option>
              <option value="medium">Moyen</option>
              <option value="large">Grand</option>
            </select>
          </div>
          <div class="contact-form-group">
            <label for="description">Description</label>
            <textarea id="description" v-model="form.description" required></textarea>
          </div>
          <div class="contact-form-group">
            <label for="source">Comment avez-vous entendu parler de nous ?</label>
            <input type="text" id="source" v-model="form.source" />
          </div>
          <button type="submit" class="submit-button">SOUMETTRE</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        budget: '',
        description: '',
        source: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log(this.form);
      // Handle form submission logic here
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}

.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  background-color: #F7FAFF;
  padding: 40px;
  min-height: calc(100vh - 200px);
}

.contact-left {
  width: 45%;
  margin-right: 5%;
}

.contact-right {
  width: 45%;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

h2 {
  font-size: 36px; /* Increase font size */
  text-align: left; /* Align text to the left */
  margin-bottom: 40px; /* Space below the heading */
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

li::before {
  content: '✔️';
  margin-right: 10px;
  color: #3498db;
}

.form-wrapper {
  background-color: #FFFFFF;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Optional: Add shadow for better visibility */
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.contact-form-group {
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
select,
textarea {
  width: 100%;
  padding: 15px; /* Increase padding for more height */
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #FFFFFF;
}

textarea {
  height: 120px; /* Specific height for textarea */
}

button.submit-button {
  padding: 10px 20px; /* Adjust padding for the button */
  border: 2px solid #1e90ff; /* Blue border */
  border-radius: 50px;
  color: white; /* White text color */
  text-decoration: none;
  font-weight: bold;
  background-color: #1e90ff; /* Blue background */
  transition: background-color 0.3s, color 0.3s; /* Smooth transition */
  font-size: 1.2em; /* Keep font size slightly larger for the contact button */
  font-family: 'Poppins', sans-serif; /* Apply the new font */
  align-self: flex-start; /* Align the button to the left */
  margin-top: 10px; /* Add a bit of space above the button */
}

button.submit-button:hover {
  background-color: transparent; /* Transparent background on hover */
  color: #1e90ff; /* Blue text color on hover */
}

@media (max-width: 1024px) {
  .contact-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .contact-left,
  .contact-right {
    width: 100%;
    margin-right: 0;
  }

  .contact-left {
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  h1 {
    font-size: 26px; /* Increase font size for smaller screens */
  }

  h2 {
    font-size: 40px; /* Increase font size for smaller screens */
  }

  ul {
    font-size: 18px; /* Increase list font size */
  }

  button.submit-button {
    font-size: 1.4em; /* Increase button font size */
  }

  .form-wrapper {
    padding: 40px; /* Increase padding for smaller screens */
  }

  input[type="text"],
  input[type="email"],
  select,
  textarea {
    padding: 20px; /* Increase padding for smaller screens */
  }
}

@media (max-width: 480px) {
  h1 {
    font-size: 28px; /* Further increase font size */
  }

  h2 {
    font-size: 44px; /* Further increase font size */
  }

  ul {
    font-size: 20px; /* Further increase list font size */
  }

  .form-wrapper {
    padding: 50px; /* Further increase padding */
  }

  input[type="text"],
  input[type="email"],
  select,
  textarea {
    padding: 25px; /* Further increase padding */
  }

  button.submit-button {
    font-size: 1.6em; /* Further increase button font size */
  }
}
</style>
