<template>
  <div class="navbar">
    <div class="navbar-container">
      <div class="navbar-header">
        <p>MOVIE THEATRE</p>
      </div>
      <div class="navbar-wrapper">
        <ul class="navbar-menu-group"></ul>
        <ul class="navbar-menu-group">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/movies">Movie</router-link>
          </li>
          <li>
            <router-link to="/promotions">Promotion</router-link>
          </li>
          <li>
            <router-link to="/login" class="button">SIGN IN</router-link>
          </li>
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
  background: rgba(47, 46, 46, 0.8);
}

.navbar-container {
  margin: 0 auto;
  padding: 0 3em;
  width: 80vw;
  height: 70px;
  display: flex;
  border-bottom: #fff solid 2px;
}

.navbar-header {
  display: flex;
  align-items: center;
  p {
    display: flex;
    font-size: 1.3em;
    font-weight: 600;
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
  font-size: 0.9em;
  text-transform: uppercase;

  li {
    display: list-item;
    margin-left: 1.4em;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  a.router-link-exact-active {
    text-decoration: underline;
  }

  a:hover {
    text-decoration: underline;
  }
}

.button {
  padding: 0.3em 1.7em;
  border: #fff solid 2px;
  border-radius: 25px;
}
</style>
