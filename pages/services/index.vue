<template>
  <div>
    <services :slogan="generalInfo.servicesSlogan" :serviceBlocks="serviceBlocks" />
  </div>
</template>

<script>
import services from '@/components/blocks/services.vue'

export default {
  async asyncData({ $axios, params }) {
    try {
      let ans = await $axios.$get(`/generalInfo/`);
      let generalInfo = ans[0]
      let serviceBlocks = await $axios.$get('/ServiceBlock/')
      return { generalInfo, serviceBlocks };
    } catch (e) {
      return { generalInfo: {}, serviceBlocks: {} };
    }
  },
  data: () => ({
    generalInfo: {},
    serviceBlocks: {}
  }),
  components: {
    services
  }
}
</script>
