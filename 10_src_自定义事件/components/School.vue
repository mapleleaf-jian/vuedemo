<template>
  <div class="demo">
    <h2>{{name}}</h2>
    <h2>{{address}}</h2>
    <button @click="sendSchoolName">传递学校名给App</button>
    <button @click="unbind">解绑自定义事件send</button>
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
    methods: {
      // 按钮触发的时候，使用 $emit 执行本组件的自定义事件，并将值传递到父组件
      sendSchoolName() {
        this.$emit('send', this.name,1,2,3)
      },
      unbind() {
        this.$off('send')
        // this.$off(['send', 'send2'])
        // this.$off()
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
