<template>
  <div>
    <loading :done="done" />
    <div>
      <topMenu />
      <main>
        <nuxt />
      </main>
      <bottom />
    </div>
  </div>
</template>

<script>
import topMenu from '@/components/topMenu.vue'
import bottom from '@/components/footer.vue'
import loading from '@/components/loading'

export default {
  components: {
    topMenu,
    bottom,
    loading
  },
  data: () => ({
    done: false
  }),
  mounted () {
    setTimeout(() => {
      this.done = true
    }, 1000)
  }
}
</script>

<style>
</style>
