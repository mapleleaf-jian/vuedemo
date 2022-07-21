<template>
  <div>
    <h3>当前求和为：{{$store.state.sum}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">奇数才能加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: 'CountDemo',
  data() {
    return {
      n: 1 // 用户选择的
    }
  },
  methods: {
    increment() { // mutations中的逻辑能满足需求，可以直接跳过actions
      // this.$store.dispatch('add', this.n)
      this.$store.commit('ADD', this.n)
    },
    decrement() {
      // this.$store.dispatch('sub', this.n)
      this.$store.commit('SUB', this.n)
    },
    incrementOdd() {
      this.$store.dispatch('addOdd', this.n)
    },
    incrementWait() {
      this.$store.dispatch('addWait', this.n)
    }
  }
}
</script>

<style scoped>
  button {
    margin-left: 4px;
  }
</style>
