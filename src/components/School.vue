<template>
  <div>
    <h2 @click="showName">{{name | mySlice}}</h2>
    <input v-fbind="name"> <br/><br/>
    <button @click="test">测试hello方法</button>
  </div>
</template>

<script>
  export default {
    name: 'School',
    data() {
      return {
        name: 'java school'
      }
    },
    methods: {
      test() {
        this.hello()
      }
    }
  }
</script>
