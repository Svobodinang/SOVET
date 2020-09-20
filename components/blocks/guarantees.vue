<template>
  <div class="guarantees">
    <h2>Мы гарантируем</h2>
    <div class="content">
      <div class="block small-text">
        <img src="~assets/icons/guarantees/1.svg" alt="Конфиденциальность" />
        <br />
        <p>Конфиденциальность</p>
      </div>
      <div class="block small-text">
        <img src="~assets/icons/guarantees/2.svg" alt="Оказание квалифицированной юридической помощи" />
        <br />
        <p>Оказание квалифицированной юридической помощи</p>
      </div>
      <div class="block small-text">
        <img src="~assets/icons/guarantees/3.svg" alt="Максимальную юридическую защиту Вашему бизнесу" />
        <br />
        <p>Максимальную юридическую защиту Вашему бизнесу</p>
      </div>
      <div class="block small-text">
        <img src="~assets/icons/guarantees/4.svg" alt="Своевременность и порядочность исполнения обязательств" />
        <br />
        <p>Своевременность и порядочность исполнения обязательств</p>
      </div>
      <div class="block small-text">
        <img src="~assets/icons/guarantees/5.svg" alt="Детальный подход к решению любой проблемы" />
        <br />
        <p>Детальный подход к решению любой проблемы</p>
      </div>
    </div>
  </div>
</template>

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
