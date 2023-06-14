<template>
  <nav>
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="/">Roomie</a>
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
            <router-link to="/Tasks">Tasks</router-link>
          </li>
          <li class="nav-item" v-if="!isUserLoggedIn">
            <router-link to="/Login">Login</router-link>
          </li>
          <li class="nav-item" v-if="!isUserLoggedIn">
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
@import "./assets/styles.css";
</style>
<script>
import { firebase } from "@/firebase.js";
export default {
  data() {
    return {
      isUserLoggedIn: false,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("***", user.email);
        this.isUserLoggedIn = true;
      } else {
        console.log("*** no user");
        this.isUserLoggedIn = false;
      }
    });
  },
};
</script>
