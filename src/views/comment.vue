<template>
  <div>
    <input v-model="newComment" type="text" placeholder="Add comment">
    <button @click="addComment">Add</button>
    <div v-for="comment in comments" :key="comment.id">
      {{ comment.text }}
    </div>
  </div>
</template>

<script>
import { firebase, db } from "@/firebase.js";

export default {
  data() {
    return {
      newComment: '',
      comments: []
    }
  },
  methods: {
    addComment() {
      db.collection('comments')
        .add({
          text: this.newComment,
          timestamp: new Date()
        })
        .then(() => {
          this.newComment = ''
        })
    }
  },
  mounted() {
    db.collection('comments')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        this.comments = snapshot.docs.map(doc => doc.data())
      })
  }
}
</script>
