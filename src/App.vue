<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Raleway:200,300,400,500,600,700");
@import url("https://cdn.jsdelivr.net/npm/heyui/themes/index.css");

body {
  font-family: "Raleway", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #2f2e2e;
  margin: 0;
  padding: 0;
}

#app {
  color: #fff;
}

.h-form .h-form-item-label {
  color: #fff;
}
</style>
