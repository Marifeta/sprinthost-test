<template>
  <div class="form">
    <div class="form__content">
      <PrimaryInput
        v-model="password"
        class="form__input"
        :title="'Новый пароль'"
        :placeholder="'Введите новый пароль'"
        :error="invalidErrors.passwordError"
      />
      <PrimaryInput
          v-model="repeatedPassword"
          :title="'Повторите новый пароль'"
          :placeholder="'Повторите новый пароль'"
          :error="invalidErrors.repeatedPasswordError"
      />
      <Checkbox
          v-model="checked"
          class="form__checkbox"
          :text="'Завершить сеансы на других устройствах'"
      />
      <PrimaryButton
          :is-disabled="isDisabledButton"
          :text="'Сменить пароль'"
          :on-click="sendPassword"
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
import Note from "../components/NoteItem";
import Checkbox from "../components/CheckboxItem";
import { InvalidReason } from '../helper/invalidReason';
import { delay } from '../helper/delay';
export default {
  components: {
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
      invalidErrors: {
        passwordError: null,
        repeatedPasswordError: null,
      },
      isDisabledButton: false,
    };
  },
  methods: {
    validatePassword(password) {
      if (password.trim().length === 0) {
        return InvalidReason.Empty;
      }

      if (password.length < 8) {
        return InvalidReason.Length;
      }
      const regexp = /[а-яА-Я\s]/i;
      if (regexp.test(password)) {
        return InvalidReason.Reg;
      }
      return null;
    },
    comparePasswords(pass, otherPass) {
      if (pass !== otherPass) {
        return InvalidReason.Miss;
      }
      return null;
    },
    clearErrors() {
      for (let err in this.invalidErrors)  {
        this.invalidErrors[err] = null;
      }
    },
    clearInputs() {
      this.password = '';
      this.repeatedPassword = '';
    },
    async sendPassword() {
      this.clearErrors()
      this.isDisabledButton = true;
      const isComparing = this.comparePasswords(this.password, this.repeatedPassword)
      try {
        this.invalidErrors.passwordError = this.validatePassword(this.password) || isComparing;
        this.invalidErrors.repeatedPasswordError = this.validatePassword(this.repeatedPassword) || isComparing;

        if (this.invalidErrors.passwordError || this.invalidErrors.repeatedPasswordError) {
          return;
        }
        await delay(2000);
        // также в настоящий запрос добавляем значение checkbox
        this.$emit('viewResult', true);
        this.clearInputs();
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

.form
  display: flex
  justify-content: space-between
  gap: 24px 112px
  &__content
    flex-grow: 1
  &__note
    justify-self: flex-end
  &__input
    margin-bottom: 30px
  &__checkbox
    margin: 56px 0 34px 0
@media (max-width: 736px)
  .form
    gap: 24px 112px
    flex-wrap: wrap-reverse
</style>
