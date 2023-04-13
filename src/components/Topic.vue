<template>
  <div class="topic">
    <h4 class="topic__title">{{ title }}</h4>
    <p class="topic__paragraph"
        v-for="(text, idx) in description"
        :key="idx"
    >
      {{ text }}
    </p>
    <div class="topic__footer">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: Array,
      required: true,
    },
  }
}
</script>

<style scoped lang="sass">
.topic
  &__title
    font-style: normal
    font-weight: 700
    font-size: 22px
    line-height: 24px
    color: $sub_title
    margin-bottom: 18px
  &__paragraph
    font-style: normal
    font-weight: 400
    font-size: 14px
    line-height: 20px
    color: $description
    &:last-of-type
      margin-bottom: 18px
  &__footer
    display: flex
    align-items: center
    flex-wrap: wrap

</style>
