<script>
import Category from '@/features/Category'

export default {
  name: 'App',
  components: {
    Category
  }
}
</script>
<template>
  <div id="app">
    <category/>
  </div>
</template>
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
