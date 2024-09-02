<template>
  <div class="x-bees-page">
    <XBeesIntro />
    <FonctionnalitésClefs />
    <FonctionnalitésAvancées />
    <IntégrationCRM />
    <VideoSection />
  </div>
</template>

<script>
import XBeesIntro from '@/components/x-bees/XBeesIntro.vue';
import FonctionnalitésClefs from '@/components/x-bees/FonctionnalitésClefs.vue';
import IntégrationCRM from '@/components/x-bees/IntégrationCRM.vue';
import VideoSection from '@/components/x-bees/VideoSection.vue';

export default {
  name: 'XBeesPage',
  components: {
    XBeesIntro,
    FonctionnalitésClefs,
    IntégrationCRM,
    VideoSection,
  },
};
</script>

<style scoped>
.x-bees-page {
  padding-top: 120px;
  font-family: 'Roboto', sans-serif;
  color: #333;
  line-height: 1.6;
}
</style>
