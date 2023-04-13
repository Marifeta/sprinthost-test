<template>
  <button
      class="button"
      :class="{
        'button_disabled': isDisabled
      }"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped lang="sass">
.button
  height: 48px
  width: 100%
  min-height: 48px
  max-width: 328px
  padding: 12px 16px
  border-radius: 4px
  font-style: normal
  font-weight: 700
  font-size: 16px
  line-height: 24px
  background-color: $primary_button
  color: $primary_button_text
  cursor: pointer
  &:hover
   background-color: $primary_button_hover
  &:active
    background-color: $primary_button_active
  &_disabled
    @include disabled_button
    &:hover
      @include disabled_button
    &:active
      @include disabled_button

</style>
