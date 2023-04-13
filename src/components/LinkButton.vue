<template>
  <button class="button">{{text}}</button>
</template>
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
<style scoped lang="sass">
.button
  font-style: normal
  font-weight: 700
  font-size: 16px
  line-height: 20px
  padding: 2px 0
  background-color: transparent
  color: $link
  border-bottom: 2px dashed $link
  white-space: nowrap
  cursor: pointer
  transition: border-bottom-color 200ms ease
  &:hover
    border-bottom: 2px solid $link
  &:focus
    border-bottom: 2px solid $link
  &:active
    color: $link_active
    border-bottom: 2px solid $link_active
</style>
