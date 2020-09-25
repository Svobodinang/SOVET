<template>
  <div class="menu">
    <sovetModal
      @sendedForm="showModalForm = false; showModalAccess = true"
      @closeModal="showModalForm = false"
      v-if="showModalForm"
      type="form"
      :content="message"
    />
    <sovetModal
      @closeModal="showModalAccess = false"
      v-if="showModalAccess"
      type="success"
      :content="message"
    />

    <div class="top">
      <div class="info">
        <img src="~assets/icons/phone.svg" alt="телефон" />
        <small>
          <a :href="`tel:${generalInfo.telephone}`">{{generalInfo.telephone}}</a>
        </small>
      </div>
      <div class="info">
        <img src="~assets/icons/map.svg" alt="адрес" />
        <small>
          <a>{{generalInfo.adress}}</a>
        </small>
      </div>
      <div class="info">
        <img src="~assets/icons/mail.svg" alt="электронная почта" />
        <small>
          <a :href="`mailto:${generalInfo.email}`">{{generalInfo.email}}</a>
        </small>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <nuxt-link to="/">
          <img src="~assets/icons/logo/sovet-logo.svg" alt="Логотип компании" />
        </nuxt-link>
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

        <sovetButton
          @click="showModalForm = true"
          text="Заказать звонок"
          type="dark"
          class="small-text"
        />
      </div>
    </div>
  </div>
</template>

<script>
import sovetModal from "@/components/ui/sovetModal";

export default {
  props: ['generalInfo'],
  data: () => ({
    menu: [
      { title: "O нас", link: "/about" },
      { title: "Услуги", link: "/services" },
      { title: "Стоимость", link: "/price" },
      { title: "Сотрудники", link: "/staff" },
      { title: "Контакты", link: "/contacts" },
    ],
    showModalForm: false,
    showModalAccess: false,
    message:
      "Ваше обращение успешно отправлено. \nНаши специалисты свяжутся с вами в течении часа.",
  }),
  components: {
    sovetModal,
  },
};
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
      max-width: 11rem;
      display: flex;
      align-items: center;
      &:not(:last-child) {
        margin-right: 4.05rem;
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
    padding: 0.3rem 1.5rem;
    color: $lightGray;
    .left {
      img {
        width: 10rem;
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
                border-bottom: 2px solid $lightGray;
              }
            }
          }
        }
      }
    }
  }
}
</style>
