<template>
  <div id="app">
    <ResetPassword />
  </div>
</template>

<script>
import ResetPassword from "./pages/ResetPassword";
export default {
  name: 'App',
  components: {
    ResetPassword,
  }
}
</script>

<style lang="sass">

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap')

*
  box-sizing: border-box
  border: none
  padding: 0
  margin: 0
  font-family: 'Open Sans', sans-serif
  outline-color: #b8b8b8
li
  list-style-type: none
#app
  position: relative
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  @include global_desktop_padding
@media (max-width: 736px)
  #app
    @include global_mobile_padding
</style>
