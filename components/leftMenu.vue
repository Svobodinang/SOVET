<template>
  <div class="left">
    <ul class="menu" v-if="options && options.length > 0">
      <li
        v-for="(option) in options"
        class="big-text"
        :class="{'active': activeSection === option.id}"
        :key="option.id"
        @click="$emit('clickSection', option.id)"
      >{{option.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['options', 'activeSection']
}
</script>

<style lang="scss" scoped>
.left {
  .menu {
    li {
      padding: 0.5rem 1rem;
      width: 11rem;
      color: $gray;

      &:hover {
        cursor: pointer;
      }

      &.active {
        background: $gray;
        color: white;
        border-right: 3px solid #000000;
      }
    }
  }
}
</style>
