<template>
  <div
      class="input"
      :class="{
        'input_focus': isFocused,
      }"
  >
    <label class="input__title">
      {{ title }}
      <input
          v-model="internalValue"
          type="text"
          class="input__text"
          :placeholder="placeholder"
          @focus="isFocused = true"
          @blur="isFocused = false"
      >
    </label>
    <transition name="fade-away-text">
      <ErrorInput
          v-if="error"
          :key="error.description"
          :text="error.description"
      />
    </transition>
  </div>
</template>

<script>
import ErrorInput from "./ErrorInput";
export default {
  components: {ErrorInput},
  props: {
    title: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    value: {
      type: String,
      required: true,
    },
    error: {
      type: Symbol,
      required: false
    },
  },
  data() {
    return {
      isFocused: false,
    };
  },
  computed: {
    internalValue: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit('input', newVal)
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
::placeholder
  font-style: normal
  font-weight: 400
  font-size: 16px
  line-height: 32px
  color: $input_placeholder
.input
  box-shadow: 0 1px 0 0 $input_border
  transition: box-shadow 100ms ease
  &_focus
    box-shadow: 0 2px 0 0 $input_border
  &__title
    font-style: normal
    font-weight: 700
    font-size: 12px
    line-height: 16px
    letter-spacing: 0.03em
    display: flex
    flex-direction: column
  &__text
    padding: 0 8px
    font-style: normal
    font-weight: 400
    font-size: 16px
    line-height: 32px
    margin-top: 2px
    outline: none
    color: $input_text
    caret-color: $primary_button
    &:placeholder-shown
      text-overflow: ellipsis



</style>
