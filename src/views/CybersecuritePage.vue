<template>
  <div class="cybersecurite-page">
    <CybersecuriteIntro />
    <CybersecuriteServices />
    <CybersecuriteAudit />
    <CybersecuriteMenaces />
  </div>
</template>

<script>
import CybersecuriteIntro from '@/components/cybersecu/CybersecuriteIntro.vue';
import CybersecuriteServices from '@/components/cybersecu/CybersecuriteServices.vue';
import CybersecuriteAudit from '@/components/cybersecu/CybersecuriteAudit.vue';
import CybersecuriteMenaces from '@/components/cybersecu/CybersecuriteMenaces.vue';

export default {
  components: {
    CybersecuriteIntro,
    CybersecuriteServices,
    CybersecuriteAudit,
    CybersecuriteMenaces,
  },
};
</script>

<style scoped>
.cybersecurite-page {
  padding-top: 120px;
  font-family: 'Roboto', sans-serif;
  color: #333;
  line-height: 1.6;
}
</style>
