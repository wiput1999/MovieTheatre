<template>
  <v-wait for="movie.getItems">
    <template slot="waiting">
      <div class="loader">
        <div>
          <AtomSpinner :animation-duration="1000" :size="240" color="#fff"/>
        </div>
      </div>
    </template>
    <Content/>
    <BottomBar current="payment"/>
  </v-wait>
</template>

<style lang="scss" scoped>
.loader {
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import store from '@/store'

import { AtomSpinner } from 'epic-spinners'

import Content from '@/components/payment/Content.vue'
import BottomBar from '@/components/common/BottomBar.vue'

export default {
  name: 'payment',
  props: ['id'],
  beforeMount () {
    if (!this.$store.state.login) {
      this.$router.push({ name: 'login' })
    } else {
      store.dispatch('getMovie', this.id)
    }
  },
  components: {
    Content,
    BottomBar,
    AtomSpinner
  }
}
</script>
