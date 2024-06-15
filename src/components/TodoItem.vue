<template>
  <div class="todo_item">
    <h3 v-if="!editing">{{ todo.title }}</h3>

    <input v-bind:value="todoText" @change="todoTextEdit" v-else type="text" />

    <div>
      <input :checked="completed" class="mr-1" @change="onCompleted(todo)" type="checkbox" />
      <label class>Completed</label>
    </div>

    <button @click="updateTodoInput(todo)" id="edit">{{ editing ? 'Update Todo' : 'Edit' }}</button>
    <button @click="deleteTodo(todo)" id="delete">Delete</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    todo: {}
  },

  data() {
    return {
      todoText: '',
      completed: false,
      editing: false
    }
  },

  methods: {
    ...mapActions(['deleteTodo', 'updateTodo', 'markDone']),

    onCompleted(todo) {
      this.completed = this.completed == true ? false : true

      if (this.completed) {
        this.completed = todo.done
        this.markDone(todo)
      } else {
        todo.done = this.completed
        this.completed = false
      }
    },

    todoTextEdit(e) {
      this.todoText = e.target.value
    },

    updateTodoInput(todo) {
      this.editing = this.editing ? false : true

      if (this.editing) {
        this.todoText = todo.title
        this.updateTodo(todo)
      } else {
        todo.title = this.todoText
      }
    }
  }
}
</script>

<style>
.todo_item {
  margin: auto;
  width: 300px;
  padding: 10px;
}

button#delete {
  background-color: rgb(94, 59, 59);
  padding: 5px;
}

button#edit {
  background-color: rgb(54, 106, 54);
  padding: 5px;
}
</style>
