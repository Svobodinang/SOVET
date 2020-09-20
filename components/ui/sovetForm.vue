<template>
  <div>
    <form>
      <input
        type="text"
        placeholder="Имя"
        v-model.trim="$v.name.$model"
        :class="{error: $v.name.$dirty && !$v.name.required}"
      />
      <input
        type="text"
        placeholder="Телефон"
        @focus="focusTel($event)"
        @blur="blurTel($event)"
        v-model.trim="$v.tel.$model"
        :class="{error: $v.tel.$dirty && (!$v.tel.required || !$v.tel.minLength)}"
        v-mask="'8-###-###-##-##'"
      />
      <sovetButton @click="sendform()" type="dark w-100" text="Заказать звонок" />
    </form>

    <sovetModal @closeModal="showModal=false" v-if="showModal" type="success" :content="message" />
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import sovetButton from "@/components/ui/sovetButton";
import sovetModal from "@/components/ui/sovetModal";

export default {
  data: () => ({
    name: "",
    tel: "",
    message:
      "Ваше обращение успешно отправлено. \nНаши специалисты свяжутся с вами в течении часа.",
    showModal: false,
  }),
  validations: {
    name: { required },
    tel: { required, minLength: minLength(15) },
  },
  methods: {
    focusTel(e) {
      e.target.placeholder = "8-926-333-35-40";
    },
    blurTel(e) {
      e.target.placeholder = "Телефон";
    },
    async sendform() {
      if ((this.$v.$dirty && this.$v.$error) || !this.$v.$dirty) {
        this.$v.$touch();
        return 0;
      }

      try {
        let form = { name: this.name, tel: this.tel };
        let ans = await this.$axios.$post("/send_mail", form);
      } catch (err) {
        console.log(err);
      }
      this.$emit("sendedForm");
      this.showModal = true;

      this.$v.$reset();
      this.tel = this.name = "";
    },
  },
  components: {
    sovetButton,
    sovetModal
  },
};
</script>

<style lang="scss" scoped>
form {
  input {
    border: unset;
    background: $lightGray;
    border-radius: 8px;
    padding: 0.5rem;
    font-family: "ubuntu";
    font-size: 1rem;
    color: $darkGray;
    margin-bottom: 1rem;
    width: calc(100% - 1rem);
    &::placeholder {
      color: $gray;
    }
    &:focus {
      outline: unset;
      border: unset;
    }
    &.error {
      border: 1px solid red;
    }
  }
  .btn {
    width: 100%;
  }
}
</style>
