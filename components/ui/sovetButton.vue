<template>
  <div :class="type">
    <!-- type = 'dark, light-border, middle, light, w-100, w-50, center, hover-light, hover-dark' -->
    <button @click="$emit('click')" :class="type">{{text}}</button>
  </div>
</template>

<script>
export default {
  props: ['text', 'type']
}
</script>

<style lang="scss" scoped>
.w-100 {
  width: 100%;
}
button {
  padding: 0;
  font: unset;
  font-family: "ubuntu";
  background: unset;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
  &.w-100 {
    width: 100%;
  }
  &.dark {
    background: $darkGray;
    color: white;
  }
  &.middle {
    background: $gray;
    color: $lightGray;
  }
  &.light-border {
    border: 1px solid $lightGray;
  }
  &.light {
    background: $lemon;
    color: $darkGray;
  }
  &.hover-dark:hover {
    background: $darkGray;
    color: $lemon;
  }
  &.hover-light:hover {
    background: $lemon;
    color: $darkGray
  }
  &.center {
    display: block;
    margin: 0 auto;
  }
  &.w-50 {
    width: 50%;
  }
}
</style>
