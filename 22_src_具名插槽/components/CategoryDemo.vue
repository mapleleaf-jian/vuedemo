<template>
  <div class="demo">
    <h3>{{name}}分类</h3>
    <!--给插槽起名字-->
    <slot name="center">center具名插槽默认值</slot>
    <slot name="footer">footer具名插槽默认值</slot>
  </div>
</template>

<script>
export default {
  name: 'CategoryDemo',
  props: ['name', 'dataList']
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