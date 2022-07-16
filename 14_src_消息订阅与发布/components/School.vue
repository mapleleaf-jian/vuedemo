<template>
  <div class="demo">
    <h2>{{name}}</h2>
    <h2>{{address}}</h2>
  </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
    name: 'School',
    data() {
      return {
        name: 'java school',
        address: 'beijing'
      }
    },
    mounted() {
      this.pid = pubsub.subscribe('send', (msgName, data) => {
        console.log('School接收到了name', data)
      })
    },
    beforeDestroy() {
      pubsub.unsubscribe(this.pid)
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
