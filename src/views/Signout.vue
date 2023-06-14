<template>
  <div>
    <div class="text-center">You're now logged as</div>
    <div id="username_display" class="display-6">{{ this.email }}</div>
    <button id="sign_out" class="mt-4 btn btn-danger" @click="signOut">
      Logout
    </button>
  </div>
</template>

<script>
  import { firebase, db } from "@/firebase.js";

  export default {
    data() {
      return {
        email: firebase.auth().currentUser.email,
      };
    },
    methods: {
      signOut() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            console.log("Sign Out completed");
            this.$router.push("/");
          })
          .catch((error) => console.log(error));
      },
    },
  };
</script>
