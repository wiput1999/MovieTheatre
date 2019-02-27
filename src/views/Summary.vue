<template>
  <div>
    <Content/>
  </div>
</template>

<script>

import Content from '@/components/movies/Content.vue'

export default {
  name: 'payment',
  beforeMount () {
    if (!this.$store.state.login) {
      this.$router.push({ name: 'login' })
    }
  },
  components: {
    Content
  }
}
</script>
