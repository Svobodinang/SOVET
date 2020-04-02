<template>
  <div class="services">
    <h1>Услуги</h1>
    <p>Мы предоставляем полный спектр юридических услуг</p>
    <div class="cards">
      <div class="card legal">
        <h3>Юридическим лицам</h3>
        <sovetButton text="Больше" @click="openService('legal')" type="dark light-border hover-light" />
      </div>
      <div class="card individuals">
        <h3>Физическим лицам</h3>
        <sovetButton text="Больше" @click="openService('individuals')" type="dark light-border hover-light" />
      </div>
      <div class="card expertise">
        <h3>Независимая правовая экспертиза</h3>
        <sovetButton text="Больше" @click="openService('expertise')" type="dark light-border hover-light" />
      </div>
      <div class="card detective">
        <h3>Детективные услуги</h3>
        <sovetButton text="Больше" type="dark light-border hover-light" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openService (serviceType) {
      this.$router.push(`/services/${serviceType}`)
    }
  }
}
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
      box-shadow: 3px 3px 4px #938B8B;
      h3 {
        text-align: center;
        color: $lightGray;
      }
      &.legal {
        background-image: url("~assets/img/bg/services/legal.jpg");
      }
      &.individuals {
        background-image: url("~assets/img/bg/services/individuals.jpg");
      }
      &.expertise {
        background-image: url("~assets/img/bg/services/expertise.jpg");
      }
      &.detective {
        background-image: url("~assets/img/bg/services/detective.jpg");
      }
    }
  }
}
</style>
