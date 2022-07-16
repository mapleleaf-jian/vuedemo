<template>
  <div>
    <div class="todo-footer" v-show="total">
      <label>
        <!--这里的v-model是绑定的v-model:checked-->
        <input type="checkbox" v-model="isAll">
      </label>
      <span>
         <span>已完成{{count}}</span> / 全部{{total}}
      </span>
      <button class="btn btn-danger" @click="clearThing">清除已完成任务</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyFooter',
    props: ['things'],
    computed: {
      total() {
        return this.things.length
      },
      count() {
        // return this.things.filter(i => i.isDone).length
        return this.things.reduce((pre, current) => pre + (current.isDone ? 1 : 0), 0)
      },
      isAll: {
        get() {
          return this.count === this.total && this.total > 0
        },
        set(value) {
          // this.batchCheck(value)
          this.$emit('batchCheck', value)
        }
      }
    },
    methods: {
      clearThing() {
        // this.clearDoneThing()
        this.$emit('clearDoneThing')
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
