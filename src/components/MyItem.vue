<template>
  <div>
    <li>
      <label>
        <input type="checkbox" :checked="thing.isDone" @change="handleCheck(thing.id)"/>
        <!--以下代码也可实现，但是涉及到对props的修改，虽然vue监测不到，但也不建议这样写-->
        <!--<input type="checkbox" v-model="thing.isDone"/>-->
        <span>{{thing.name}}</span>
      </label>
      <button class="btn btn-danger" @click="handleDelete(thing.id)" :deleteThing="deleteThing">删除</button>
    </li>
  </div>
</template>

<script>
  export default {
    name: 'MyItem',
    props: ['thing', 'changeCheck', 'deleteThing'],
    methods: {
      // 勾选
      handleCheck(id) {
        this.changeCheck(id)
      },
      //删除
      handleDelete(id) {
        if (confirm('确认删除吗')) {
          this.deleteThing(id)
        }
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

  li:hover button{
    display: block;
  }

</style>
