<template>
  <div class="demo">
    <h3>{{title}}分类</h3>
    <slot :balls="balls">插槽默认值</slot>
  </div>
</template>

<script>
export default {
  name: 'CategoryDemo',
  props: ['title'],
  data() {
    return {
      balls: ['football', 'basketball', 'volleyball']
    }
  }
}
</script>

<style scoped>
  h3 {
    background-color: orange;
    text-align: center;
  }
  .demo {
    background-color: skyblue;
    height: 300px;
    width: 200px;
  }
</style>