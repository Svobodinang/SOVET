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

    <div class="about">
      <div class="text">
        <h2>О компании</h2>
        <hr />
        <p>{{about}}</p>
        <div class="social">
          <span>Мы в социальных сетях</span>
          <a href="https://www.facebook.com/sovetpravo/" target="_blank"><img src="~assets/icons/facebook.svg" alt="facebook"></a>
          <a href="https://vk.com/sovetpravo" target="_blank"><img src="~assets/icons/vk.svg" alt="В контакте"></a>
          <a href="https://t.me/DaniilFilatov" target="_blank"><img src="~assets/icons/telegram.svg" alt="telegram"></a>
        </div>
        <sovetButton type="dark" text="Больше" class="big-text" />
      </div>
      <div class="img">
      </div>
    </div>

    <div class="services">
      <h2>Услуги</h2>
      <p>Мы предоставляем полный спектр юридических услуг</p>
      <div class="content">
        <div class="card" v-for="service in services" :key="service.title">
          <card :text="service.title" :imgSrc="service.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import card from '@/components/services/card.vue'

export default {
  data: () => ({
    about:
      'Юридическое бюро «Совет» является сообществом профессиональных юристов и адвокатов имеющих большой практический опыт в юриспруденции.\n\n Наши специалисты имеют опыт работы в государственных учреждениях, правоохранительных органах и судебной системе РФ, что позволяет использовать его с максимальной пользой при решении вопросов наших клиентов.\n\n Мы оказываем квалифицированные юридические услуги физическим лицам и юридическим лицам, охватывающих сегменты малого, среднего и крупного бизнеса.',
    sevices: [
      {
        title: 'Юридическим лицам',
        img: '~assets/img/bg/services/'
      }
    ]
  }),
  components: {
    card
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

.about {
  display: flex;
  justify-content: space-between;
  padding: 3rem;
  position: relative;
  &::before {
    position: absolute;
    z-index: -1;
    content: '';
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: $darkGray;
  }
  .text {
    width: calc(50% - 4rem);
    background: white;
    padding: 1rem 2rem 2rem 2rem;
    margin-right: 2rem;
    min-width: 13rem;
    white-space: pre-wrap;
    hr {
      margin: 0;
    }
    .social {
      display: flex;
      align-items: center;
      span {
        margin-right: 1rem;
      }
      img {
        margin-right: 0.5rem;
      }
    }
  }
  .img {
    width: 50%;
    background-image: url("~assets/img/bg/about.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    // background-attachment: fixed;
  }
}

.services {
  padding: 3rem 2rem;
  h2, p {
    text-align: center;
    color: $darkGray;
    margin-bottom: 1rem;
  }
}
</style>
