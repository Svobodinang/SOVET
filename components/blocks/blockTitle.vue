<template>
  <div class="title">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
  props: ['title']
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  color: white;
  padding: 1.5rem;
  background-image: url('~assets/img/bg/main.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}
</style>
