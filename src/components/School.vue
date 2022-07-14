<template>
  <!--组件的结构-->
  <div class="demo">
    <h3>学校地址：{{address}}</h3>
    <button @click="showInfo">点击展示地址</button>
  </div>
</template>

<script>
  // 组件交互相关的代码(数据、方法等)
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'School',
    data() {
      return {
        address: 'beijing'
      }
    },
    methods: {
      showInfo() {
        alert(this.address)
      }
    }
  }
</script>

<style>
  /*组件的样式*/
  .demo {
    background-color: aquamarine;
  }
</style>
