<template>
  <div>
    <p>消息id：{{id}}</p>
    <p>消息详细：{{name}}</p>
<!--    <p>a：{{a}}</p>-->
<!--    <p>b：{{b}}</p>-->
  </div>
</template>

<script>
export default {
  name: 'Detail',
  props: ['id', 'name']
  // props: ['a', 'b']
}
</script>