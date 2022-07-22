<template>
  <div>
    <p style="color: skyblue">Count组件的和为：{{sum}}</p>
    <input type="text" placeholder="请输入姓名" v-model="name">
    <button @click="addPerson()">添加</button>
    <ul>
      <li v-for="p of persons" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {nanoid} from 'nanoid'
export default {
  name: 'PersonDemo',
  data() {
    return {
      name: ''
    }
  },
  computed: {
    ...mapState(['persons', 'sum'])
  },
  methods: {
    addPerson() {
      const person = {id: nanoid(), name: this.name}
      this.$store.commit('ADD_PERSON', person)
      this.name = ''
    }
  }
}
</script>

<style scoped>

</style>