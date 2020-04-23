import VueYandexMetrika from 'vue-yandex-metrika'
import Vue from 'vue'

const settings = {
  id: 62219872,
  env: process.env.NODE_ENV
}

Vue.use(VueYandexMetrika, settings)
