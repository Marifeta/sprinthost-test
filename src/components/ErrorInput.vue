<template>
  <div class="error">
    <div class="error__text">{{ text }}</div>
  </div>
</template>

<style scoped lang="sass">
.error
  position: relative
  margin-top: 4px
  &__text
    position: absolute
    top: 0
    color: red
    font-size: 12px
    user-select: none
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    }
  }
}
</script>
