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

      <div class="alternative-option mt-4">
        Already have an account? <span @click="moveToLogin">Login</span>
      </div>

      <button
        type="submit"
        id="register_button"
        class="mt-4 btn-pers"
        @click="register()"
      >
        Register
      </button>

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
      // Firebase registration
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);

          // Save the username in Firestore
          db.collection("users")
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
      this.$router.push("/login");
    },
  },
};

</script>
