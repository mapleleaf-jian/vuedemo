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
    },
    mounted() {
      this.$bus.$on('send', value => {
        console.log('School组件收到了name: ', value)
      })
    },
    beforeDestroy() {
      // 在School 组件销毁前，解绑send事件
      this.$bus.off('send')
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
