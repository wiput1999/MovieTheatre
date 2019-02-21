<template>
  <div>
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
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  width: 100%;
  height: 70px;
  z-index: 2;
  background: rgba(121, 121, 121, 0.8);
}

@supports (
  (-webkit-backdrop-filter: blur(20px)) or (backdrop-filter: blur(20px))
) {
  .navbar {
    background: rgba(54, 54, 54, 0.6);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
  }
}

.navbar-container {
  margin: 0 auto;
  padding: 0 3em;
  width: 80vw;
  height: 70px;
  display: flex;
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
    border-bottom: #fff solid 2px;
  }

  a:hover {
    border-bottom: #fff solid 2px;
  }
}

.button {
  padding: 0.3em 1.7em;
  border: #fff solid 2px;
  border-radius: 25px;
}
</style>
