<template>
  <div class="texth">
    <h1>Welcome {{ username }}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
      ultricies risus, sed bibendum nunc fringilla ut. Proin a sem tincidunt,
      aliquam turpis eget, efficitur nisl.
    </p>
  </div>
  <div class="imagehelo">
    <img src="@/assets/imagehelo.jpg" alt="Image" />
  </div>
</template>

<script>
import { auth, db } from "@/firebase.js";

export default {
  data() {
    return {
      username: "",
    };
  },
  mounted() {
    this.fetchUsername();
  },
  methods: {
    fetchUsername() {
      const currentUser = auth.currentUser;
      if (currentUser) {
        db.collection("users")
          .doc(currentUser.uid)
          .get()
          .then((doc) => {
            this.username = doc.data().username;
          })
          .catch((error) => {
            console.log("Error fetching username:", error);
          }); // za display ime iz firebase
      }
    },
  },
};
</script>
<style src="../assets/styles.css"></style>
