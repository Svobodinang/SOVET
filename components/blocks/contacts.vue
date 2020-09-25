<template>
  <div class="contacts">
    <div class="left">
      <div class="card">
        <h3>{{generalInfo.companyName}}</h3>
        <hr/>
        <p>{{generalInfo.adress}}</p>
        <p><a :href="`tel:${generalInfo.telephone}`">{{generalInfo.telephone}}</a></p>
        <p class="mail"><a :href="`mailto:${generalInfo.email}`">{{generalInfo.email}}</a></p>
        <div class="icons">
          <a :href="generalInfo.facebook" target="_blank"><img src="~assets/icons/social/facebook.svg" alt="facebook"></a>
          <a :href="generalInfo.vk" target="_blank"><img src="~assets/icons/social/vk.svg" alt="В контакте"></a>
          <a :href="generalInfo.telegram" target="_blank"><img src="~assets/icons/social/telegram.svg" alt="telegram"></a>
        </div>
        <sovetButton type="dark" text="Заказать звонок" />
      </div>
    </div>
    <div class="right">
      <yandex-map
        :coords="coords"
        zoom="16"
        style="width: 100%; height: 100%;"
        hint-content="Юридическое бюро СОВЕТ"
      >
        <ymap-marker :coords="coords" marker-id="123" :balloon-template="balloonTemplate" />
      </yandex-map>
    </div>
  </div>
</template>

<script>
export default {
  props: ['generalInfo'],
  data: () => ({
    coords: [55.798207, 37.620097]
  }),
  computed: {
    balloonTemplate () {
      return `
        <h4 class="red">юридическое бюро СОВЕТ</h4>
        <p>г. Москва, 5-й проезд Марьиной Рощи, 15А, офис 1</p>
      `
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 25rem;
  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2rem;
    width: calc(50% - 2rem);
    .card {
      padding: 2rem;
      background: $lemon;
      text-align: center;
      hr {
        background: $darkGray;
        border: unset;
        height: 2px;
        margin-bottom: 1rem;
      }
      p {
        margin-bottom: 1rem;
        &.mail {
          margin-bottom: 2rem;
        }
      }
      .icons {
        margin-bottom: 2rem;
        margin-right: -1rem;
        img {
          margin-right: 1rem;
        }
      }
    }
  }
  .right {
    width: calc(50% - 2rem);
    min-width: 10rem;
    height: 80vh;
  }
}
</style>
