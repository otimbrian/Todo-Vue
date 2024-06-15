<script setup>
import DotoList from './components/TodoList.vue'
import DotoInput from './components/TodoInput.vue'
</script>

<template>
  <header>
    <h1>A Todo App</h1>
    <DotoInput />
  </header>
  <body>
    <div class="wrapper">
      <DotoList />
    </div>
  </body>
</template>

<style scoped>
.wrapper {
  align-items: center;
}

h1 {
  padding: 10px;
}
</style>
