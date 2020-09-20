<template>
  <!-- type = 'success', 'error', 'info' -->
  <div class="modal">
    <div class="inside" :class="type">
      <div class="close">
        <button @click.prevent="$emit('closeModal')">&#10006;</button>
      </div>
      <div class="content">
        <sovetForm @sendedForm="$emit('sendedForm')" v-if="type === 'form'" />
        <div v-else class="text">
          <p>{{content}}</p>
          <sovetButton @click="$emit('closeModal')" type="dark w-100" text="Ок" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sovetForm from "@/components/ui/sovetForm";
import sovetButton from "@/components/ui/sovetButton"

export default {
  props: ["type", "content"],
  components: {
    sovetButton,
    sovetForm
  }
};
</script>

<style lang="scss" scoped>
.modal {
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba($color: #000000, $alpha: 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  .close {
    display: flex;
    justify-content: flex-end;
    button {
      border: unset;
      border-radius: 0.1rem;
      &:hover {
        cursor: pointer;
      }
      &:active, &:focus {
        outline: unset;
      }
    }
  }
  .inside {
    width: 30rem;
    padding: 0.5rem 1rem;
    background: white;
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 1rem 1rem 2rem 1rem;
      .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
          text-align: center;
          margin-bottom: 1rem;
        }
      }
    }
  }
  .form {
    background: $gray;
  }
}
</style>
