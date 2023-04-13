<template>
  <div class="settings">
    <Topic
        class="settings__topic"
        :title="'Пароли для FTP и SSH'"
        :description="['По умолчанию для авторизации используется пароль от профиля.',
        'Сменить пароль, узнать сервер и IP адрес можно в разделе «Управление сайтами».']"
    >
      <GhostButton
          class="settings__button"
          :text="'Управление сайтами'"
          :icon-url="'Stroke.svg'"
      />
      <LinkButton :text="'Как настроить?'" />
    </Topic>
    <div class="settings__image-topic">
      <Topic
          :title="'Доступ для разработчиков'"
          :description="['Безопасная передача прав для управления и настройки сайтов, с помощью функции делегирования доступа.']"
      >
        <GhostButton
            :text="'Связанные аккаунты'"
        />
      </Topic>
      <img class="settings__image" src="../assets/Group1.svg" alt="violet cat">
    </div>
  </div>
</template>
<script>
import Topic from "../components/TopicItem";
import GhostButton from "../components/GhostButton";
import LinkButton from "../components/LinkButton";
export default {
  components: {
    LinkButton,
    GhostButton,
    Topic,
  },
}
</script>

<style scoped lang="sass">
.settings
  &__topic
    margin-bottom: 64px
  &__button
    margin-right: 24px
  &__image-topic
    display: flex
    gap: 24px 99px
@media (max-width: 736px)
  .settings
    &__topic
      margin-bottom: 100px
    &__button
      margin-bottom: 12px
    &__image-topic
      flex-wrap: wrap-reverse
      justify-content: flex-end

</style>
