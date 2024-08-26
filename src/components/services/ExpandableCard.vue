<template>
  <div class="expandable-card-services">
    <div class="card-header-services" @click="toggle">
      <h3>{{ title }}</h3>
      <span class="toggle-icon-services">{{ isOpen ? '-' : '+' }}</span>
    </div>
    <transition name="expand">
      <div v-show="isOpen" class="card-content-services">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ExpandableCard',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scoped>
.expandable-card-services {
  background-color: #F7FAFF;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  padding-top: 20px;
  padding-bottom: 20px;
}

.card-header-services {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  background-color: #F7FAFF;
  border-bottom: 1px solid #ddd;
  transition: border-bottom 0.3s ease;
}

.card-header-services h3 {
  margin: 0;
  font-size: 1.5em;
}

.toggle-icon-services {
  font-size: 1.5em;
}

.card-content-services {
  padding: 1em;
  border-bottom: 1px solid #ddd;
  overflow: hidden;
  padding-bottom: 20px;
}

.expand-enter, .expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to, .expand-leave {
  max-height: 1000px;
  opacity: 1;
}
</style>
