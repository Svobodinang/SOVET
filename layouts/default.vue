<template>
  <div>
    <topMenu />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import topMenu from '@/components/topMenu.vue'

export default {
  components: {
    topMenu
  }
}
</script>

<style>
</style>
