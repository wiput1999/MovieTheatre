<template>
  <div>
    <Content/>
    <BottomBar current="movie"/>
  </div>
</template>

<script>

import Content from '@/components/movies/Content.vue'
import BottomBar from '@/components/common/BottomBar.vue'

export default {
  name: 'movies',
  components: {
    Content,
    BottomBar
  }
}
</script>
