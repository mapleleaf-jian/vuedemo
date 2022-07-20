<template>
  <div>
    <h3>{{name}}分类</h3>
    <slot>默认插槽默认值</slot>
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
  div {
    background-color: skyblue;
    height: 300px;
    width: 200px;
  }
</style>