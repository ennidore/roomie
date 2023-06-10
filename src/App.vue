<template>
  <nav>
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="HomeView.vue">Roomie</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/comment">Comment</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/Login">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Register">Register</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/Signout">Logout</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </nav>
  <!-- v-if="!store.currentUser" -->
  <router-view />
  <div class="background">
    <img class="background-image" src="@/assets/backgr.jpg" />
  </div>
</template>

<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .navbar .navbar-nav {
    margin-left: auto;
    font-weight: normal;
    font-size: 25px;
    letter-spacing: 0.5px;
    padding: 0;
    margin-right: 30px;
    text-transform: uppercase;
    transition: all 0.4s ease;
    font-family: Arial, Helvetica, sans-serif;
  }
  .navbar .nav-item {
    margin-left: 55px;
    font-size: 20px;
  }
  .navbar .navbar-brand {
    font-weight: normal;
    font-size: 35px;
    margin-left: 30px;
    color: rgba(0, 255, 255, 0.659);
  }
  .navbar .nav-link {
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 0.5px;
    padding: 0;
    text-transform: uppercase;
    transition: all 0.4s ease;
    font-family: Arial, Helvetica, sans-serif;
    color: rgba(0, 255, 255, 0.659);
    margin-right: 30px;
  }
  .navbar {
    background-color: rgba(163, 28, 48, 0.723);
  }
  .navbar .nav-link:hover {
    color: whitesmoke;
  }
  .background .background-img {
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    opacity: 0.9;
    filter: blur(2px);
    z-index: -1;
    position: relative;
  }

  .background img {
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 0.9;
    filter: blur(2px);
  }
</style>
<script>
  export default {};

  import store from "./store";
  import { firebase } from "@/firebase.js";
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log("***", user.email);
      store.currentUser = user.email;
    } else {
      console.log("*** no user");
      store.currentUser = null;
    }
  });
</script>
