<template>
  <div class="about">
    <blockTitle title="О нас" />

    <about inside="true" :about="generalInfo.about" />

    <div class="quote">
      <hr class="top" />
      <p class="big-text">{{generalInfo.aboutSlogan}}</p>
      <hr />
    </div>

    <guarantees :garanties="garanties" />

    <div class="goals">
      <h2>Наши цели</h2>
      <div class="cards">
        <div class="card" v-for="(goal, index) in goals" :key="index">
          <p class="big-text">{{goal}}</p>
        </div>
      </div>
    </div>

    <div class="docs">
      <h2>Наши документы</h2>
      <p>Мы ничего не скрываем от вас</p>
      <div class="content" v-if="docs.length">
        <div class="card" v-for="doc in docs" :key="doc.title">
          <p>{{doc.title}}</p>
          <sovetButton
            type="middle hover-light"
            text="Посмотреть"
            @click="openDock(doc.document)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import about from "@/components/blocks/about.vue";
import guarantees from "@/components/blocks/guarantees.vue";
import blockTitle from "@/components/blocks/blockTitle.vue";

export default {
  async asyncData({ $axios, params }) {
    try {
      let ans = await $axios.$get(`/generalInfo/`);
      let generalInfo = ans[0];
      let garanties = await $axios.$get(`/Garanty/`);
      let docs = await $axios.$get('/Docs/')
      return { generalInfo, garanties, docs };
    } catch (e) {
      return { generalInfo: {}, docs: [] };
    }
  },
  data: () => ({
    generalInfo: {},
    garanties: [],
    docs: [],
    goals: [
      "Обеспечение финансовой и юридической безопасности наших клиентов",
      "Достижение положительного результата в любой сложившейся ситуации",
      "Ориентирование наших клиентов на комплексное решение их вопросов",
      "Стремление к лидерству на рынке правовых услуг",
    ],
  }),
  methods: {
    openDock(dockName) {
      const link = document.createElement("a");
      link.setAttribute(
        "href",
        dockName
      );
      link.setAttribute("target", "_blank");
      link.setAttribute("download", "download");
      link.click();
    },
  },
  components: {
    about,
    guarantees,
    blockTitle,
  },
};
</script>

<style lang="scss" scoped>
.about {
  .quote {
    padding: 2rem;
    hr {
      width: 20rem;
      background: $gray;
      &.top {
        margin-bottom: 2rem;
      }
    }
    p {
      text-align: center;
      color: $darkGray;
      margin-bottom: 2rem;
    }
  }

  .goals {
    padding: 3rem 2rem;
    h2 {
      text-align: center;
      margin-bottom: 2rem;
      color: $darkGray;
    }
    .cards {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin-right: -2rem;
      .card {
        margin-bottom: 2rem;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 5rem;
        width: 20%;
        height: 20rem;
        min-width: 10rem;
        margin-right: 2rem;
        color: white;
        background-repeat: no-repeat;
        background-position: center center;
        box-shadow: 3px 3px 4px #938b8b;
        &:first-child {
          background-image: url("~assets/img/bg/goals/1.jpg");
        }
        &:nth-child(2) {
          background-image: url("~assets/img/bg/goals/2.jpg");
        }
        &:nth-child(3) {
          background-image: url("~assets/img/bg/goals/3.jpg");
        }
        &:nth-child(4) {
          background-image: url("~assets/img/bg/goals/4.jpg");
        }
        p {
          width: 85%;
        }
      }
    }
  }

  .docs {
    padding: 3rem 1rem 2rem 1rem;
    background-image: url("~assets/img/bg/main.webp");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    h2,
    p {
      color: white;
      text-align: center;
    }
    h2 {
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 3rem;
    }
    .content {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      padding-left: 4rem;
      width: calc(100% - 4rem);
      .card {
        width: 25%;
        min-width: 10rem;
        margin-right: 2rem;
        max-width: 20rem;
        height: 7rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 2rem;
        p {
          color: $lightGray;
          text-align: left;
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
