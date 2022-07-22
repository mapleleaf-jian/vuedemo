<template>
  <div>
    <h3>当前求和为：{{sum}}</h3>
    <h4>当前求和扩大10倍为：{{bigSum}}</h4>
    <h3>地址：{{address}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">奇数才能加</button>
    <button @click="incrementWait(n)">等一等再加</button>
    <p style="color: red">Person组件的人数为：{{persons.length}}</p>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: 'CountDemo',
  data() {
    return {
      n: 1
    }
  },
  computed: {
    ...mapState(['sum', 'address', 'persons']),
    ...mapGetters(['bigSum'])
  },
  methods: {
    ...mapActions({incrementOdd: 'addOdd', incrementWait: 'addWait'}),
    ...mapMutations({increment: 'ADD', decrement: 'SUB'})
  }
}
</script>

<style scoped>
  button {
    margin-left: 4px;
  }
</style>
