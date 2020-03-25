<template>
  <div>
    <div class="main">
      <div class="content">
        <div class="text">
          <h1>
            Юридическое бюро
            <br />“Совет”
          </h1>
          <p class="big-text">Квалифицированная юридическая помощь</p>
        </div>
        <div class="buttons big-text">
          <sovetButton text="Заказать звонок" type="light" />
          <sovetButton text="Узнать больше" type="dark light-border" />
        </div>
      </div>
    </div>

    <about />

    <services />

    <guarantees />

    <div class="form">
      <div class="content">
        <div class="left">
          <h2>Остались вопросы?</h2>
          <p>Заполните форму и мы вам перезвоним</p>
        </div>
        <div class="right">
          <sovetInput placeholder="Имя" type="w-100" />
          <sovetInput placeholder="Телефон" type="w-100" />
          <sovetButton type="dark w-100" text="Заказать звонок" />
        </div>
      </div>
    </div>

    <contacts />

  </div>
</template>

<script>
import services from '@/components/blocks/services.vue'
import guarantees from '@/components/blocks/guarantees.vue'
import contacts from '@/components/blocks/contacts.vue'
import about from '@/components/blocks/about.vue'

export default {
  components: {
    services,
    guarantees,
    contacts,
    about
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-image: url("~assets/img/bg/main.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  height: calc(100vh - 5.5rem);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    .text {
      text-align: center;
      margin-bottom: 2rem;
      p {
        color: $lightGray;
      }
      h1 {
        color: white;
        margin-bottom: 1rem;
      }
    }
    .buttons {
      display: flex;
      justify-content: space-between;
      width: 23rem;
    }
  }
}

.form {
  background-image: url("~assets/img/bg/main.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  padding: 5rem 3rem;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-right: -3rem;
    h2, p {
      color: white;
    }
    h2 {
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 2rem;
    }
    .left {
      margin-right: 3rem;
    }
    .right {
      margin-right: 3rem;
      width: 20rem;
    }
  }
}
</style>
