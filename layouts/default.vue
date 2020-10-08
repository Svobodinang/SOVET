<template>
  <div>
    <loading :done="done" />

    <div>
      <topMenu :generalInfo=generalInfo />
      <main>
        <nuxt />
      </main>
      <bottom />
    </div>
  </div>
</template>

<script>
import topMenu from "@/components/topMenu.vue";
import bottom from "@/components/footer.vue";
import loading from "@/components/loading";

export default {
  data: () => ({
    done: false,
    generalInfo: {}
  }),
  async beforeMount() {
    let ans = await this.$axios.$get(`/generalInfo/`)
    this.generalInfo = ans[0]
  },
  mounted() {
    setTimeout(() => {
      this.done = true;
    }, 1000);
  },
  components: {
    topMenu,
    bottom,
    loading,
  },
};
</script>

<style>
</style>
