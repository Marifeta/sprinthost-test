<template>
  <div class="note">
    <div class="note__icon">
      <img src="../assets/i.svg" alt="info-icon">
    </div>
    <div class="note__title">{{ title }}</div>
    <div class="note__description">{{ description }}</div>
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
      type: String,
      required: true,
    }
  },
}
</script>
<style scoped lang="sass">
.note
  width: 240px
  // border: 1px solid $information_border
  box-shadow: 0 0 0 1px $information_border
  border-radius: 8px
  padding: 16px 26px 16px 16px
  &__icon
    height: 40px
    width: 40px
    min-height: 40px
    min-width: 40px
    border-radius: 20px
    background-color: $information_sign
    display: flex
    align-items: center
    justify-content: center
    margin-bottom: 4px
  &__title
    font-style: normal
    font-weight: 700
    font-size: 14px
    line-height: 20px
    color: $information_title
    margin-bottom: 4px
  &__description
    font-style: normal
    font-weight: 400
    font-size: 12px
    line-height: 16px
    color: $information_description
</style>
