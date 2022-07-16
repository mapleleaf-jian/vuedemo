<template>
  <div class="demo">
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    data() {
      return {
        name: 'zhang',
        age: 18
      }
    }
  }
</script>

<style scoped>
  .demo {
    background-color: gray;
    padding: 5px;
    margin: 5px;
  }
</style>