<template>
  <div id="app">
    <Addtodo />
    <FilterTodos />
    <Todos />
  </div>
</template>

<script>
import Todos from './components/Todos';
import Addtodo from './components/Addtodos';
import FilterTodos from './components/FilterTodos';

export default {
  name: 'app',
  components: {
    Todos,
    Addtodo,
    FilterTodos
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
