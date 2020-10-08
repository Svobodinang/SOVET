<template>
  <div class="services">
    <h2 v-if="currentServiceBlock">{{ currentServiceBlock.title2 }}</h2>
    <p class="description" v-if="currentServiceBlock">{{ currentServiceBlock.text }}</p>
    <div class="block-menu">
      <leftMenu
        v-if="currentServiceSections && activeServiceSection"
        :options="currentServiceSections"
        @clickSection="clickSection"
        :activeSection="activeServiceSection"
      />
      <div class="right" v-if="currentServices">
        <div
          v-for="(service, index) in currentServices"
          :key="index"
          @click="changeViewService(index)"
          class="block"
          :class="{
            once: currentServices.length === 1 && service.text,
            hover: service.text && currentServices.length > 1,
          }"
        >
          <div v-if="service.accent" class="accent">
            <div class="content">
              <h2>{{ service.accent }}</h2>
            </div>
          </div>
          <div class="title">
            <p>
              {{ service.title }}
            </p>
            <img
              v-if="service.text && currentServices.length > 1"
              src="~assets/icons/arrow-down.svg"
              alt="Подробнее"
            />
          </div>
          <transition name="text">
            <p
              v-if="
                activeServiceTitle === index ||
                currentServices.length === 1
              "
              class="info"
            >
              {{ service.text }}
            </p>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import leftMenu from "@/components/leftMenu";

export default {
  async asyncData({ $axios, params }) {
    try {
      let serviceBlocks = await $axios.$get("/ServiceBlock/");
      let serviceSections = await $axios.$get("/ServiceSection/");
      let allServices = await $axios.$get("/Service/");
      return { serviceBlocks, serviceSections, allServices };
    } catch (e) {
      return { serviceBlocks: [], serviceSections: [], allServices: [] };
    }
  },
  data: () => ({
    serviceBlocks: [],
    serviceSections: [],
    allServices: [],
    serviceType: null,
    activeServiceSection: null,
    activeServiceTitle: null,
  }),
  beforeMount() {
    this.serviceType = this.$route.params.serviceType;
  },
  mounted() {
    this.setFirstSection()
  },
  methods: {
    clickSection(blockId) {
      this.activeServiceSection = blockId;
    },
    changeViewService(index) {
      if (this.currentServices[index].text) {
        if (this.activeServiceTitle === index) {
          this.activeServiceTitle = null;
        } else {
          this.activeServiceTitle = index;
        }
      }
    },
    setFirstSection() {
      if(this.currentServiceSections[0]) {
        this.activeServiceSection = this.currentServiceSections[0].id;
      }
    },
  },
  components: {
    leftMenu,
  },
  computed: {
    currentServiceSections() {
      if (!this.serviceSections || !this.currentServiceBlock) return []
      return this.serviceSections.filter(s => s.serviceBlock === this.currentServiceBlock.id)
    },
    services() {
      return (sectionId) => {
        return this.backEndServices[sectionId];
      };
    },
    currentServiceBlock() {
      if (!this.serviceBlocks) return {};
      return this.serviceBlocks.find((s) => s.pageName === this.serviceType);
    },
    currentServices() {
      return this.allServices.filter(s => s.serviceSection === this.activeServiceSection)
    }
  },
};
</script>

<style lang="scss" scoped>
.services {
  padding: 2rem 3rem;
  h2,
  p.description {
    color: $darkGray;
  }
  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }
  p.description {
    margin-bottom: 2rem;
  }
  .block-menu {
    .block {
      border-bottom: 1px solid $gray;
      margin-bottom: 1rem;
      padding-bottom: 1rem;
      .title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
      }
      .info {
        color: $gray;
        white-space: pre-wrap;
        overflow: hidden;
      }
      &.hover:hover {
        cursor: pointer;
      }
      &.once {
        border: unset;
        .accent {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
          .content {
            height: 7rem;
            width: 7rem;
            background: $lightGray;
            border-radius: 50%;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            h2 {
              margin: 0;
            }
          }
        }
        .title {
          text-align: center;
        }
      }
    }
  }
}

// Анимация
.text-enter-active {
  animation: openText 0.3s ease-in;
}
.text-leave-active {
  animation: openText 0.3s ease-in reverse;
}

@keyframes openText {
  0% {
    max-height: 0;
  }
  100% {
    max-height: 400px;
  }
}
</style>
