<template>
  <div>
    <div class="todo-footer">
      <label>
        <input type="checkbox"/>
      </label>
      <span>
         <span>已完成{{count}}</span> / 全部{{things.length}}
      </span>
      <button class="btn btn-danger">清除已完成任务</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyFooter',
    props: ['things'],
    computed: {
      count() {
        // return this.things.filter(i => i.isDone).length
        return this.things.reduce((pre, current) => pre + (current.isDone ? 1 : 0), 0)
      }
    }
  }
</script>

<style scoped>
  /*footer*/
  .todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
  }

  .todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  .todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
  }

  .todo-footer button {
    float: right;
    margin-top: 5px;
  }
</style>
