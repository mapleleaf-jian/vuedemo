<template>
  <div class="demo">
    <h2>{{name}}</h2>
    <h2>{{address}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        name: 'java school',
        address: 'beijing'
      }
    }
  }
</script>

<style scoped>
  .demo {
    background-color: pink;
    padding: 5px;
    margin: 5px;
  }
</style>
