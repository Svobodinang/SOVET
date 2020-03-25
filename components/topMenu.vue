<template>
  <div class="menu">
    <div class="top">
      <div class="info">
        <img src="~assets/icons/phone.svg" alt="телефон" />
        <small>
          <a href="tel:+79055386503">+7 (905) 538 65 03</a>
        </small>
      </div>
      <div class="info">
        <img src="~assets/icons/map.svg" alt="адрес" />
        <small>
          <a>г. Москва, 5-й проезд Марьиной Рощи, 15А, офис1</a>
        </small>
      </div>
      <div class="info">
        <img src="~assets/icons/mail.svg" alt="электронная почта" />
        <small>
          <a href="mailto:info@sovetpravo.ru">info@sovetpravo.ru</a>
        </small>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <nuxt-link to="/"><img src="~assets/icons/logo/sovet-logo.svg" alt="Логотип компании" /></nuxt-link>
      </div>
      <div class="right">
        <menu>
          <ul class="small-text">
            <li v-for="element in menu" :key="element.title">
              <nuxt-link
                exact
                no-prefetch
                active-class="active"
                :to="element.link"
              >{{element.title}}</nuxt-link>
            </li>
          </ul>
        </menu>

        <sovetButton text="Заказать звонок" type="dark" class="small-text" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    menu: [
      { title: 'O нас', link: '/about' },
      { title: 'Услуги', link: '/services' },
      { title: 'Стоимость', link: '/a' },
      { title: 'Сотрудники', link: '/a' },
      { title: 'Контакты', link: '/a' }
    ]
  })
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  .top {
    padding: 0.5rem 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: $lightGray;
    background: $darkGray;
    .info {
      max-width: 10rem;
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-right: 3rem;
      }
      img {
        height: 1rem;
        margin-right: 0.3rem;
      }
    }
  }

  .bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $gray;
    padding: 0.5rem 1.5rem;
    color: $lightGray;
    .left {
      img {
        width: 6rem;
      }
    }
    .right {
      display: flex;
      justify-content: space-between;
      align-items: center;
      menu {
        ul {
          display: flex;
          li {
            a {
              padding-bottom: 0.5rem;
              margin-right: 1.5rem;
              &.active {
                border-bottom: 1px solid $lightGray;
              }
            }
          }
        }
      }
    }
  }
}
</style>
