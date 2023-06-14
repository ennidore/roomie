<template>
  <div>
    <div class="addTask">
      <form @submit.prevent="addTask">
        <input v-model="newTask.title" type="text" placeholder="TaskTitle" />
        <input v-model="newTask.date" type="date" />
        <button type="submit">Add Task</button>
      </form>
    </div>
    <div class="task-list">
      <div v-for="task in tasks" :key="task.id" class="task-box">
        <div class="task-header">
          <div>{{ task.title }}</div>
          <button class="remove-button" @click="removeTask(task.id)">X</button>
        </div>
        <div>{{ task.date }}</div>
        <button
          class="done-button"
          @click="toggleTaskDone(task)"
          :disabled="task.done"
        >
          {{ task.done ? "Done" : "Not done" }}
        </button>
        <!-- addanje done, not done i kad je done da se vise nemoze stisnuti done-->
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { db } from "../firebase";

export default {
  setup() {
    const tasks = ref([]);
    const newTask = ref({
      title: "",
      date: "",
      done: false,
    });

    const addTask = () => {
      // dodavanje taska
      const { title, date } = newTask.value;
      if (title.trim() !== "" && date !== "") {
        const formattedDate = new Date(date).toLocaleDateString("en-GB");
        const newTaskData = {
          title,
          date: formattedDate,
          done: false,
        };
        db.collection("tasks") // spremanje taska
          .add(newTaskData)
          .then((docRef) => {
            console.log("Task added with ID: ", docRef.id);
            newTask.value.title = "";
            newTask.value.date = "";
          })
          .catch((error) => {
            console.error("Error adding task: ", error);
          });
      }
    };

    const removeTask = (taskId) => {
      // removanje taska
      db.collection("tasks")
        .doc(taskId)
        .delete()
        .then(() => {
          console.log("Task removed successfully");
        })
        .catch((error) => {
          console.error("Error removing task:", error);
        });
    };

    const toggleTaskDone = (task) => {
      //toggle task done not done
      const taskRef = db.collection("tasks").doc(task.id);
      taskRef
        .update({
          done: !task.done,
        })
        .then(() => {
          console.log("Task updated successfully");
        })
        .catch((error) => {
          console.error("Error updating task:", error);
        });
    };

    db.collection("tasks").onSnapshot((snapshot) => {
      tasks.value = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    });

    return {
      tasks,
      newTask,
      addTask,
      removeTask,
      toggleTaskDone,
    };
  },
};
</script>
<style src="../assets/styles.css"></style>
