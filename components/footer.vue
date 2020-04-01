<template>
  <div class="bottom">
    <div class="left">
      <nuxt-link to="/"><img src="~assets/icons/logo/sovet-logo.svg" alt /></nuxt-link>
      <p class="about-sovet">{{about_sovet}}</p>
      <div class="social">
        <a href="https://www.facebook.com/sovetpravo/" target="_blank">
          <img src="~assets/icons/social/facebook-white.svg" alt="facebook" />
        </a>
        <a href="https://vk.com/sovetpravo" target="_blank">
          <img src="~assets/icons/social/vk-white.svg" alt="В контакте" />
        </a>
        <a href="https://t.me/DaniilFilatov" target="_blank">
          <img src="~assets/icons/social/telegram-white.svg" alt="telegram" />
        </a>
      </div>
    </div>
    <div class="right">
      <menu>
        <ul v-for="element in menu" :key="element.title">
          <nuxt-link class="big-text" exact no-prefetch active-class="active" :to="element.link">{{element.title}}</nuxt-link>
          <hr/>
          <li v-for="position in element.positions" :key="position.title" class="small-text">
            <nuxt-link exact no-prefetch active-class="active" :to="position.link">{{position.title}}</nuxt-link>
          </li>
        </ul>
      </menu>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    about_sovet:
      'Сообщество профессиональных юристов и адвокатов, имеющих большой практический опыт в юриспруденции',
    menu: [
      {
        title: 'О нас',
        link: '/about',
        positions: []
      },
      {
        title: 'Услуги',
        link: '/services',
        positions: [
          {
            title: 'Юридическим лицам',
            link: '/'
          },
          {
            title: 'Физическим лицам',
            link: '/'
          },
          {
            title: 'Незавимимая правовая экспертиза',
            link: '/'
          },
          {
            title: 'Детективные услуги',
            link: '/'
          }
        ]
      },
      {
        title: 'Стоимость',
        link: '/price',
        positions: []
      },
      {
        title: 'Сотрудники',
        link: '/staff',
        positions: [
          {
            title: 'Руководство',
            link: '/staff/1'
          }
        ]
      },
      {
        title: 'Контакты',
        link: '/contacts',
        positions: []
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.bottom {
  width: calc(100% - 4rem);
  background: $darkGray;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem 2rem 1rem 2rem;
  margin-right: -4rem;
  .left, .right {
    margin-right: 2rem;
  }
  .left {
    width: 25%;
    color: $gray;
    min-width: 12rem;
    margin-bottom: 1rem;
    img, .about-sovet {
      margin-bottom: 1rem;
    }
  }
  .right {
    menu {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      ul {
        max-width: 13rem;
        color: white;
        margin-bottom: 1rem;
        hr {
          background: $lightGray;
          height: 2px;
          border: unset;
        }
        li {
          margin-bottom: 0.5rem;
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
      }
    }
  }
}
</style>
