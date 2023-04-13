<template>
  <div class="checkbox">
    <input
        v-model="internalChecked"
        id="ch-input"
        class="checkbox__input"
        type="checkbox"
    />
    <label
        for="ch-input"
        class="checkbox__text"
    >
      {{ text }}
    </label>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    internalChecked: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit('input', newVal)
      }
    },
  }
}
</script>
<style scoped lang="sass">
.checkbox__text+label
  display: inline-flex
  align-items: center
  user-select: none

.checkbox
  display: flex
  align-items: center
  &__input
    position: absolute
    left: -9999px
    &+label
      position: relative
      line-height: 20px
      cursor: pointer
    &+label:before
      content: ''
      display: inline-block
      width: 20px
      height: 20px
      min-height: 20px
      min-width: 20px
      box-shadow: 0 0 0 1.6px $checkbox_border
      transition: background-color 200ms ease
      margin-right: 14px
      border-radius: 2px
    &:hover+label:before
      background-color: $checkbox_border
    &:focus+label:before
      box-shadow: 0 0 0 1.6px $checkbox_focus
    &+label:after
      content: url(../assets/check.svg)
      visibility: hidden
      position: absolute
      left: 5px
    &:not(:disabled):active+label:after
      visibility: visible
    &:checked+label:after
      visibility: visible
  &__text
    font-style: normal
    font-weight: 400
    font-size: 14px
    line-height: 20px
    display: flex
    align-items: center
    color: $checkbox_text
    user-select: none
</style>
