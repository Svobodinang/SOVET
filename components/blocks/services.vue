<template>
  <div class="services">
    <h1>Услуги</h1>
    <p>{{ slogan }}</p>
    <div class="cards">
      <div
        class="card"
        v-for="block in serviceBlocks"
        :key="block.id"
        :style="{'background-image': `url(${block.picture})`}"
      >
        <h3>{{ block.title }}</h3>
        <sovetButton
          text="Больше"
          @click="openService(block)"
          type="dark light-border hover-light"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["slogan", "serviceBlocks"],
  methods: {
    openService(block) {
      if (block.title === 'Детективные услуги')
        window.open(block.pageName, "_blank");
      else
        this.$router.push(`/services/${block.pageName}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.services {
  padding: 2rem 3rem;
  padding-bottom: 1rem;
  h1,
  p {
    text-align: center;
    color: $darkGray;
  }
  h1 {
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
  }
  .cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .card {
      width: 12rem;
      height: 12rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 5rem 1rem 2rem 1rem;
      background-position: center center;
      background-repeat: no-repeat;
      margin-bottom: 2rem;
      box-shadow: 3px 3px 4px #938b8b;
      h3 {
        text-align: center;
        color: $lightGray;
      }
    }
  }
}
</style>
