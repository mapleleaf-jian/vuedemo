<template>
  <div>
    <p style="color: skyblue">Count组件的和为：{{sum}}</p>
    <input type="text" placeholder="请输入姓名" v-model="name">
    <button @click="addPerson">添加</button>
    <button @click="addPersonWang">添加王</button>
    <button @click="addPersonServer">添加随机成员</button><br/>
    <h4>第一个成员是：{{firstPerson.name}}</h4>
    <ul>
      <li v-for="p of persons" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: 'PersonDemo',
  data() {
    return {
      name: ''
    }
  },
  computed: {
    persons() {
      return this.$store.state.personOptions.persons
    },
    sum() {
      return this.$store.state.countOptions.sum
    },
    firstPerson() {
      return this.$store.getters['personOptions/firstPerson']
    }
  },
  methods: {
    addPerson() {
      const person = {id: nanoid(), name: this.name}
      this.$store.commit('personOptions/ADD_PERSON', person)
      this.name = ''
    },
    addPersonWang() {
      this.$store.dispatch('personOptions/addWang', {id: nanoid(), name: this.name})
      this.name = ''
    },
    addPersonServer() {
      this.$store.dispatch('personOptions/addPersonServer')
    }
  }
}
</script>