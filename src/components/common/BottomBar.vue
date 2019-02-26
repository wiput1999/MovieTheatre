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
  background: linear-gradient(
    to right,
    #2e8bce,
    #3593d4,
    #3b9adb,
    #42a2e1,
    #49aae7,
    #48a1de,
    #4798d5,
    #468fcc,
    #3e74b1,
    #375a96,
    #2f427a,
    #272a5f
  );
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
  color: rgb(255, 255, 0);
  font-weight: bold;
}

@media (max-width: 1200px) {
  .bottom-bar-container {
    width: 95vw;
    padding: 0;
  }

  .bottom-bar-wrapper {
    justify-content: center;

    div {
      display: none;
    }
  }

  .active {
    display: inline-flex !important;
  }
}
</style>
