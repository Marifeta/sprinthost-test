<template>
  <div
      class="modal"
      @click="closeModal"
  >
    <div
        class="modal__content"
        @click.stop
    >
      <button
          class="modal__mobile-button"
          @click="closeModal"
      >
        <img src="../assets/arrow.svg" alt="arrow-icon">
        Назад
      </button>
      <button
          class="modal__button"
          @click="closeModal"
      >
        Закрыть
      </button>
      <div
          class="modal__message"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
}
</script>

<style scoped lang="sass">
.popup-enter-active
  transition: transform .6s, opacity .6s
.popup-enter
  transform: translateY(30px)
  opacity: 0
.modal
  position: fixed
  width: 100%
  height: 100%
  z-index: 1
  top: 0
  left: 0
  background-color: $modal_overlay
  display: flex
  align-items: center
  justify-content: center
  &__content
    background-color: $body
    padding: 32px
    border-radius: 8px
    min-width: 240px
    display: flex
    flex-direction: column
    align-items: end
  &__button
    font-style: normal
    font-weight: 700
    font-size: 10px
    line-height: 10px
    color: $modal_button
    background-color: $body
    border-bottom: 1px dashed $modal_button_border
    cursor: pointer
  &__mobile-button
    font-style: normal
    font-weight: 700
    font-size: 14px
    line-height: 24px
    color: $modal_mobile_button
    background-color: $body
    display: none
    cursor: pointer
  &__message
    width: 100%
    text-align: center
    padding: 18px 0
    font-style: normal
    font-weight: 700
    font-size: 22px
    line-height: 24px
    color: $sub_title
@media (max-width: 736px)
  .modal
    &__content
      align-items: start
      padding: 32px
      border-radius: 0
      width: 100%
      height: 100%
    &__button
      display: none
    &__mobile-button
      display: inline-block

</style>
