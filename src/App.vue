<template>
  <div class="div">
    <h2>{{msg}}</h2>
    <School/>
    <Student/>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'
export default {
  name: 'App',
  components: {School, Student},
  data() {
    return {
      msg: 'hello'
    }
  }
}
</script>

<style>
  .div {
    background-color: aquamarine;
    padding: 5px;
  }
</style>