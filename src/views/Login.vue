<template>
  <div class="container">
    <form @submit.prevent="Login">
      <h2 class="mb-3">Login</h2>
      <div class="input">
        <label for="email">Email address</label>
        <input
          class="form-control"
          type="text"
          required
          v-model="email"
          name="email"
          placeholder="email@adress.com"
        />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input
          class="form-control"
          type="password"
          required
          v-model="password"
          name="password"
          placeholder="password"
        />
      </div>
      <div
  class="alert alert-warning alert-dismissible fade show mt-5"
  role="alert"
  v-if="errorMessage"
>
  {{ errorMessage }}
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="alert"
    aria-label="Close"
  ></button>
</div>

      <div class="alternative-option mt-4">
        You don't have an account? <span @click="moveToRegister">Register</span>
      </div>
      <button
        type="submit"
        class="mt-4 btn-pers"
        id="login_button"
        @click="login()"
      >
        Login
      </button>
      <div
        class="alert alert-warning alert-dismissible fade show mt-5 d-none"
        role="alert"
        id="alert_1"
      >
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </form>
  </div>
</template>

<script>
import { firebase, db } from "@/firebase.js";
export default {
  data() {
  return {
    email: "",
    password: "",
    errorMessage: "" 
  };
},

  methods: {
    login() {
  console.log("ENTERED METHOD: login");
  firebase
    .auth()
    .signInWithEmailAndPassword(this.email, this.password)
    .then((userCredential) => {
      console.log(
        "succesfully logged in with credential: " +
          userCredential.user.email
      );
      this.$router.push("/");
    })
    .catch((error) => {
      console.log(error);
      this.errorMessage = "Wrong email or password";  // Set the error message
    });
},

    moveToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>
