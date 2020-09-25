<template>
  <div>
    <contacts :generalInfo="generalInfo" />
  </div>
</template>

<script>
import contacts from "@/components/blocks/contacts";

export default {
  async asyncData({ $axios, params }) {
    try {
      let ans = await $axios.$get(`/generalInfo/`);
      let generalInfo = ans[0];
      return { generalInfo };
    } catch (e) {
      return { generalInfo: {} };
    }
  },
  data: () => ({
    generalInfo: {}
  }),
  components: {
    contacts,
  },
};
</script>
