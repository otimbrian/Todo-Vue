<template>
  <div>
    <input
      type="text"
      @change="todoChange"
      v-bind:value="todoText"
      placeholder="Enter your todo Item"
    />

    <button @click="addTodoInput(todoText)">Create Todo</button>
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

<style></style>
