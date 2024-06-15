<template>
  <div class="input_div">
    <input
      class="todo_input"
      type="text"
      @change="todoChange"
      v-bind:value="todoText"
      placeholder="Enter your todo Item"
    />

    <button id="input_button" @click="addTodoInput(todoText)">Create Todo</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { v4 } from 'uuid'

export default {
  data() {
    return {
      todoText: ''
    }
  },

  methods: {
    ...mapActions(['addTodo']),

    todoChange(e) {
      this.todoText = e.target.value
    },

    addTodoInput() {
      this.addTodo({
        id: v4(),
        title: this.todoText,
        done: false
      })

      this.todoText = ''
    }
  }
}
</script>

<style>
.input_div {
  margin: auto;
  width: 70%;
  padding: 10px;
}
input.todo_input {
  width: 350px;
  padding: 12px 20px;
  margin: 8px 0;
  border: 3px solid #555;
  border-radius: 8%;
}

#input_button {
  background-color: rgb(54, 106, 54);
}
</style>
