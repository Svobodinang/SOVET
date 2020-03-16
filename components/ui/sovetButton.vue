<template>
  <div>
    <!-- type = 'dark, light-border, light, w-100' -->
    <button @click="action()" :class="type">{{text}}</button>
  </div>
</template>

<script>
export default {
  props: ['text', 'action', 'type']
}
</script>

<style lang="scss" scoped>
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
  &.dark {
    background: $darkGray;
    color: white;
  }
  &.light-border {
    border: 1px solid $lightGray;
  }
  &.light {
    background: #F8F3E1;
    color: $darkGray;
  }
}
</style>
