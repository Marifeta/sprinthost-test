<template>
  <div class="title">
    <h3 class="title__text">{{ text }}</h3>
    <div class="title__line"></div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="sass">
.title
  &__text
    font-style: normal
    font-weight: 700
    font-size: 26px
    line-height: 28px
    margin-bottom: 14px
    color: $page_title
  &__line
    width: 100%
    border: 1px solid rgba(0, 0, 0, 0.08)
    margin-bottom: 64px
</style>
