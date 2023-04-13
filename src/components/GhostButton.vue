<template>
  <button
      class="button"
  >
    {{ text }}
    <img
        v-if="iconUrl"
        class="button__icon"
        :src="require(`@/assets/${iconUrl}`)"
        alt="icon"
    />
  </button>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    iconUrl: {
      type: String,
      required: false,
    },
  },
}
</script>
<style scoped lang="sass">
.button
  height: 40px
  min-height: 40px
  max-width: 252px
  border-radius: 4px
  font-style: normal
  font-weight: 700
  font-size: 16px
  line-height: 24px
  padding: 4px 16px
  border: 1px solid $secondary_button_border
  background-color: $secondary_button
  color: $secondary_button_text
  display: flex
  align-items: center
  justify-content: center
  white-space: nowrap
  cursor: pointer
  outline: none
  &:hover
    box-shadow: 0 0 2px 0 $secondary_button_border
  &:focus
    box-shadow: 0 0 2px 0 $secondary_button_border
  &:active
    box-shadow: 0 0 2px 0 $secondary_button_border
    border: 2px solid $secondary_button_border_active
  &__icon
    margin-left: 14px
</style>
