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
    <div class="bottom"></div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  width: 100%;
  .top {
    padding: 1rem 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: white;
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
}
</style>
