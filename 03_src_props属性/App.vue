<template>
  <div>
    <!--  相当于 v-bind: 传数据，执行""里面的js表达式，传的就是一个数字18，而不是字符串  -->
    <Student name="李四" :age="15"></Student>
  </div>
</template>

<script>
import Student from './components/Student'
export default {
  name: 'App',
  components: {Student}
}
</script>
