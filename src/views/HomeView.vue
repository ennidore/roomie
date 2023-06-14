<template>
  <div class="texth">
    <h1>Welcome {{ username }}</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt
      ultricies risus, sed bibendum nunc fringilla ut. Proin a sem tincidunt,
      aliquam turpis eget, efficitur nisl.
    </p>
  </div>
  <div class="image">
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
          });
      }
    },
  },
};
</script>

<style>
.image {
  margin-top: 20px;
  width: 80rem;
  height: 48rem;
  margin-left: 16%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 2);
  border-radius: 50%;
  overflow: hidden;
}

.image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
