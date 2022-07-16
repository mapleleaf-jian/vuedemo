<template>
  <div class="demo">
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
    <button @click="sendStudentName">传递name给School</button>
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
    },
    methods: {
      sendStudentName() {

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