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
    <h3>To do List</h3>
    <div v-for="todo in getAllTodos" :key="todo.id">
      <TodoItem :todo = "todo"/>
    </div>
  </div>
  <!-- <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div> -->
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
