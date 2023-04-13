<template>
  <div class="form">
    <div class="form__content">
      <PrimaryInput
        v-model="password"
        class="form__input"
        :title="'Новый пароль'"
        :placeholder="'Введите новый пароль'"
      />
      <PrimaryInput
          v-model="repeatedPassword"
          :title="'Повторите новый пароль'"
          :placeholder="'Повторите новый пароль'"
      />
      <transition name="fade-away-text">
        <ErrorInput
            v-if="error"
            :key="error.description"
            :text="error.description"
        />
      </transition>
      <Checkbox
          v-model="checked"
          class="form__checkbox"
          :text="'Завершить сеансы на других устройствах'"
      />
      <PrimaryButton
          :is-disabled="isDisabledButton"
          :text="'Сменить пароль'"
          @click.native="sendPassword"
      >
        Сменить пароль
      </PrimaryButton>
    </div>
    <div class="form__note">
      <Note
          :title="'Используйте сложные пароли и не сохраняйте их в браузере.'"
          :description="'Данные меры цифровой безопасности помогают предотвратить взлом профиля.'"
      />
    </div>
  </div>
</template>
<script>
import PrimaryInput from "../components/PrimaryInput";
import PrimaryButton from "../components/PrimaryButton";
import Note from "../components/Note";
import Checkbox from "../components/Checkbox";
import { InvalidReason } from '../helper/invalidReason';
import { delay } from '../helper/delay';
import ErrorInput from "../components/ErrorInput";
export default {
  components: {
    ErrorInput,
    Checkbox,
    Note,
    PrimaryButton,
    PrimaryInput
  },
  data() {
    return {
      password: '',
      repeatedPassword: '',
      checked: false,
      error: '',
      isDisabledButton: false,
    };
  },
  methods: {
    validatePassword() {
      if (this.password.trim().length === 0 || this.repeatedPassword.trim().length === 0) {
        return InvalidReason.Empty;
      }
      if (this.password !== this.repeatedPassword) {
        return InvalidReason.Miss;
      }
      if (this.password.length < 8) {
        return InvalidReason.Length;
      }
      const regexp = /[а-яА-Я\s]/i;
      if (regexp.test(this.password)) {
        return InvalidReason.Reg;
      }
      return null;
    },
    async sendPassword() {
      this.error = null;
      this.isDisabledButton = true;
      try {
        const error = this.validatePassword();
        if (error) {
          this.error = error;
          return;
        }
        await delay(2000);
        this.$emit('viewResult', true);
      } catch (e) {
        this.$emit('viewResult', false);
        console.log('error', e);
      } finally {
        this.isDisabledButton = false;
      }
    },
  },
}
</script>

<style scoped lang="sass">

.fade-away-text-enter-active
  animation: fade-away-text .4s linear
.fade-away-text-leave-active
  opacity: 0
@keyframes fade-away-text
  from
    opacity: 0
  to
    opacity: 1

.form
  display: flex
  justify-content: space-between
  gap: 24px 112px
  &__content
    flex-grow: 1
  &__note
    justify-self: end
  &__input
    margin-bottom: 30px
  &__checkbox
    margin: 56px 0 34px 0
@media (max-width: 736px)
  .form
    gap: 24px 112px
    flex-wrap: wrap-reverse
</style>
