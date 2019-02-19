<template>
  <div class="navbar">
    <div class="navbar-container">
      <div class="navbar-header">
        <p>MOVIE THEATRE</p>
      </div>
      <div class="navbar-wrapper">
        <ul class="navbar-menu-group"></ul>
        <ul class="navbar-menu-group">
          <li>Home</li>
          <li>Movie</li>
          <li>Promotion</li>
          <li>Sign in</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  width: 100%;
  z-index: 2;
}

.navbar-container {
  margin: 0 auto;
  padding: 0 3em;
  width: 80vw;
  height: 70px;
  display: flex;
  border-bottom: #707070 solid 2px;
}

.navbar-header {
  display: flex;
  align-items: center;
  p {
    display: flex;
  }
}

.navbar-wrapper {
  display: flex;
  justify-content: space-between;
  flex: 1 1 auto;
}

.navbar-menu-group {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0px;
  padding: 0px;

  li {
    display: list-item;
    margin-left: 1.4em;
  }
}
</style>
