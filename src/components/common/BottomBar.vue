<template>
  <div class="bottom-bar">
    <div class="bottom-bar-container">
      <div class="bottom-bar-wrapper">
        <div v-bind:class="{ active: current === 'movie' }">movie and location</div>
        <div v-bind:class="{ active: current === 'time' }">select time</div>
        <div v-bind:class="{ active: current === 'seat' }">select seats</div>
        <div v-bind:class="{ active: current === 'payment' }">confirm payment</div>
        <div v-bind:class="{ active: current === 'finish' }">finish</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['current']
}
</script>

<style lang="scss" scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  z-index: 2;
  background: rgba(121, 121, 121, 0.8);
}

@supports (
  (-webkit-backdrop-filter: blur(20px)) or (backdrop-filter: blur(20px))
) {
  .bottom-bar {
    background: rgba(54, 54, 54, 0.6);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
  }
}

.bottom-bar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 3em;
  width: 60vw;
  height: 50px;
}

.bottom-bar-wrapper {
  display: flex;
  justify-content: space-between;
  flex: 1 1 auto;

  div {
    text-transform: uppercase;
  }
}

.active {
  color: rgb(193, 0, 0);
}

@media (max-width: 400px) {
  .bottom-bar-container {
    width: 95vw;
    padding: 0;
    text-align: center;
  }
}
</style>
