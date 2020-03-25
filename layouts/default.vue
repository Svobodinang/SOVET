<template>
  <div>
    <topMenu />
    <main>
      <nuxt />
    </main>
    <bottom />
  </div>
</template>

<script>
import topMenu from '@/components/topMenu.vue'
import bottom from '@/components/footer.vue'

export default {
  components: {
    topMenu,
    bottom
  }
}
</script>

<style>
</style>
