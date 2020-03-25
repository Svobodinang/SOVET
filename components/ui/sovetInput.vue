<template>
  <div :class="type">
    <!-- type - w-100 -->
    <input type="text" :class="type" :placeholder="placeholder">
  </div>
</template>

<script>
export default {
  props: ['placeholder', 'type']
}
</script>

<style lang="scss" scoped>
.w-100 {
  width: 100%;
}
input {
  border: unset;
  background: $lightGray;
  border-radius: 8px;
  padding: 0.5rem;
  font-family: "ubuntu";
  font-size: 1rem;
  color: $darkGray;
  margin-bottom: 1rem;
  &.w-100 {
    width: calc(100% - 1rem);
  }
  &::placeholder {
    color: $gray;
  }
}
</style>
