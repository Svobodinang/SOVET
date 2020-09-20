<template>
  <div :class="type">
    <!-- type = 'dark, light-border, middle, light, w-100, w-50, center' -->
    <button @click.prevent="$emit('click')" :class="type">
      {{text}}
      <div class="line"></div>
    </button>
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
  position: relative;
  line-height: 100%;
  font: unset;
  font-family: "ubuntu";
  background: unset;
  border: none;
  padding: 10px 20px;
  border-radius: 1rem;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  &:active, &:focus {
    border: unset;
    outline: unset;
  }
  &.w-100 {
    width: 100%;
  }
  &.dark {
    background: $darkGray;
    color: white;
    border: 2px solid $darkGray;
    &:hover {
      background: $darkGrayHover;
      border-color: $darkGrayHover;
    }
    &:active, &:focus {
      border: 2px solid $darkGray;
    }
  }
  &.middle {
    background: $gray;
    color: $lightGray;
    border: 2px solid $gray;
    &:hover {
      background: $grayHover;
      border-color: $grayHover;
    }
    &:active, &:focus {
      border: 2px solid $gray;
    }
  }
  &.light {
    background: $lemon;
    color: $darkGray;
    border: 2px solid $lemon;
    &:hover {
      background: $lemonHover;
      border-color: $lemonHover;
    }
    &:active, &:focus {
      border: 2px solid $lemon;
    }
  }
  &.light-border {
    border: 2px solid $lightGray;
    &:hover {
      border-color: $lightGray;
    }
    &:active, &:focus {
      border: 2px solid $lightGray;
    }
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
