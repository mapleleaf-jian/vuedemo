<template>
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <MyHeader :addThing="addThing"/>
          <MyList :things="things" :changeCheck="changeCheck" :deleteThing="deleteThing"/>
          <MyFooter :things="things"/>
        </div>
      </div>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
import MyItem from './components/MyItem'
import MyFooter from './components/MyFooter'

export default {
  name: 'App',
  components: {MyHeader, MyFooter, MyItem, MyList},
  data() {
    return {
      things: [
        {id: '001', name: '看电视', isDone: false},
        {id: '002', name: '吃饭', isDone: true},
        {id: '003', name: '睡觉', isDone: false}
      ]
    }
  },
  methods: {
    // 实现在things数组首位添加一个输入的thing
    addThing(thing) {
      this.things.unshift(thing)
    },
    // 处理勾选或取消勾选
    changeCheck(id) {
      this.things.forEach((thing) => {
        if (thing.id === id) {
          thing.isDone = !thing.isDone
        }
      })
    },
    // 删除
    deleteThing(id) {
      this.things = this.things.filter(i => i.id !== id)
    }
  }
}
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
