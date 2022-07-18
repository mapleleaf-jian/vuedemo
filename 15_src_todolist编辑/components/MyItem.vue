<template>
  <div>
    <li>
      <label>
        <input type="checkbox" :checked="thing.isDone" @change="handleCheck(thing.id)"/>
        <!--以下代码也可实现，但是涉及到对props的修改，虽然vue监测不到，但也不建议这样写-->
        <!--<input type="checkbox" v-model="thing.isDone"/>-->
        <span v-show="!thing.isEdit">{{thing.name}}</span>
        <input v-show="thing.isEdit" type="text" :value="thing.name" @blur="handleBlur(thing, $event)"> <!--绑定失焦事件-->
      </label>
      <button class="btn btn-danger" @click="handleDelete(thing.id)">删除</button>
      <button v-show="!thing.isEdit" class="btn btn-edit" @click="handleEdit(thing)">编辑</button>
    </li>
  </div>
</template>

<script>
  export default {
    name: 'MyItem',
    props: ['thing'],
    methods: {
      // 勾选
      handleCheck(id) {
        this.$bus.$emit('changeCheck', id)
      },
      //删除
      handleDelete(id) {
        if (confirm('确认删除吗')) {
          this.$bus.$emit('deleteThing', id)
        }
      },
      handleEdit(thing) {
        // 如果thing有 isEdit 属性，直接修改
        if (thing.hasOwnProperty('isEdit')) {
          thing.isEdit = true
        } else {
          this.$set(thing, 'isEdit', true) // 添加属性isEdit
        }
      },
      handleBlur(thing, event) {
        thing.isEdit = false
        // 添加输入不能为空的判断
        if (!event.target.value.trim()) return alert('输入不能为空！')
        this.$bus.$emit('edit', thing.id, event.target.value)
      }
    }
  }
</script>

<style scoped>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }

  li:hover {
    background-color: aliceblue;
  }
  /*鼠标悬浮展示删除按钮*/
  li:hover button{
    display: block;
  }

</style>
