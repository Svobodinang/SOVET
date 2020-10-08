<template>
  <div>
    <div class="main">
      <div class="content">
        <div class="text">
          <h1>{{generalInfo.mainTitle}}</h1>
          <p class="big-text">{{generalInfo.slogan}}</p>
        </div>
        <div class="buttons big-text">
          <sovetButton text="Заказать звонок" type="light" />
          <sovetButton
            text="Узнать больше"
            type="dark light-border"
            @click="$router.push('/about')"
          />
        </div>
      </div>
    </div>

    <about :about="generalInfo.about" />

    <services :slogan="generalInfo.servicesSlogan" :serviceBlocks="serviceBlocks" />

    <guarantees :garanties="garanties" />

    <div class="form">
      <div class="content">
        <div class="left">
          <h2>{{generalInfo.formTitle}}</h2>
          <p>{{generalInfo.formText}}</p>
        </div>
        <div class="right">
          <sovetForm />
        </div>
      </div>
    </div>

    <contacts :generalInfo="generalInfo" />
  </div>
</template>

<script>
import services from "@/components/blocks/services.vue";
import guarantees from "@/components/blocks/guarantees.vue";
import contacts from "@/components/blocks/contacts.vue";
import about from "@/components/blocks/about.vue";
import sovetForm from "@/components/ui/sovetForm";

export default {
  async asyncData({ $axios, params }) {
    try {
      let ans = await $axios.$get(`/generalInfo/`);
      let generalInfo = ans[0]
      let garanties = await $axios.$get(`/Garanty/`);
      let serviceBlocks = await $axios.$get('/ServiceBlock/')
      return { generalInfo, garanties, serviceBlocks };
    } catch (e) {
      return { generalInfo: {}, garanties: {}, serviceBlocks: {} };
    }
  },
  data: () => ({
    generalInfo: {},
    garanties: [],
    serviceBlocks: {},
    name: "",
    tel: "",
  }),
  components: {
    services,
    guarantees,
    contacts,
    about,
    sovetForm,
  },
  methods: {
    async sendMail() {
      try {
        let form = { name: this.name, tel: this.tel };
        let ans = await this.$axios.$post("/send_mail", form);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  background-image: url("~assets/img/bg/main.webp");
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
  background-image: url("~assets/img/bg/main.webp");
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
    h2,
    p {
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
