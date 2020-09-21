<template>
  <div class="guarantees">
    <h2>Мы гарантируем</h2>
    <div class="content">
      <div class="block small-text" v-for="garanty in garanties" :key="garanty.id">
        <img :src="garanty.picture" alt="Конфиденциальность" />
        <br />
        <p>{{garanty.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['garanties']
}
</script>

<style lang="scss" scoped>
.guarantees {
  padding: 3rem;
  background: $lightGray;
  h2 {
    text-align: center;
    margin-bottom: 3rem;
  }
  .content {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-right: -1rem;
    .block {
      display: flex;
      width: 10rem;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      margin-bottom: 2rem;
      margin-right: 1rem;
      img {
        margin-bottom: 1rem;
      }
      p {
        text-align: center;
      }
    }
  }
}
</style>
