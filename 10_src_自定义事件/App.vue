<template>
  <div class="div">
    <h2>{{msg}}</h2>
    <!--通过父组件向子组件传递函数类型的props属性，子组件接收，实现子组件向父组件传递数据-->
    <Student :getStudentName="getStudentName"></Student>

    <!--  通过父组件给子组件绑定自定义事件，实现子向父传递数据，(写法一，使用@ 或 v-on) -->
    <!--<School @send="getSchoolName"></School>-->
    <School v-on:send.once="getSchoolName"></School>

    <!--  通过父组件给子组件绑定自定义事件，实现子向父传递数据 (写法二，使用ref) -->
    <School ref="school" @click.native="show"></School>
  </div>
</template>

<script>
import School from './components/School'
import Student from './components/Student'
export default {
  name: 'App',
  components: {School, Student},
  data() {
    return {
      msg: 'hello'
    }
  },
  methods: {
    // 执行自定义事件触发的函数(写法一)
    getSchoolName(name, ...params) {
      console.log('App接收到了学校名字', name, params)
    },
    getStudentName(name) {
      console.log('App接收到了学生名字', name)
    },
    show() {
      alert('123')
    }
  },
  // 当挂载完毕后，执行操作，执行getSchoolName函数(写法二)
  mounted() {
    this.$refs.school.$on('send', this.getSchoolName)
    this.$refs.school.$on('send', function(name, ...params) {
      console.log('App接收到了学校名字', name, params)
    })
  }
}
</script>

<style>
  .div {
    background-color: aquamarine;
    padding: 5px;
  }
</style>