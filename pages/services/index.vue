<template>
  <div>
    <services :slogan="generalInfo.servicesSlogan" />
  </div>
</template>

<script>
import services from '@/components/blocks/services.vue'

export default {
    async asyncData({ $axios, params }) {
    try {
      let ans = await $axios.$get(`/generalInfo/`);
      let generalInfo = ans[0]
      return { generalInfo };
    } catch (e) {
      return { generalInfo: {} };
    }
  },
  data: () => ({
    generalInfo: {}
  }),
  components: {
    services
  }
}
</script>
