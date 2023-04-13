<template>
  <div class="page">
    <MainHeader />
    <PasswordForm
        class="page__form"
        @viewResult="openModal"
    />
    <Settings class="page__settings" />
    <transition name="fade">
      <Modal
          v-if="isOpenModal"
          :message="message"
          @closeModal="closeModal"
      />
    </transition>
  </div>
</template>
<script>
import MainHeader from "../containers/MainHeader";
import PasswordForm from "../containers/PasswordForm";
import Settings from "../containers/SettingsContainer";
import Modal from "../components/ModalWindow";
export default {
  components: {Modal, Settings, PasswordForm, MainHeader},
  data() {
    return {
      isOpenModal: false,
      message: '',
    };

  },
  methods: {
    closeModal() {
      this.isOpenModal = false;
    },
    openModal(result) {
      this.message = result ? 'Успех' : 'Ошибка';
      this.isOpenModal = true;
    }
  }
}
</script>

<style lang="sass" scoped>
.fade-enter-active
  animation: fade .2s linear
.fade-leave-active
  opacity: 0
@keyframes fade
  from
    opacity: 0
  to
    opacity: 1
.page
  margin: 0 auto
  width: 680px
  &__form
    margin-bottom: 64px
  &__settings
    margin-bottom: 64px
@media (max-width: 736px)
  .page
    width: 328px
</style>
