<template>
  <!--组件的结构-->
  <div class="demo">
    <h2>{{msg}}</h2>
    <h3>姓名：{{name}}</h3>
    <h3>年龄：{{age + 1}}</h3>
    <h3>性别：{{sex}}</h3>
  </div>
</template>

<script>
  // 组件交互相关的代码(数据、方法等)
  export default {
    name: 'Student',
    data() {
      return {
        msg: '这是学生信息'
      }
    },
    // 简单声明接收
    // props: ['name', 'age', 'sex']
    // 接收的时候判断类型
    // props: {
    //   name: String,
    //   age: Number,
    //   sex: String
    // }
    props: {
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        default: 10
      },
      sex: {
        type: String,
        required: false,
        default: '男'
      }
    }
  }
</script>
