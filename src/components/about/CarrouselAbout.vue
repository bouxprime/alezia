<template>
  <div class="about-page-container">
    <h2>Nos meilleurs éléments :</h2>
    <div class="cards-container">
      <div
        v-for="(item, index) in eventBus.items"
        :key="index"
        class="card-item"
        @click="showDetails(item)"
      >
        <div class="card">
          <img :src="item.image" :alt="item.name" />
          <div class="card-info">
            <h3>{{ item.name }}</h3>
            <p>{{ item.role }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="selectedItem" class="popup-overlay" @click="closeDetails">
      <div class="popup-content" @click.stop>
        <div class="popup-header">
          <img :src="selectedItem.image" :alt="selectedItem.name" />
          <div class="popup-info">
            <h3>{{ selectedItem.name }}</h3>
            <p>{{ selectedItem.role }}</p>
          </div>
        </div>
        <div class="popup-description">
          <h4>Description</h4>
          <p>{{ selectedItem.description }}</p>
        </div>
        <div class="popup-extra-info">
          <div class="info-section">
            <h4>Projet Actuel</h4>
            <p>{{ selectedItem.currentProject }}</p>
          </div>
          <div class="info-section">
            <h4>Compétences</h4>
            <p>{{ selectedItem.skills }}</p>
          </div>
          <div class="info-section">
            <h4>Expérience</h4>
            <p>{{ selectedItem.experience }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/eventBus';

export default {
  name: 'CarrouselAbout',
  data() {
    return {
      selectedItem: null,
      eventBus
    };
  },
  methods: {
    showDetails(item) {
      this.selectedItem = item;
    },
    closeDetails() {
      this.selectedItem = null;
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.about-page-container {
  background-color: #F7FAFF;
  min-height: 100vh;
  padding: 40px 20px;
  text-align: center;
  position: relative;
  font-family: 'Poppins', sans-serif;
}

h2 {
  font-weight: 700;
  font-size: 2.5em;
  margin-bottom: 40px;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card-item {
  flex: 0 1 calc(25% - 40px);
  box-sizing: border-box;
  margin: 10px;
  cursor: pointer;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  width: 100%;
  position: relative;
}

.card img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
}

.card-info h3 {
  margin: 10px 0 5px;
  font-size: 1.5em;
}

.card-info p {
  margin: 0 0 10px;
  font-size: 1.2em;
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: white;
  padding: 40px;
  border-radius: 10px;
  max-width: 900px;
  width: 90%;
  display: flex;
  flex-direction: column;
  z-index: 1001;
}

.popup-header {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.popup-header img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
}

.popup-info h3 {
  margin: 0;
  font-size: 2em;
}

.popup-info p {
  margin: 5px 0 0;
  font-size: 1.2em;
}

.popup-description {
  font-size: 1.1em;
  margin-bottom: 20px;
}

.popup-extra-info {
  display: flex;
  justify-content: space-between;
}

.info-section {
  width: 30%;
}

.info-section h4 {
  margin-bottom: 10px;
}

.info-section p {
  margin: 0;
}

@media (max-width: 1024px) {
  .card-item {
    flex: 0 1 calc(33.33% - 40px);
  }

  .popup-content {
    padding: 30px;
  }
}

@media (max-width: 768px) {
  .card-item {
    flex: 0 1 calc(50% - 40px);
  }

  .popup-content {
    padding: 20px;
  }

  .popup-info h3 {
    font-size: 1.8em;
  }

  .popup-info p {
    font-size: 1.1em;
  }

  .popup-description {
    font-size: 1em;
  }

  .info-section {
    width: 45%;
  }
}

@media (max-width: 480px) {
  .card-item {
    flex: 0 1 100%;
  }

  .popup-content {
    padding: 10px;
  }

  .popup-info h3 {
    font-size: 1.5em;
  }

  .popup-info p {
    font-size: 1em;
  }

  .popup-description {
    font-size: 0.9em;
  }

  .info-section {
    width: 100%;
    margin-bottom: 20px;
  }

  .popup-extra-info {
    flex-direction: column;
    align-items: center;
  }
}
</style>
