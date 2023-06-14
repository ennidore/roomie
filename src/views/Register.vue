<template>
  <div class="container">
    <form @submit.prevent="Register">
      <h2 class="mb-3">Register</h2>
      <div class="input">
        <label for="username">Username</label>
        <input
          class="form-control"
          type="text"
          required
          v-model="username"
          name="username"
          placeholder="Enter your username"
        />
      </div>
      <!-- addanje username-->

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
      <!-- addanje emaila-->
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
      <!-- addanje sifre-->

      <div class="alternative-option mt-4">
        Already have an account? <span @click="moveToLogin">Login</span>
        <!-- ako imamo acc prebacuje nas na login page-->
      </div>

      <button
        type="submit"
        id="register_button"
        class="mt-4 btn-pers"
        @click="register()"
      >
        Register
      </button>
      <!-- register button -->

      <div
        class="alert alert-warning alert-dismissible fade show mt-5 d-none"
        role="alert"
        id="alert_2"
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
      username: "",
    };
  },
  methods: {
    register() {
      console.log("ENTERED METHOD: register");

      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user; //firebase registracija
          console.log(user);

          db.collection("users") // spremanje username u firebase
            .doc(user.uid)
            .set({
              username: this.username,
            })
            .then(() => {
              console.log("User data saved successfully");
              this.$router.push("/");
            })
            .catch((error) => {
              console.log("Error saving user data:", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          let alert_2 = document.querySelector("#alert_2");
          alert_2.classList.remove("d-none");
          alert_2.innerHTML = errorMessage;
          console.log(alert_2);
        });
    },
    moveToLogin() {
      this.$router.push("/login"); //prebacijavnje na login
    },
  },
};
</script>
