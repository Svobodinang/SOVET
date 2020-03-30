<template>
  <div class="staff">
    <blockTitle title="Сотрудники" />

    <div class="content block-menu">
      <leftMenu :options="blocks" @clickBlock="clickBlock" :activeBlock="activeStaffBlock" />

      <div class="right">
        <div
          v-for="staff in staffsByBlockId(activeStaffBlock)"
          :key="staff.id"
          class="card"
        >
          <img :src="require(`@/assets/img/staff/${staff.id}.jpg`)" alt="">
          <p class="big-text">{{staff.name}}</p>
          <p class="text">{{staff.shortText}}</p>
          <sovetButton type="dark center w-50" text="Больше" @click="$router.push(`/staff/${staff.id}`)" />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import blockTitle from '@/components/blocks/blockTitle.vue'
import leftMenu from '@/components/leftMenu'

export default {
  data: () => ({
    blocks: [
      { id: 1, title: 'Руководство' }
    ],
    backEndStaffs: {
      1: [
        {
          id: 1,
          name: 'Филатова Анна Валериевна',
          shortText: 'Директор АНО Юридическое бюро «Совет» доктор юридических наук, профессор, эксперт, уполномоченный на проведение антикоррупционной экспертизы нормативных правовых актов и проектов нормативных правовых актов',
          text: 'Доктор юридических наук, профессор, профессионал, эффективно работающий в сфере юриспруденции более 20 лет.\n\nСпециалист по административному, финансовому и информационному праву, по совершенствованию правового обеспечения административных процедур, а также в области контрольно-надзорной деятельности и правовой экспертизе.\n\n Филатова Анна Валериевна отличается высоким профессионализмом, компетентностью в своей работе, умением решать сверхсложные задачи с легкостью, а также отличным чувством юмора, которое помогает коллегам и клиентам чувствовать себя комфортно.'
        }
      ]
    },
    activeStaffBlock: 1
  }),
  computed: {
    staffsByBlockId () {
      return (blockId) => {
        return this.backEndStaffs[blockId]
      }
    }
  },
  components: {
    blockTitle,
    leftMenu
  }
}
</script>

<style lang="scss" scoped>
.staff {
  .content {
    padding: 2rem 3rem;
    .right {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .card {
        width: calc(50% - 2rem);
        min-width: 15rem;
        margin-bottom: 2rem;
        padding-right: 1rem;
        img {
          display: block;
          width: auto;
          height: auto;
          max-width: 100%;
          margin-bottom: 1.5rem;
        }
        p {
          margin-bottom: 1.5rem;
          &.text {
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }
  }
}
</style>
