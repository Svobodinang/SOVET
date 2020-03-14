<template>
  <div>
    <!-- type = 'dark, light, w-100' -->
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
  padding: 0.4rem 0.7rem;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
  }
  &.dark {
    background: $darkGray;
    color: white;
  }
}
</style>
