<template>
  <div>
    <div class="todo-header">
      <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="name" @keyup.enter="add"/>
    </div>
  </div>
</template>

<script>
  import {nanoid} from 'nanoid'
  export default {
    name: 'MyHeader',
    data() {
      return {
        name: ''
      }
    },
    props: ['addThing'],
    methods: {
      add() {
        // 数据校验
        if (!this.name.trim()) {
          alert('请输入内容！')
        } else {
          // 组装thing
          const thing = {id: nanoid(), name: this.name.trim(), isDone: false}
          this.addThing(thing) // 本质是由父组件调用的
        }
        // 输入框置空
        this.name = ''
      }
    }
  }
</script>

<style scoped>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
