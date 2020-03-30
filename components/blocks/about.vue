<template>
  <div class="about">
    <div class="text">
      <h2>О компании</h2>
      <hr />
      <p>{{about}}</p>
      <div class="social">
        <span>Мы в социальных сетях</span>
        <a href="https://www.facebook.com/sovetpravo/" target="_blank">
          <img src="~assets/icons/social/facebook.svg" alt="facebook" />
        </a>
        <a href="https://vk.com/sovetpravo" target="_blank">
          <img src="~assets/icons/social/vk.svg" alt="В контакте" />
        </a>
        <a href="https://t.me/DaniilFilatov" target="_blank">
          <img src="~assets/icons/social/telegram.svg" alt="telegram" />
        </a>
      </div>
      <sovetButton v-if="!inside" type="dark" text="Больше" class="big-text" @click="$router.push('/about')" />
    </div>
    <div class="img"></div>
  </div>
</template>

<script>
export default {
  props: ['inside'],
  data: () => ({
    about:
      'Юридическое бюро «Совет» является сообществом профессиональных юристов и адвокатов имеющих большой практический опыт в юриспруденции.\n\n Наши специалисты имеют опыт работы в государственных учреждениях, правоохранительных органах и судебной системе РФ, что позволяет использовать его с максимальной пользой при решении вопросов наших клиентов.\n\n Мы оказываем квалифицированные юридические услуги физическим лицам и юридическим лицам, охватывающих сегменты малого, среднего и крупного бизнеса.'
  })
}
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 3rem;
  position: relative;
  &::before {
    position: absolute;
    z-index: -1;
    content: "";
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
    min-width: 9rem;
    white-space: pre-wrap;
    hr {
      margin: 0;
    }
    .social {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      span {
        margin-right: 1rem;
        margin-bottom: 0.5rem;
      }
      img {
        margin-right: 0.5rem;
      }
    }
  }
  .img {
    width: calc(50% - 4rem);
    min-height: 10rem;
    min-width: 13rem;
    background-image: url("~assets/img/bg/about.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    // background-attachment: fixed;
  }
}
</style>
