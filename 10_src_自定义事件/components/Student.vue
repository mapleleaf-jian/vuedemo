<template>
  <div class="demo">
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
    <button @click="sendStudentName">传递学生名给App</button>
  </div>
</template>

<script>
  export default {
    name: 'Student',
    props: ['getStudentName'],
    data() {
      return {
        name: 'zhang',
        age: 18
      }
    },
    methods: {
      sendStudentName() {
        this.getStudentName(this.name)
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