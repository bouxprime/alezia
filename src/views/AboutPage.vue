<template>
  <div class="about-page-container">
    <AboutSection />
    <InfoSection />
    <CarrouselAbout />
    <SpacingSection height="100vh" />
  </div>
</template>

<script>
import AboutSection from '@/components/about/AboutSection.vue';
import SpacingSection from '@/components/utilities/SpacingSection.vue';
import InfoSection from '@/components/about/InfoSection.vue';
import CarrouselAbout from '@/components/about/CarrouselAbout.vue';

export default {
  name: 'AboutPage',
  components: {
    AboutSection,
    SpacingSection,
    InfoSection,
    CarrouselAbout
  }
}
</script>

<style scoped>
.about-page-container {
  background-color: #F7FAFF;
  min-height: 100vh; /* Ensure it covers the full height of the viewport */
}
</style>
