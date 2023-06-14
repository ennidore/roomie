<template>
  <div class="comment">
    <textarea
      class="form-control commentbox"
      v-model="newComment"
      rows="2"
      placeholder="Add comment"
    ></textarea>
    <!-- addanje text area -->
    <button class="btn btn-primary mt-2" @click="addComment">Add</button>
    <div v-for="comment in comments" :key="comment.id">
      <div class="commentDate">{{ formatDate(comment.timestamp) }}</div>
      <!-- formatiranje datuma iznad komentara -->
      <div class="commentData">
        {{ formatTime(comment.timestamp) }} -
        <span class="username">{{ comment.username }}</span
        >: {{ comment.text }}
        <button
          v-if="comment.userId === userId"
          class="btn btn-danger"
          @click="deleteComment(comment)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<style src="../assets/styles.css"></style>
<!-- spajanje na styles.css -->

<script>
import { firebase, db } from "@/firebase.js"; //importanje firebase

export default {
  data() {
    return {
      newComment: "",
      comments: [],
      userId: null,
      username: null,
    };
  }, // atributi
  methods: {
    addComment() {
      if (this.newComment.trim() !== "" && this.username) {
        db.collection("comments")
          .add({
            text: this.newComment,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            userId: this.userId,
            username: this.username,
          })
          .then(() => {
            this.newComment = "";
          });
      } // addanje komentara u firebase
    },
    deleteComment(comment) {
      if (comment.userId === this.userId) {
        db.collection("comments").doc(comment.id).delete();
      } // brisanje iz firebase
    },
    formatDate(timestamp) {
      if (timestamp) {
        const date = timestamp.toDate();
        return date.toLocaleDateString("en-GB");
      } // eu formatiranje datuma
      return "";
    },
    formatTime(timestamp) {
      if (timestamp) {
        const date = timestamp.toDate();
        return date.toLocaleTimeString("en-GB");
      }
      return "";
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.userId = user.uid;
        db.collection("users") // upisivanje u users collection u firebase
          .doc(user.uid)
          .get()
          .then((doc) => {
            this.username = doc.data().username;
          });
      }
    });
  },
  mounted() {
    db.collection("comments")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        this.comments = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })); // fetchanje komenta iz firestore
      });
  },
};
</script>
