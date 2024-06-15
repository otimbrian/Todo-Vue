<script>
import TodoItem from './TodoItem.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    TodoItem
  },

  computed: {
    ...mapGetters(['getAllTodos'])
  }
}
</script>

<template>
  <div>
    <h2>To do List</h2>
    <div v-for="todo in getAllTodos" :key="todo.id">
      <TodoItem :todo="todo" />
    </div>
  </div>
</template>

<style></style>
