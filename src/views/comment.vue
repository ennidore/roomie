<template>
  <div>
    <h1>Welcome, {{ username }}</h1>
    <input v-model="newComment" type="text" placeholder="Add comment" :disabled="!isUserLoggedIn">
    <button @click="addComment" :disabled="!isUserLoggedIn">Add</button>
    <div v-for="comment in comments" :key="comment.id">
      <strong>{{ comment.username }}</strong>: {{ comment.text }}
      <button v-if="comment.username === username" @click="deleteComment(comment.id)">Delete</button>
    </div>
  </div>
</template> <!-- Kreacija tablica i add + delete gumb comment -->
<style src="@/assets/styles.css"></style>


<script>
import { firebase, db } from "@/firebase.js";

export default {
  data() {
    return {
      newComment: '',
      comments: [],
      username: '',
      isUserLoggedIn: false
    }
  },
  methods: {
    addComment() {
      db.collection('comments') //kolekcija comments u firebase
        .add({
          text: this.newComment,
          timestamp: new Date(),
          username: this.username
        })
        .then(() => {
          this.newComment = ''
        })
    }, 
    deleteComment(commentId) {
      db.collection('comments').doc(commentId).delete(); //delete comment
    }
  },
  async mounted() {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        this.isUserLoggedIn = true;
        const doc = await db.collection('users').doc(user.uid).get();
        if (doc.exists) {
          this.username = doc.data().username;
        } else {
          console.log('No such document!');
        }
      } else {
        console.log('No user is signed in'); //ako user nije connected u consoli
        this.isUserLoggedIn = false;
      }
    });

    db.collection('comments')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        this.comments = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
      })
  }
}
</script>

