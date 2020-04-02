<template>
  <div :class="type">
    <!-- type = 'dark, light-border, middle, light, w-100, w-50, center, hover-light, hover-dark' -->
    <button @click="$emit('click')" :class="type">
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
  font: unset;
  font-family: "ubuntu";
  background: unset;
  border: none;
  padding: 10px 20px;
  border-radius: 0px;
  overflow: hidden;
  &.w-100 {
    width: 100%;
  }
  &.dark {
    background: $darkGray;
    color: white;
    .line {
      background: white;
    }
  }
  &.middle {
    background: $gray;
    color: $lightGray;
    .line {
      background: $lightGray;
    }
  }
  &.light-border {
    border: 2px solid $lightGray;
  }
  &.light {
    background: $lemon;
    color: $darkGray;
    .line {
      background: $darkGray;
    }
  }
  &.center {
    display: block;
    margin: 0 auto;
  }
  &.w-50 {
    width: 50%;
  }
  .line {
    right: 0;
    left: 0;
    height: 0;
    top: -3px;
    height: 3px;
    bottom: 0;
    position: absolute;
    transition: .2s;
  }
}

button:hover {
  cursor: pointer;
  .line {
    top: calc(100% - 3px);
  }
}

</style>
