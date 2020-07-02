<template>
  <div v-if="staffById">
    <div class="about">
      <div class="text">
        <h2>{{staffById.name}}</h2>
        <hr />
        <p>{{staffById.text}}</p>
      </div>
      <div class="img" :id="staffId">
      </div>
    </div>

    <div class="merits">
      <h2>Заслуги</h2>
      <p class="big-text">Мы гордимся нашими сотрудниками</p>
      <div class="blocks">
        <div class="block" v-for="merit in staffById.merits" :key="merit.title">
          <p class="title">{{merit.title}}</p>
          <p class="text">{{merit.text}}</p>
        </div>
      </div>
    </div>

    <div class="works">
      <p class="big-text">За годы успешной деятельности написаны десятки работ, посвященных актуальным проблемам современной юриспруденции, таких, как:</p>
      <div class="blocks">
        <div class="block" v-for="work in staffById.works" :key="work.title">
          <p>{{work.title}}</p>
        </div>
        <div class="block">
          <p>Полный список научных работ</p>
          <sovetButton text="Посмотреть" type="middle" @click="openAllWorks()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data: () => ({
    staffId: null,
    backEndStaffs: {
      1:
        {
          name: 'Филатова Анна Валериевна',
          text: 'Доктор юридических наук, профессор, профессионал, эффективно работающий в сфере юриспруденции более 20 лет.\n\nСпециалист по административному, финансовому и информационному праву, по совершенствованию правового обеспечения административных процедур, а также в области контрольно-надзорной деятельности и правовой экспертизе.\n\n Филатова Анна Валериевна отличается высоким профессионализмом, компетентностью в своей работе, умением решать сверхсложные задачи с легкостью, а также отличным чувством юмора, которое помогает коллегам и клиентам чувствовать себя комфортно.',
          merits: [
            { title: 'Доктор юридических наук', text: '2010 год' },
            { title: 'Профессор', text: '2010 год' },
            { title: 'Больше 70 научных работ', text: 'за 4 года' }
          ],
          works: [
            {
              title: 'Монография «Экспертиза регламентов и процедур исполнения государственных функций в системе экспертной деятельности России»',
              link: '#'
            },
            {
              title: 'Монография «Регламенты и процедуры в сфере реализации государственного контроля (надзора)»',
              link: '#'
            },
            {
              title: 'Соавторство в создании учебника «Административная ответственность»',
              link: '#'
            },
            {
              title: 'Статья «Этапы формирования института саморегулирования в Российской Федерации»',
              link: '#'
            },
            {
              title: 'Статья «Аутсорсинг административно-управленческих процессов»',
              link: '#'
            },
            {
              title: 'Статья «Административные регламенты исполнения Федеральной службой по труду и занятости государственной функции по контролю, надзору»',
              link: '#'
            }
          ]
        }
    },
    staffById: {}
  }),
  methods: {
    openAllWorks () {
      const link = document.createElement('a')
      link.setAttribute('href', 'http://sovetpravo.ru/wp-content/uploads/2017/09/Spisok_nauchnykh_trudov_Filatovoy_Anna_Valerievny.pdf')
      link.setAttribute('target', '_blank')
      link.setAttribute('download', 'download')
      link.click()
    }
  },
  mounted () {
    this.staffId = this.$route.params.staffId
    this.staffById = this.backEndStaffs[this.staffId]
  },
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
  }
  .img {
    width: calc(50% - 4rem);
    min-height: 10rem;
    min-width: 13rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-image: url('~assets/img/staff/1.webp');
  }
}

.merits, .works {
  padding: 3rem 3rem 2rem 3rem;
  h2, p {
    text-align: center;
    color: $darkGray;
  }
  h2 {
    margin-bottom: 1rem;
  }
  .big-text {
    margin-bottom: 1.5rem;
  }
  .blocks {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-right: -2rem;
    .block {
      margin-right: 2rem;
      margin-bottom: 2rem;
    }
  }
}

.merits {
  .blocks {
    .block {
      width: 13rem;
      height: 5rem;
      border: 1px solid $darkGray;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        padding-bottom: 0.5rem;
      }
    }
  }
}

.works {
  .big-text {
    font-weight: bold;
    margin-bottom: 2rem;
  }
  .blocks {
    .block {
      width: 10rem;
      height: 17rem;
      background: $darkGray;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;
      p {
        color: white;
        padding-bottom: 2rem;
        padding-top: 2rem;
      }
    }
  }
}
</style>
